const mariadb = require('mariadb');

const database = {
  createConnection() {
    return new Promise((resolve, reject) => {
      mariadb
        .createConnection({
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        })
        .then(resolve)
        .catch((err) => {
          reject(err);
          throw err;
        });
    });
  },
};

module.exports = database;
