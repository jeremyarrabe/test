const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

const Histories = sequelize.define(
  'histories',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: false,
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hostname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    loc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    org: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: true },
);

module.exports = Histories;
