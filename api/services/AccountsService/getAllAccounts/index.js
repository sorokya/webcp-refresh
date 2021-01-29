const getAllAccounts = async (context) => {
  const {
    models: { Account },
  } = context;

  const accounts = await Account.getAll();
  return accounts;
};

module.exports = getAllAccounts;
