const getAdminRank = async ({ username }, context) => {
  const {
    models: { Account },
  } = context;

  const account = await Account.getAdminRank(username);
  return account;
};

module.exports = getAdminRank;
