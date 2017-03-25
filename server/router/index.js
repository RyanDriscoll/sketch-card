'use strict';
//THIS IS WHERE I SET UP DIRECTING MY ROUTES

const express = require('express');
const router = express.Router();
const users = require('./users');

router.use('/users', users);

router.use(function (req, res) {
  res.status(404).end();
});


module.exports = router;