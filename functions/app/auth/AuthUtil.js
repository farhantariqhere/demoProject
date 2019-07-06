const ApplicationException = require('../../exceptions/ApplicationException');

const {
  validators
} = require('../../helpers');

class AuthUtil {

  static validateSignUpRequest (data) {

    if (!data) {

      throw new ApplicationException('Invalid data to sign up user').toJson();

    }

    if (!validators.isValidStr(data.email)) {

      throw new ApplicationException('Invalid email address').toJson();

    }

    if (!validators.isValidStr(data.password)) {

      throw new ApplicationException('Invalid password').toJson();

    }

    if (data.password.length < 6) {

      throw new ApplicationException('Password must be have at least 6 characters').toJson();

    }

  }

  static validateLoginRequest (data) {

    if (!data) {

      throw new ApplicationException('Invalid data to login').toJson();

    }

    if (!validators.isValidStr(data.email)) {

      throw new ApplicationException('Invalid email address').toJson();

    }

    if (!validators.isValidStr(data.password)) {

      throw new ApplicationException('Invalid password').toJson();

    }

  }

}

module.exports = AuthUtil;
