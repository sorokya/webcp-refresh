require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routers);

// eslint-disable-next-line no-console
app.listen(3001, () => console.log('API listening at localhost:3001/graphql'));
