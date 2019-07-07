const fs = require('fs');
const path = require('path');
const config = require('config');
const validators = require('./validators');
const cLog = require('./console');
const database = require('./database');
const firebaseAuth = require('./firebase');

module.exports = {
  fs,
  path,
  config,
  cLog,
  validators,
  database,
  firebaseAuth
};
