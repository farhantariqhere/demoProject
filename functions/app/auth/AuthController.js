const AuthManager = require('./AuthManager');

const {
  cLog
} = require('../../helpers');

class AuthController {

  static async signUp (req, res) {

    try {

      res.render('signup');

    } catch (err) {

      cLog.error('signUp:: User sign up failed: data:: ', req.body, err);

      res.redirect('/user/signup');

    }

  }

  static async createUser (req, res) {

    try {

      await AuthManager.createUser(req.body);

      res.redirect('/user/login');

    } catch (err) {

      cLog.error('createUser:: Creating new user failed:: data:: ', req.body, err);

      res.redirect('/user/signup');

    }

  }

  static async login (req, res) {

    try {

      res.render('login');

    } catch (err) {

      cLog.error('login:: User login failed: data:: ', req.body, err);

      res.redirect('/user/login');

    }

  }

  static async authenticate (req, res) {

    try {

      await AuthManager.authenticate(req.body);

      res.redirect('/car/list');

    } catch (err) {

      cLog.error('login:: User login failed: data:: ', req.body, err);

      res.redirect('/user/login');

    }

  }

}

module.exports = AuthController;
