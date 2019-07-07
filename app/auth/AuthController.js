const AuthManager = require('./AuthManager');

const {
  cLog
} = require('../../helpers');

class AuthController {

  static async signUp (req, res) {

    res.render('signup', { error: req.session.error });

    req.session.error = null;

  }

  static async createUser (req, res) {

    try {

      await AuthManager.createUser(req.body);

      req.session.error = null;

      return res.redirect('/user/login');

    } catch (err) {

      cLog.error('createUser:: Creating new user failed:: data:: ', req.body, err);

      req.session.error = err.message;

      return res.redirect('/user/signup');

    }

  }

  static async login (req, res) {

    res.render('login', { error: req.session.error });

    req.session.error = null;

  }

  static async authenticate (req, res) {

    try {

      const user = await AuthManager.authenticate(req.body);

      const session = req.session;
      req.session.error = null;
      session.email = req.body.email;
      session.uid = user.uid;

      return res.redirect('/car/list');

    } catch (err) {

      cLog.error('login:: User login failed: data:: ', req.body, err);

      req.session.error = err.message;

      return res.redirect('/user/login');

    }

  }

}

module.exports = AuthController;
