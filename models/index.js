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

Card.hasOne(Font, {
    foreignKey: 'card_id',
});

Font.belongsTo(Card, {
    foreignKey: 'card_id',
});

Card.hasOne(Background, {
    foreignKey: 'card_id',
});

Background.belongsTo(Card, {
    foreignKey: 'card_id',
});

Card.hasOne(Icon, {
    foreignKey: 'card_id',
});

Icon.belongsTo(Card, {
    foreignKey: 'card_id',
});

module.exports = { User, Font, Background, Icon, Card };
