var Item = require('../models/items.js');
var User = require('../models/users.js');
var _ = require('lodash');

module.exports = {

  getOne: function(id, callback) {
    Item.findById(id)
    .then(function(item) {
      callback(null, item);
    })
    .catch(function(error) {
      callback(error);
    });
  },

  addOne: function(item, callback) {
    Item.create({
      user_id: item.user_id,
      title: item.title,
      content: item.content,
      category: item.category,
      // subcategory: item.subcategory,
      url: item.url,
      img: item.img,
      completed: false,
      recommendedBy_id: item.recommendedBy_id
    })
    .then(function(newItem) {
      callback(null, newItem);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  updateOne: function(id, newProps, callback) {
    Item.update(newProps, {
      where: {id: id},
      returning: true
    })
    .then(function(rowAndData) {
      callback(null, rowAndData[1][0]);
    })
    .catch(function(error) {
      callback(error);
    });
  },

  removeOne: function(id, callback) {
    Item.destroy({where: {
      id: id
    }})
    .then(function(removedRow) {
      callback(null, removedRow);
    })
    .catch(function(error) {
      callback(error);
    });
  },

  getAll: function(id, callback) {
    // check to see if id is passed or not
    var action = id === undefined ? Item.findAll({include: [{model: User, as: 'recommendedBy'}]}) : Item.findAll({where : {user_id: +id}, include: [{model: User, as: 'recommendedBy'}]});
    action
    .then(function(items) {
      console.log(items);
      callback(null, items)
    })
    .catch(function(error) {
      callback(error);
    })
  },

  shareItem: function(item, users, callback) {
    var itemsToBeUpdated = users.map(function(user) {
      return _.assign({}, item, {user_id: user})
    });
    Item.bulkCreate(itemsToBeUpdated)
      .then(function(items) {
        callback(null, items);
      })
      .catch(function(err) {
        callback(err);
      })
  }
};
