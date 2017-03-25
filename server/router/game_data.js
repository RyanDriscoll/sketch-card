const express = require('express');
const router = express.Router();

const Request = require('request');
const Promise = require('bluebird');
const axios = require('axios');

//API cred
const sportsKey = require('../../secret.js').sportsRadar;

//Date
const today = new Date();
const formatDate = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`

//Grab Todays MLB schedule
const apiSchedule = `http://api.sportradar.us/mlb-t6/games/${formatDate}/schedule.json?api_key=${sportsKey}`


//Gets Daily game schedule
function getSchedule() {
  const games = []
  axios.get(apiSchedule)
    .then(sched => {
      sched.data.games.forEach(game => {
        const newGame = {}
        newGame.homeName = game.home.name;
        newGame.homeId = game.home_team;
        newGame.awayName = game.away.name;
        newGame.awayId = game.away_team;
        newGame.time = game.scheduled;
        games.push(newGame)
      })
    })
    .then( () => console.log(games))
}


//send schedule on request from client
router.get('/games', (req, res, next) => {
  const games = []
  axios.get(apiSchedule)
    .then(sched => {
      sched.data.games.forEach(game => {
        const newGame = {}
        newGame.homeName = game.home.name;
        newGame.homeId = game.home_team;
        newGame.awayName = game.away.name;
        newGame.awayId = game.away_team;
        newGame.time = game.scheduled;
        games.push(newGame)
      })
    })
    .then( () => res.send(games))
})

//Get Rosters
router.get('/team/:teamId', (req, res, next) => {
  const apiRoster = `http://api.sportradar.us/mlb-t6/teams/${req.params.teamId}/profile.json?api_key=${sportsKey}`
  axios.get(apiRoster)
    .then(roster => res.send(roster.data.players))
})



module.exports = {router};
