
const express = require('express');

const router = express.Router({
  mergeParams: true
});

const authentication = require('../middlewares/authentication');
const AuthController = require('../app/auth/AuthController');

router.get('/login', authentication.redirectToHome, AuthController.login);
router.get('/signup', authentication.redirectToHome, AuthController.signUp);
router.post('/createUser', authentication.redirectToHome, AuthController.createUser);
router.post('/authenticate', authentication.redirectToHome, AuthController.authenticate);

module.exports = router;
