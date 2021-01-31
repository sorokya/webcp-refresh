const accountSchema = require('./Account/schema');
const characterSchema = require('./Character/schema');
const loginResultSchema = require('./LoginResult/schema');

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
    ): LoginResult
  }
  `,
];

const schema = [
  ...rootSchema,
  ...accountSchema,
  ...characterSchema,
  ...loginResultSchema,
];

module.exports = schema;
