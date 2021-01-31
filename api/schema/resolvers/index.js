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
        services: { AccountsService, CharactersService },
      } = context;

      const admin = await AccountsService.getAdminRank(
        {
          username: context.user.username,
        },
        context
      );

      console.log(admin);

      if (admin > 0) {
        const characters = await CharactersService.getAllCharacters(context);
        return characters;
      }

      const characters = await CharactersService.getCharactersForAccount(
        { accountName: context.user.username },
        context
      );
      return characters;
    },
  },
  Mutation: {
    login: async (_, { username, password }, context) => {
      const {
        services: { AccountsService },
      } = context;

      const token = await AccountsService.authenticate(
        { username, password },
        context
      );

      return token;
    },
  },
};

module.exports = {
  ...rootResolvers,
  ...accountResolvers,
};
