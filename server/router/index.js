'use strict';
//THIS IS WHERE I SET UP DIRECTING MY ROUTES

const express = require('express');
const router = express.Router();
const gameData = require('./game_data');

router.use('/game_data', gameData);

router.use(function (req, res) {
  res.status(404).end();
});


module.exports = router;
