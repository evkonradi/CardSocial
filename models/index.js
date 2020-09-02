const User = require('./User');
const Font = require('./font');
const Background = require('./background');
const Icon = require('./icon');
const Card = require('./card');

User.hasMany(Card, {
    foreignKey: 'user_id',
});

Card.belongsTo(User, {
    foreignKey: 'user_id',
});

Font.hasMany(Card, {
    foreignKey: 'font_id',
});

Card.belongsTo(Font, {
    foreignKey: 'font_id',
});

Background.hasMany(Card, {
    foreignKey: 'background_id',
});

Card.belongsTo(Background, {
    foreignKey: 'background_id',
});

Icon.hasMany(Card, {
    foreignKey: 'icon_id',
});

Card.belongsTo(Icon, {
    foreignKey: 'icon_id',
});

module.exports = { User, Font, Background, Icon, Card };
