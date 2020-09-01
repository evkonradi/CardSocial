const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our Card model
class Card extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.pwd);
//   }
}

// Define Card table columns
Card.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    card_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {len: [5, 7]}
    },
    card_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    font_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'font',
            key: 'id'
        }
    },
    background_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "background",
            key: "id"
        }
    },
    icon_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "icon",
            key: "id"
        }
    },
    show_first_name: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_last_name: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_nickname: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_home_address: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_business_name: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_business_address: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_position: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_personal_phone: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
    show_business_phone: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_business_phone_ext: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_personal_email: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_business_email: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    show_junk_email: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    show_business_url: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_linkedin_url: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_instagram_url: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_facebook_url: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_twitter_url: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_bio: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    show_slogan: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'card'
  }
);

module.exports = Card;