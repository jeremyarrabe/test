const Users = require('./users');
const Histories = require('./histories');

Users.hasMany(Histories, { as: 'searchHistory' });
Histories.belongsTo(Users);

module.exports = { Users, Histories };
