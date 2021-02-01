const getAdminRank = require('../getAdminRank');

const findAccount = async ({ username }, context) => {
  const {
    models: { Account },
  } = context;

  const notLoggedIn = !context.user;
  const accountIsUser = context.user === username;
  const isGM = async () =>
    (await getAdminRank({ username: context.user }, context)) >= 4;

  if (notLoggedIn || accountIsUser || (await isGM())) {
    const account = await Account(context.getDatabase()).findOne({
      where: {
        username,
      },
    });

    return account;
  }

  return undefined;
};

module.exports = findAccount;
