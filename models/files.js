const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database');

const File = db.define("File", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    path: {
        type: DataTypes.STRING,
    },
})

module.exports = File;
