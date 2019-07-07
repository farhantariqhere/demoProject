const CarManager = require('./CarManager');

const {
  cLog
} = require('../../helpers');

class CarController {

  static async listAllCars (req, res) {

    try {

      const cars = await CarManager.listAllCars(req.session.email);

      res.render('car/carsList', { cars, email: req.session.email, error: req.session.error });

      req.session.error = null;

    } catch (err) {

      cLog.error('listAllCars:: Fetching list of cars failed:: ', err);

      res.redirect('/error');

    }

  }

  static async carDetail (req, res) {

    try {

      const car = await CarManager.carDetail(req.params.id);

      if (!car || !car.length) {

        req.session.error = 'Invalid car';

        return res.redirect('/car/list');

      }

      res.render('car/carDetail', { car: car[0] });

    } catch (err) {

      cLog.error('carDetail:: Could not get car detail:: ', err);

      req.session.error = 'Something went wrong';

      res.redirect('/car/list');

    }

  }

  static async newCar (req, res) {

    res.render('car/newCar', { error: req.session.error });

    req.session.error = null;

  }

  static async createCar (req, res) {

    try {

      req.body.email = req.session.email;

      const car = await CarManager.createCar(req.body);

      res.redirect('/car/list');

    } catch (err) {

      cLog.error('createCar:: Could not create new record of car:: ', err);

      if (err.reportError) {

        req.session.error = err.message;

      } else {

        req.session.error = 'Something went wrong';

      }

      res.redirect('/car/new');

    }

  }

  static async editCar (req, res) {

    try {

      const car = await CarManager.carDetail(req.params.id);

      if (!car || !car.length) {

        req.session.error = 'Invalid update request';

        return res.redirect('/car/list');

      }

      res.render('car/editCar', { car: car[0], error: req.session.error });

      req.session.error = null;

    } catch (err) {

      cLog.error('editCar:: Could not get car to edit:: ', err);

      req.session.error = 'Something went wrong';

      res.redirect('/car/list');

    }

  }

  static async updateCar (req, res) {

    try {

      const car = await CarManager.updateCar(req.params.id, req.body);

      res.redirect('/car/list');

    } catch (err) {

      cLog.error('updateCar:: Updating car failed:: ', err);

      if (err.reportError) {

        req.session.error = err.message;

      } else {

        req.session.error = 'Something went wrong';

      }

      res.redirect('/car/list');

    }

  }

  static async deleteCar (req, res) {

    try {

      const car = await CarManager.carDetail(req.params.id);

      if (!car || !car.length) {

        req.session.error = 'Invalid delete request';

        return res.redirect('/car/list');

      }

      res.render('car/deleteCar', { car: car[0] });

    } catch (err) {

      cLog.error('deleteCar:: Could not get car to delete:: ', err);

      req.session.error = 'Something went wrong';

      res.redirect('/car/list');

    }

  }

  static async destroyCar (req, res) {

    try {

      const car = await CarManager.deleteCar(req.params.id);

      res.redirect('/car/list');

    } catch (err) {

      cLog.error('destroyCar:: Could not delete the car:: ', err);

      req.session.error = 'Something went wrong';

      res.redirect('/car/list');

    }

  }

}

module.exports = CarController;
