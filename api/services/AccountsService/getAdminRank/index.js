const getAdminRank = async ({ username }, context) => {
  const {
    services: { CharactersService },
  } = context;

  const characters = await CharactersService.getCharactersForAccount(
    {
      accountName: username,
    },
    context
  );

  return Math.max.apply(
    null,
    characters.map((c) => c.admin)
  );
};

module.exports = getAdminRank;
