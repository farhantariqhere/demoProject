const firebase = require('firebase');
const config = require('config');

firebase.initializeApp(config.firebaseConfig);

const firebaseAuth = firebase.auth();

module.exports = firebaseAuth;
