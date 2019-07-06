const firebase = require('firebase');

const {
  cLog,
  config
} = require('../../helpers');

class UserManager {

  static async signOut (data) {

    cLog.info('signOut:: Request to signOut user:: ', data);

    firebase.initializeApp(config.firebaseConfig);

    const firebaseAuth = firebase.auth();

    const user = await firebaseAuth.signOut();

    cLog.success('signOut:: User successfully signed out.....', user);

  }

}

module.exports = UserManager;
