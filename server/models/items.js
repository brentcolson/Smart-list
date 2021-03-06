var Sequelize = require('sequelize');
var sequelize = require('../db/config.js');
var User = require('./users.js');

var Item = sequelize.define('item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: true
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  img: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {underscored: true});
//sequelize automatically creates created_at and updated_at
Item.belongsTo(User, {as: 'user'});
Item.belongsTo(User, {as: 'recommendedBy'});
// Item.sync();
module.exports = Item;
