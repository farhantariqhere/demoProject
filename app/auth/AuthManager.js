const firebase = require('firebase');
const AuthUtil = require('./AuthUtil');

const {
  cLog,
  config,
  firebaseAuth
} = require('../../helpers');

class AuthManager {

  static async createUser (data) {

    cLog.info('createUser:: Request to create user: ', data);

    AuthUtil.validateSignUpRequest(data);

    // firebase.initializeApp(config.firebaseConfig);
    //
    // const firebaseAuth = firebase.auth();

    const user = await firebaseAuth.createUserWithEmailAndPassword(data.email, data.password);

    cLog.success('createUser:: User successfully created.....', data.email);

  }

  static async authenticate (data) {

    cLog.info('authenticate:: Request to authenticate user: ', data);

    AuthUtil.validateLoginRequest(data);

    // firebase.initializeApp(config.firebaseConfig);
    //
    // const firebaseAuth = firebase.auth();

    const result = await firebaseAuth.signInWithEmailAndPassword(data.email, data.password);

    cLog.success('authenticate:: User is authenticated.....', data.email, ' firebase uid:: ', result.user.uid);

    return result.user;

  }

}

module.exports = AuthManager;
