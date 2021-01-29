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

const getAll = async () => {
  const conn = await database.createConnection();
  const rows = await conn.query(SelectSql);
  rows.splice(rows.length, 1); // meta row
  conn.end();
  return rows;
};

module.exports = { getAll };
