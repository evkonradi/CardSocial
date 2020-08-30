const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Create our Font model
class Font extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Define table columns and configuration
Font.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    font_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    font_size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    font_decoration: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [0,2]}
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
    modelName: 'fonts'
  }
);

module.exports = Font;