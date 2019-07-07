const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');
const expressSession = require('express-session');
const auth = require('./auth');
const userRoutes = require('./user');
const carRoutes = require('./car');
const authentication = require('../middlewares/authentication');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession({ secret: 'demoApp', saveUninitialized: false, resave: false }));
app.use(express.static(path.join(__dirname, '../assets')));

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout.hbs',
  layoutsDir: path.join(__dirname, '../views/layouts/')
}));
app.set('views', './views');
app.set('view engine', 'hbs');

app.use('/user/', auth);

app.use(authentication.isAuthenticated);

app.use('/user/', userRoutes);
app.use('/car/', carRoutes);
app.get('/error', (req, res) => res.render('error'));

app.use((req, res) => res.render('error'));

module.exports = app;
