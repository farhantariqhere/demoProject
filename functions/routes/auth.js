
const express = require('express');

const router = express.Router({
  mergeParams: true
});

const AuthController = require('../app/auth/AuthController');

router.get('/login', AuthController.login);
router.get('/signup', AuthController.signUp);
router.post('/createUser', AuthController.createUser);
router.post('/authenticate', AuthController.authenticate);

module.exports = router;
