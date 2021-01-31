const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const generateHash = (username, password) => {
  const hash = crypto.createHash('sha256');
  hash.update(`${process.env.PASSWORD_SALT}${username}${password}`);
  return hash.digest('hex');
};

const result = (message, token) => ({
  message,
  token,
});

const authenticate = async ({ username, password }, context) => {
  const {
    models: { Account },
  } = context;

  const account = await Account.find(username);
  if (!account || account.password !== generateHash(username, password)) {
    return result('Your login failed');
  }

  const token = jwt.sign({ data: username }, process.env.TOKEN_SALT, {
    expiresIn: '1h',
  });

  return result('success', token);
};

module.exports = authenticate;
