const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Create our Font model
class Background extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Define table columns and configuration
Background.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    background_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    background_color: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  },
  {
    // Pass in our imported sequelize connection
    sequelize,
    // Don't automatically create timestamp fields
    timestamps: false,
    // Don't pluralize name of database table
    freezeTableName: true,
    // Use underscores instead of camel-casing
    underscored: true,
    // Define model name as lowercase in the database
    modelName: 'backgrounds'
  }
);

module.exports = Background;