const database = require('../../database');

const SelectSql = `
SELECT
  name,
  account,
  title,
  home,
  fiance,
  partner,
  admin,
  class,
  gender,
  race,
  hairstyle,
  haircolor,
  map,
  x,
  y,
  direction,
  level,
  exp,
  hp,
  tp,
  str,
  \`int\`,
  wis,
  agi,
  con,
  cha,
  statpoints,
  skillpoints,
  karma,
  sitting,
  hidden,
  nointeract,
  bankmax,
  goldbank,
  \`usage\`,
  inventory,
  bank,
  paperdoll,
  spells,
  guild,
  guild_rank,
  guild_rank_string,
  quest,
  vars
FROM characters
`;

const getAll = async () => {
  const conn = await database.createConnection();
  const rows = await conn.query(SelectSql);
  rows.splice(rows.length, 1); // meta row
  conn.end();
  return rows;
};

const getCharactersForAccount = async (accountName) => {
  const conn = await database.createConnection();
  const rows = await conn.query(`${SelectSql} WHERE account = ?`, accountName);
  conn.end();
  return rows;
};

module.exports = { getAll, getCharactersForAccount };
