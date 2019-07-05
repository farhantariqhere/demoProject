const AuthManager = require('./AuthManager');

class AuthController {

  static async signUp (req, res) {

    await AuthManager.login();

    res.render('signup', { name: 'ABC' });

  }

  static async login (req, res) {

    await AuthManager.login();

    res.render('index', { name: 'ABC' });

  }

}

module.exports = AuthController;
