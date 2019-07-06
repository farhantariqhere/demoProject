const ApplicationException = require('../../exceptions/ApplicationException');

const {
  cLog,
  validators
} = require('../../helpers');

class CarUtil {

  static validateCreateCarRequest (data) {

    if (!data) {

      throw new ApplicationException('Invalid data to create car').toJson();

    }

    if (!validators.isValidStr(data.name)) {

      throw new ApplicationException('Invalid name').toJson();

    }

    if (!validators.isValidStr(data.color)) {

      throw new ApplicationException('Invalid color').toJson();

    }

  }

  static validateUpdateCarRequest (data) {

    if (!data) {

      throw new ApplicationException('Invalid data to create car').toJson();

    }

    if (!validators.isValidStr(data.name)) {

      throw new ApplicationException('Invalid name').toJson();

    }

    if (!validators.isValidStr(data.color)) {

      throw new ApplicationException('Invalid color').toJson();

    }

  }

}

module.exports = CarUtil;
