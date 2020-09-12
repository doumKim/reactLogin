const express = require('express');
const router = express.Router();

const { usersController } = require('../controllers');

router.post('/login', usersController.login.post);

router.post('/logout', usersController.logout.post);

router.post('/signup', usersController.signup.post);

router.get('/info', usersController.info.get);

module.exports = router;
