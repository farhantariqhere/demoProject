const CarHandler = require('./CarHandler');
const CarUtil = require('./CarUtil');
const ApplicationException = require('../../exceptions/ApplicationException');

const {
  cLog,
  validators
} = require('../../helpers');

class CarManager {

  static async listAllCars () {

    cLog.info('listAllCars:: Request to fetch list of all cars');

    const cars = await CarHandler.listAllCarsOfUser();

    cLog.success('listAllCars:: List of cars successfully fetched....', cars);

    return cars;

  }

  static async carDetail (id) {

    cLog.info('getOneCar:: Request to fetch detail of a car:: ', id);

    const car = await CarHandler.getOneCar(id);

    cLog.success('getOneCar:: Detail of the car successfully fetched....', car);

    return car;

  }

  static async createCar (data) {

    cLog.info('createCar:: Request to create new car record:: ', data);

    CarUtil.validateCreateCarRequest(data);

    const car = await CarHandler.createCar(data);

    cLog.success('createCar:: A new record for the car has been successfully created....', car);

    return car;

  }

  static async updateCar (id, data) {

    cLog.info('updateCar:: Request to update car record:: ', data);

    CarUtil.validateUpdateCarRequest(data);

    const car = await CarHandler.updateCar(id, data);

    cLog.success('updateCar:: Car successfully has been updated....', car);

    return car;

  }

  static async deleteCar (id) {

    cLog.info('deleteCar:: Request to delete car carId:: ', id);

    const car = await CarHandler.deleteCar(id);

    cLog.success('updateCar:: Car successfully deleted....', car);

    return car;

  }

}

module.exports = CarManager;
