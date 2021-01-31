const database = require('../../database');

const SelectSql = `
SELECT 
  username, 
  password,
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

module.exports = {
  find,
  getAll,
};
