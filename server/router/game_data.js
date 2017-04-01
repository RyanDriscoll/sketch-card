const express = require('express');
const router = express.Router();

const Request = require('request');
const Promise = require('bluebird');
const axios = require('axios');

//API cred
const sportsKey = require('../../secret.js').sportsRadar;
const xmlStatsKey = require('../../secret.js').xmlStats;

//Date
const today = new Date();
const formatDate = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;

//Grab Todays MLB schedule
const apiSchedule = `http://api.sportradar.us/mlb-t6/games/${formatDate}/schedule.json?api_key=${sportsKey}`;


//Gets Daily game schedule
// function getSchedule() {
//   const games = [];
//   axios.get(apiSchedule)
//     .then(sched => {
//       sched.data.games.forEach(game => {
//         const newGame = {};
//         newGame.homeName = game.home.name;
//         newGame.homeId = game.home_team;
//         newGame.awayName = game.away.name;
//         newGame.awayId = game.away_team;
//         newGame.time = game.scheduled;
//         games.push(newGame);
//       });
//     })
//     .then(() => console.log(games))
//     .catch(err => console.error(err));
// }


//send schedule on request from client
router.get('/games', (req, res, next) => {
  const games = [];
  axios.get(apiSchedule)
    .then(sched => {
      sched.data.games.forEach(game => {
        const newGame = {};
        newGame.homeName = game.home.name;
        newGame.homeId = game.home_team;
        newGame.homeCity = game.home.market;
        newGame.awayName = game.away.name;
        newGame.awayId = game.away_team;
        newGame.awayCity = game.away.market;
        newGame.time = game.scheduled;
        games.push(newGame);
      });
    })
    .then(() => res.send(games))
    .catch(err => console.error(err));
});

//Get Rosters
const config = {
  headers: { 'Authorization': xmlStatsKey }
};
router.get('/team/:teamId', (req, res, next) => {
  console.log(req.params.teamId);
  const apiRoster = `https://erikberg.com/mlb/roster/${req.params.teamId}.json`;
  axios.get(apiRoster, config)
    .then(roster => res.json(roster.data.players))
    .catch(err => console.error(err));
});


module.exports = {router};
