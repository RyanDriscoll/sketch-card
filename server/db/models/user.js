var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/reactappdb');

module.exports = db.define('User', {
})

