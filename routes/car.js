const express = require('express');

const router = express.Router({
  mergeParams: true
});

const CarController = require('../app/car/CarController');

router.get('/list', CarController.listAllCars);
router.get('/detail/:id', CarController.carDetail);
router.get('/new', CarController.newCar);
router.post('/create', CarController.createCar);
router.get('/edit/:id', CarController.editCar);
router.post('/update/:id', CarController.updateCar);
router.get('/delete/:id', CarController.deleteCar);
router.post('/destroy/:id', CarController.destroyCar);

module.exports = router;
