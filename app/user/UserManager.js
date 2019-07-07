const firebase = require('firebase');

const {
  cLog,
  config,
  firebaseAuth
} = require('../../helpers');

class UserManager {

  static async signOut () {

    cLog.info('signOut:: Request to signOut user:: ');

    // firebase.initializeApp(config.firebaseConfig);
    //
    // const firebaseAuth = firebase.auth();

    const user = await firebaseAuth.signOut();

    cLog.success('signOut:: User successfully signed out.....');

  }

}

module.exports = UserManager;
