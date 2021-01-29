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
  `,
];

const schema = [...rootSchema, ...accountSchema, ...characterSchema];

module.exports = schema;
