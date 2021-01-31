const { DataTypes } = require('sequelize');
const sequelize = require('../../database').get();

const Character = sequelize.define(
  'characters',
  {
    name: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true,
    },
    account: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    home: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    fiance: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    partner: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    race: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    hairstyle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    haircolor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    map: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 192,
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 7,
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 6,
    },
    direction: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
    },
    tp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    int: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    wis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    agi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    con: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    cha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    statpoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    skillpoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    karma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1000,
    },
    sitting: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    hidden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    nointeract: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    bankmax: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    goldbank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    usage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    inventory: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    bank: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    paperdoll: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    spells: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guild: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    guild_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    guild_rank_string: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    quest: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    vars: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'characters',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'name' }],
      },
      {
        name: 'character_account_index',
        using: 'BTREE',
        fields: [{ name: 'account' }],
      },
      {
        name: 'character_guild_index',
        using: 'BTREE',
        fields: [{ name: 'guild' }],
      },
    ],
  }
);

module.exports = Character;
