const createContext = require('../../../test/utils/createContext');
const findAccount = require('.');

describe('Given the user is a player', () => {
  describe('findAccount', () => {
    const context = createContext('player');

    it("should return the player's own account", async () => {
      const account = await findAccount({ username: 'player' }, context);
      expect(account).toBeDefined();
    });

    it("should not return other player's accounts", async () => {
      const account = await findAccount({ username: 'admin' }, context);
      expect(account).toBeUndefined();
    });
  });
});

describe('Given the user is a GM', () => {
  describe('findAccount', () => {
    const context = createContext('admin');

    it("should return the player's own account", async () => {
      const account = await findAccount({ username: 'admin' }, context);
      expect(account).toBeDefined();
    });

    it("should return other player's accounts", async () => {
      const account = await findAccount({ username: 'player' }, context);
      expect(account).toBeDefined();
    });
  });
});
