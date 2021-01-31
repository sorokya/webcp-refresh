const authenticate = async ({ username, password }, context) => {
  const {
    models: { Account },
  } = context;

  const token = await Account.authenticate(username, password);
  return token;
};

module.exports = authenticate;
