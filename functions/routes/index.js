const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');
const auth = require('./auth');
const userRoutes = require('./user');
const carRoutes = require('./car');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout.hbs',
  layoutsDir: path.join(__dirname, '../views/layouts/')
}));
app.set('views', './views');
app.set('view engine', 'hbs');

app.use('/user/', auth);
app.use('/user/', userRoutes);
app.use('/car/', carRoutes);
app.get('/error', (req, res) => res.render('error'));

module.exports = app;
