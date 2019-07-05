
const express = require('express');

const router = express.Router({
  mergeParams: true
});

const AuthController = require('../app/auth/AuthController');

router.get('/login', AuthController.login);
router.post('/signup', AuthController.signUp);

module.exports = router;
