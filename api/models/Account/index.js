const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const database = require('../../database');

const SelectSql = `
SELECT 
  username, 
  fullname, 
  location, 
  email, 
  computer, 
  hdid, 
  regip, 
  lastip, 
  created, 
  lastused 
FROM 
  accounts
`;

const getAdminRank = async (username) => {
  const sql = `
  SELECT MAX(c.admin) AS admin
  FROM accounts a
  INNER JOIN characters c
    ON c.account = a.username
  WHERE a.username = ?
  `;

  const conn = await database.createConnection();
  const rows = await conn.query(sql, username);
  if (rows.length > 0) {
    return rows[0].admin;
  }

  return 0;
};

const getAll = async () => {
  const conn = await database.createConnection();
  const rows = await conn.query(SelectSql);
  rows.splice(rows.length, 1); // meta row
  conn.end();
  return rows;
};

const find = async (username) => {
  const conn = await database.createConnection();
  const rows = await conn.query(`${SelectSql} WHERE username = ?`, username);
  if (rows.length > 0) {
    return rows[0];
  }

  return undefined;
};

const generateHash = (username, password) => {
  const hash = crypto.createHash('sha256');
  hash.update(`${process.env.PASSWORD_SALT}${username}${password}`);
  return hash.digest('hex');
};

const authenticate = async (username, password) => {
  const hash = generateHash(username, password);
  const conn = await database.createConnection();
  const rows = await conn.query(
    `${SelectSql} WHERE username = ? AND password = ?`,
    [username, hash]
  );

  if (rows.length > 0) {
    return jwt.sign({ data: username }, process.env.TOKEN_SALT, {
      expiresIn: '1h',
    });
  }

  return undefined;
};

module.exports = {
  find,
  getAdminRank,
  getAll,
  authenticate,
};
