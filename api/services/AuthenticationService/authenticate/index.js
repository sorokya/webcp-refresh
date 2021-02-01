const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const generateHash = (username, password, salt) => {
  const hash = crypto.createHash('sha256');
  hash.update(`${salt}${username}${password}`);
  return hash.digest('hex');
};

const result = (message, token) => ({
  message,
  token,
});

const authenticate = async ({ username, password }, context) => {
  const {
    services: { AccountsService },
  } = context;

  const account = await AccountsService.findAccount({ username }, context);

  if (
    !account ||
    account.password !==
      generateHash(username, password, context.eoservPasswordSalt)
  ) {
    return result('Your login failed');
  }

  const token = jwt.sign({ data: username }, process.env.TOKEN_SALT, {
    expiresIn: '1h',
  });

  return result('success', token);
};

module.exports = authenticate;
