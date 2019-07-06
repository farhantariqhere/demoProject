const express = require('express');

const router = express.Router({
  mergeParams: true
});

const UserController = require('../app/user/UserController');

router.get('/home', UserController.home);
router.get('/signout', UserController.signOut);

module.exports = router;
