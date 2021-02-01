const getAllAccounts = async (context) => {
  const {
    models: { Account },
  } = context;

  const accounts = await Account(context.getDatabase()).getAll();
  return accounts;
};

module.exports = getAllAccounts;
