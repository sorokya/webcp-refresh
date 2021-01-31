const authenticate = async ({ username, password }, context) => {
  const {
    models: { Account },
  } = context;

  const token = await Account.authenticate(username, password);
  return {
    message: token ? 'success' : 'Your login failed',
    token,
  };
};

module.exports = authenticate;
