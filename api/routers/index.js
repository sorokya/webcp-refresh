const jwt = require('jsonwebtoken');
const router = require('express-promise-router')();
const { graphiqlExpress } = require('apollo-server-express/dist/expressApollo');
const { graphqlExpress } = require('apollo-server-express');
const models = require('../models');
const services = require('../services');
const schema = require('../schema');

const getUser = (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = jwt.verify(
      authHeader.replace('Bearer ', ''),
      process.env.TOKEN_SALT
    );
    return token.data;
  }

  return undefined;
};

const buildOptions = (req, res) => ({
  context: {
    models,
    services,
    user: getUser(req),
  },
  schema,
});

router.all('/graphql', graphqlExpress(buildOptions));

router.all(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

module.exports = router;
