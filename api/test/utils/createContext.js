const models = require('../../models');
const services = require('../../services');
const mockDatabase = require('./mockDatabase');

module.exports = (user) => ({
  models,
  services,
  getDatabase: mockDatabase.get,
  user,
  eoservPasswordSalt: 'TestSalt',
});
