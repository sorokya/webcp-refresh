const schema = [
  `
  """
  this represents a single character in EOSERV
  """
  type Character {
    name: String!
    account: String!
    title: String
    home: String
    fiance: String
    partner: String
    admin: Int!
    class: Int!
    gender: Int!
    race: Int!
    hairstyle: Int!
    haircolor: Int!
    map: Int!
    x: Int!
    y: Int!
    direction: Int!
    level: Int!
    exp: Int!
    hp: Int!
    tp: Int!
    str: Int!
    int: Int!
    wis: Int!
    agi: Int!
    con: Int!
    cha: Int!
    statpoints: Int!
    skillpoints: Int!
    karma: Int!
    sitting: Int!
    hidden: Int!
    nointeract: Int!
    bankmax: Int!
    goldbank: Int!
    usage: Int!
    inventory: String
    bank: String
    paperdoll: String
    spells: String
    guild: String,
    guild_rank: Int
    guild_rank_string: String
    quest: String
    vars: String
  }
  `,
];

module.exports = schema;
