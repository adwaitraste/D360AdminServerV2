const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database');

const User = db.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    FirstName: {
        type: DataTypes.STRING,
    },
    LastName: {
        type: DataTypes.STRING,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,                                                    
    },
    ChannelID: {
        type: DataTypes.UUID,
    },
    DesignerID: {
        type: DataTypes.UUID,
        defaultValue: null,
    },
    SalesPersonID: {
        type: DataTypes.UUID,
        defaultValue: null,
    },
    SalesOfficeID: {
        type: DataTypes.UUID,
    },
    SalesGroupID: {
        type: DataTypes.UUID,
    },
    Company:{
        type: DataTypes.STRING,
    },
    Position:{
        type: DataTypes.STRING,
    },
    Telephone: {
        type: DataTypes.STRING,
    },
    Mobile: {
        type: DataTypes.STRING,
    },
    Email: {
        type: DataTypes.STRING,
    },
})

module.exports = User;
