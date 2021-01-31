const accountSchema = require('./Account/schema');
const characterSchema = require('./Character/schema');

const rootSchema = [
  `
  type Query {
    """
    List of accounts
    """
    accounts: [Account]
    """
    List of characters
    """
    characters: [Character]
  }

  type Mutation {
    login (
      username: String!
      password: String!
    ): String
  }
  `,
];

const schema = [...rootSchema, ...accountSchema, ...characterSchema];

module.exports = schema;
