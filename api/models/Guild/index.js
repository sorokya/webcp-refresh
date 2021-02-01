const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Guild = sequelize.define(
    'guilds',
    {
      tag: {
        type: DataTypes.CHAR(3),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: 'name',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ranks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      bank: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'guilds',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'tag' }],
        },
        {
          name: 'name',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'name' }],
        },
      ],
    }
  );

  return Guild;
};
