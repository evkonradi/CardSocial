const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our User model
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// define table columns and configuration
User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING
    },
    home_address: {
        type: DataTypes.STRING
    },
    business_name: {
        type: DataTypes.STRING
    },
    business_address: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING
    },
    personal_phone: {
        type: DataTypes.STRING,
      },
    business_phone: {
        type: DataTypes.STRING
    },
    business_phone_ext: {
        type: DataTypes.STRING
    },
    personal_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
    },
    business_email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    junk_email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
          }
    },
    business_url: {
        type: DataTypes.STRING,
        validate: {isUrl : true}
    },
    linkedin_url: {
        type: DataTypes.STRING,
        validate: {isUrl : true}
    },
    instagram_url: {
        type: DataTypes.STRING,
        validate: {isUrl : true}
    },
    facebook_url: {
        type: DataTypes.STRING,
        validate: {isUrl : true}
    },
    twitter_url: {
        type: DataTypes.STRING,
        validate: {isUrl : true}
    },
    bio: {
        type: DataTypes.STRING
    },
    slogan: {
        type: DataTypes.STRING
    },
    pwd: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6]
        }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;