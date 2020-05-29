const Sequelize = require('sequelize');
var fs = require('fs');



// Option 1: Passing parameters separately
const sequelize = new Sequelize('autograde', 'autograde', 'autograde', {
  host: '127.0.0.1', port: "3306",
  dialect: 'mariadb'
});

process.env.db_timezone = 'Etc/GMT0'

sequelize.query('SELECT * FROM classes').then(function(rows) {
    console.log(JSON.stringify(rows))

})
.then(() => {
    sequelize.close()
});

