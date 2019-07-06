const CarManager = require('./CarManager');

const {
  cLog
} = require('../../helpers');

class CarController {

  static async listAllCars (req, res) {

    try {

      const cars = await CarManager.listAllCars();

      res.render('car/carsList', { cars });

    } catch (err) {

      cLog.error('listAllCars:: Fetching list of cars failed:: ', err);

      res.redirect('/error');

    }

  }

  static async carDetail (req, res) {

    try {

      const car = await CarManager.carDetail(req.params.id);

      // res.json(cars);
      res.render('home');

    } catch (err) {

      cLog.error('carDetail:: Could not get car detail:: ', err);

      res.render('home');

    }

  }

  static async createCar (req, res) {

    try {

      const car = await CarManager.createCar(req.params.id, req.body);

      // res.json(cars);
      res.render('home');

    } catch (err) {

      cLog.error('createCar:: Could not create new record of car:: ', err);

      res.render('home');

    }

  }

  static async updateCar (req, res) {

    try {

      const car = await CarManager.updateCar(req.params.id, req.body);

      // res.json(cars);
      res.render('home');

    } catch (err) {

      cLog.error('updateCar:: Updating car failed:: ', err);

      res.render('home');

    }

  }

  static async deleteCar (req, res) {

    try {

      const car = await CarManager.deleteCar(req.params.id);

      // res.json(cars);
      res.render('home');

    } catch (err) {

      cLog.error('deleteCar:: Could not delete the car:: ', err);

      res.render('home');

    }

  }

}

module.exports = CarController;
