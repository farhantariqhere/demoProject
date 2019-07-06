const firebase = require('firebase');
const AuthUtil = require('./AuthUtil');

const {
  cLog,
  config
} = require('../../helpers');

class AuthManager {

  static async createUser (data) {

    cLog.info('createUser:: Request to create user: ', data);

    AuthUtil.validateSignUpRequest(data);

    firebase.initializeApp(config.firebaseConfig);

    const firebaseAuth = firebase.auth();

    const user = await firebaseAuth.createUserWithEmailAndPassword(data.email, data.password);

    cLog.success('createUser:: User successfully created.....', user);

  }

  static async authenticate (data) {

    cLog.info('authenticate:: Request to authenticate user: ', data);

    AuthUtil.validateLoginRequest(data);

    firebase.initializeApp(config.firebaseConfig);

    const firebaseAuth = firebase.auth();

    const user = await firebaseAuth.signInWithEmailAndPassword(data.email, data.password);

    cLog.success('authenticate:: User is authenticated.....', user);

  }

}

module.exports = AuthManager;
