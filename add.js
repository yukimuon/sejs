const Sequelize = require('sequelize');
require('dotenv').config()
var DataTypes = require('sequelize/lib/data-types');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_ADD, port: process.env.DB_PORT,
  dialect: 'mariadb'
});

sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
}).then(()=>{
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    birthday:{
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  });
  User.create({
    firstName:'Yuki',
    lastName:'Nagato',
    birthday:'2000-01-01'
  })
}).then(()=>{  
  sequelize.sync();
})

