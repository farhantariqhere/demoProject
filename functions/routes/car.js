const express = require('express');

const router = express.Router({
  mergeParams: true
});

const CarController = require('../app/car/CarController');

router.get('/list', CarController.listAllCars);
router.get('/:id', CarController.carDetail);
router.post('/:id', CarController.createCar);
router.put('/:id', CarController.updateCar);
router.delete('/:id', CarController.deleteCar);

module.exports = router;
