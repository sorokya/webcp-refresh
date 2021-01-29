const accountResolvers = require('../Account/resolvers');

const rootResolvers = {
  Query: {
    accounts: async (_, __, context) => {
      const {
        services: { AccountsService },
      } = context;

      const accounts = await AccountsService.getAllAccounts(context);
      return accounts;
    },
    characters: async (_, __, context) => {
      const {
        services: { CharactersService },
      } = context;

      const characters = await CharactersService.getAllCharacters(context);
      return characters;
    },
  },
};

module.exports = {
  ...rootResolvers,
  ...accountResolvers,
};
