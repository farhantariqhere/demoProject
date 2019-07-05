const express = require('express');
const hbs = require('hbs');
const auth = require('./auth');

const app = express();

app.engine('hbs', hbs.__express);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use('/user/', auth);

module.exports = app;
