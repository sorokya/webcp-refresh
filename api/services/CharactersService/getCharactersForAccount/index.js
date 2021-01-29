const getCharactersForAccount = async ({ accountName }, context) => {
  const {
    models: { Character },
  } = context;

  const characters = await Character.getCharactersForAccount(accountName);
  return characters;
};

module.exports = getCharactersForAccount;
