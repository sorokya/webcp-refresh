const schema = [
  `
  """
  this represents a single account in EOSERV
  """
  type Account {
    username: String!
    fullname: String!
    location: String!
    email: String!
    computer: String!
    hdid: Int!
    regip: String!
    lastip: String
    created: Int!
    lastused: Int
    characters: [Character]
  }
  `,
];

module.exports = schema;
