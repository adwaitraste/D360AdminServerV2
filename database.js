const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
    dialect: 'sqlite',
    storage: './D360Admin.db'
});