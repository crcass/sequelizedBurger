const Sequelize = require('sequelize');

const sequelize = new Sequelize('burger_db', 'root', 'd0ntsayThat!', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
