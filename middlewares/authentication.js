const {
  cLog
} = require('../helpers');

class Authentication {

  static isAuthenticated (req, res, next) {

    if (!req.session.email) {

      cLog.error('isAuthenticated:: User is not logged in:: ', req.session.email);

      return res.redirect('/user/login');

    }

    next();

  }

  static redirectToHome (req, res, next) {

    if (req.session.email) {

      return res.redirect('/car/list');

    }

    next();

  }

}

module.exports = Authentication;
