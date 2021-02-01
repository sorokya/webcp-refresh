const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'account',
    {
      username: {
        type: DataTypes.STRING(16),
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      computer: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      hdid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      regip: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      lastip: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      created: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lastused: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'accounts',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'username' }],
        },
      ],
    }
  );
