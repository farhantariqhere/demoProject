const ApplicationException = require('../../exceptions/ApplicationException');

const {
  cLog,
  validators
} = require('../../helpers');

class CarUtil {

  static validateCreateCarRequest (data) {

    if (!data) {

      throw new ApplicationException('Invalid data to create car', 400, { reportError: true }).toJson();

    }

    if (!validators.isValidStr(data.name)) {

      throw new ApplicationException('Invalid name', 400, { reportError: true }).toJson();

    }

    if (!validators.isValidStr(data.color)) {

      throw new ApplicationException('Invalid color', 400, { reportError: true }).toJson();

    }

  }

  static validateUpdateCarRequest (data) {

    if (!data) {

      throw new ApplicationException('Invalid data to create car', 400, { reportError: true }).toJson();

    }

    if (!validators.isValidStr(data.name)) {

      throw new ApplicationException('Invalid name', 400, { reportError: true }).toJson();

    }

    if (!validators.isValidStr(data.color)) {

      throw new ApplicationException('Invalid color', 400, { reportError: true }).toJson();

    }

  }

}

module.exports = CarUtil;
