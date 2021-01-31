const findAccount = async ({ username }, context) => {
  const {
    models: { Account },
  } = context;

  const account = await Account.find(username);
  return account;
};

module.exports = findAccount;
