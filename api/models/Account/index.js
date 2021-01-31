const { DataTypes } = require('sequelize');
const sequelize = require('../../database').get();

const Account = sequelize.define(
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

// const getAll = async () => {
//   const conn = await database.createConnection();
//   const rows = await conn.query(SelectSql);
//   rows.splice(rows.length, 1); // meta row
//   conn.end();
//   return rows;
// };

// const find = async (username) => {
//   const conn = await database.createConnection();
//   const rows = await conn.query(`${SelectSql} WHERE username = ?`, username);
//   if (rows.length > 0) {
//     return rows[0];
//   }

//   return undefined;
// };

module.exports = Account;
