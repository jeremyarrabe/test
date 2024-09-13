const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://admin:admin@localhost:5432/testdb', {
  dialect: require('pg'),
  logging: false,
});

async function connectToDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database error:', error);
  }
}

connectToDB();

module.exports = { sequelize };
