const findAccount = async ({ username }, context) => {
  const {
    models: { Account },
  } = context;

  const account = await Account.findOne({
    where: {
      username,
    },
  });

  return account;
};

module.exports = findAccount;
