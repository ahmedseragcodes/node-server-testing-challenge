const knex = require("knex");
const config = require("../knexfile");

const environment = process.env.DB_ENV  || "development"; //change to development if developing, test if testing 

module.exports = knex(config[environment]);