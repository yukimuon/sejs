const Sequelize = require('sequelize');
var fs = require('fs');
require('dotenv').config()


// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_ADD, port: process.env.DB_PORT,
  dialect: 'mariadb'
});

process.env.db_timezone = 'Etc/GMT0'
sequelize.query('show tables').then(function(rows) {
    console.log(JSON.stringify(rows))

})
.then(() => {
    sequelize.close()
});

