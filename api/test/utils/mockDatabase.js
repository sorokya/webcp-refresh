const { Sequelize } = require('sequelize');
const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'test/database.db',
  logging: false,
});

const get = () => db;

module.exports = { get };
