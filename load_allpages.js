var Sequelize = require('sequelize');
//var sequelize = new Sequelize('database', 'username', 'password');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
	storage: 'database.sqlite' // or ':memory:'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
//console.log("sequelize");
//console.log(sequelize);

//define model
var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});
//import Wikipage from "./wikipage.js";
var wikipage=require('Wikipage');

var Wikifile=require('wikifile');




//
//
// const viewersTable = {
//   id: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     primaryKey: true,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   followedAt: {
//     type: Sequelize.DATE,
//     allowNull: false,
//   },
//   isFollowing: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//   },
//   offlineFollow: {
//     type: Sequelize.BOOLEAN,
//     defaultValue: false,
//   },
//   createdAt: {
//     type: Sequelize.DATE,
//     defaultValue: Sequelize.NOW,
//   },
//   updatedAt: {
//     type: Sequelize.DATE,
//     defaultValue: Sequelize.NOW,
//   },
// };
// //await context.createTable("Viewers", viewersTable);
//
// module.exports = {
//   up: async ({ context }) => {
//     await context.createTable("Viewers", viewersTable);
//   },
//   down: async () => {},
// };
