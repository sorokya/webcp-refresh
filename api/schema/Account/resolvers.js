const resolvers = {
  Account: {
    characters: async ({ username }, _, context) => {
      const {
        services: { CharactersService },
      } = context;

      const characters = CharactersService.getCharactersForAccount(
        {
          accountName: username,
        },
        context
      );

      return characters;
    },
  },
};

module.exports = resolvers;
