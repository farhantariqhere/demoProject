const UserManager = require('./UserManager');

const {
  cLog
} = require('../../helpers');

class UserController {

  static async home (req, res) {

    try {

      return res.render('home');

    } catch (err) {

      cLog.error('home:: Fetching home page failed:: ', err);

      return res.redirect('/user/login');

    }

  }

  static async signOut (req, res) {

    try {

      await UserManager.signOut();

      req.session.destroy((err) => {

        if (err) {

          cLog.error('signOut:: User session could not destroy data:: ', err);

          res.redirect('/user/login');

        } else {

          res.redirect('/user/login');

        }

      });

    } catch (err) {

      cLog.error('signOut:: User sign out failed: data:: ', req.body, err);

      res.redirect('/user/login');

    }

  }

}

module.exports = UserController;
