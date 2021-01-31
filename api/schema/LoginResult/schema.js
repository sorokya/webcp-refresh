const schema = [
  `
  """
  result for a login attempt
  """
  type LoginResult {
    message: String!,
    token: String
  }
  `,
];

module.exports = schema;
