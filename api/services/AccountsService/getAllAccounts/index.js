const getAllAccounts = async (context) => {
  const {
    models: { Account },
  } = context;

  const accounts = await Account(context.getDatabase()).findAll();
  return accounts;
};

module.exports = getAllAccounts;
