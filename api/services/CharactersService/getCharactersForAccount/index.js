const getCharactersForAccount = async ({ accountName }, context) => {
  const {
    models: { Character },
  } = context;

  const characters = await Character.findAll({
    where: { account: accountName },
  });
  return characters;
};

module.exports = getCharactersForAccount;
