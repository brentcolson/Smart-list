var User = require('../models/users.js');
var Follower = require('../models/followers.js');
var _ = require('underscore');
var bcrypt = require('bcrypt');
var secret = require('../helper/config.js');
var jwt = require('jsonwebtoken');
var helpers = require('../helper/helpers')


module.exports = {

  getOne: function(id, callback) {
    User.findById(id)
    .then(function(user) {
      callback(null, user);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  addOne: function(user, callback) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    User.create({
      email: user.email,
      username: user.username,
      password: hash
    })
    .then(function(addedUser) {
      callback(null, addedUser);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  signupOne: function(user, callback) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    User.create({
      email: user.email,
      username: user.username,
      password: hash
    })
    .then(function(addedUser) {
      // var addedUserWithJWT =
      var token = jwt.sign(helpers.cleanUser(addedUser), secret, {
        expiresIn: 60 * 60 * 24 * 7 // a week in seconds
      });
      var userWithJwt = {
        addedUser: addedUser,
        jwt: 'JWT ' + token
      }
      callback(null, userWithJwt);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  loginOne: function(data, callback) {
    User.findOne({
      where: {username: data.username },
      include: [
        {
          model: User,
          as: 'followings'
        },
        {
          model: User,
          as: 'followers'
        }
      ]
    })
    .then(function(foundUser){
        if (bcrypt.compareSync(data.password, foundUser.password)) {
        //generate jwt
        var token = jwt.sign(helpers.cleanUser(foundUser), secret, {
          expiresIn: 60 * 60 * 24 * 7 // a week in seconds
        });
        var userWithJwt = {
          loggedInUser: foundUser,
          jwt: 'JWT ' + token
        }
        callback(null, userWithJwt);
      }
      else {
        callback(error)
      }
    })
    .catch(function(){
      callback({ success: false, message: 'Authentication failed. Email does exist.' });
    })
  },

  updateOne: function(id, newProps, callback) {
    User.update(newProps, {
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
    User.destroy({where: {
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
    User.findAll({
      include: [
        {
          model: User,
          as: 'followings'
        },
        {
          model: User,
          as: 'followers'
        }
      ]
    })
      .then(function(users) {
        var refinedUser = users.filter(function(user) {
          return user.followers.every(function(follower) {
            return follower.id !== +id;
          });
        });
        callback(null, refinedUser);
      })
      .catch(function(error) {
        callback(error);
      });
  },

  /**
   * controller for following user
   * @param id: <String> - user_id of current user
   * @param following: <String> - id of target user
   * @param callback: <Function> - callback function
   * @return: null
  **/
  follow: function(id, following, callback) {
    User.findById(id)
      // .then(function(user) {
      //   return User.findById(+following);
      // })
      .then(function(user) {
        return user.addFollowing(following);
      })
      .then(function(relationShip) {
        console.log(id, following, relationShip);
        callback(null, relationShip);
      })
      .catch(function(err) {
        callback(err);
      });
  },

  /**
   * controller for unfollowing user
   * @param id: <String> - user_id of current user
   * @param unfollowing: <String> - id of target user
   * @param callback: <Function> - callback function
   * @return: null
  **/
  unfollow: function(id, unfollowing, callback) {
    Follower.destroy({where : {
      followedById: +id,
      followingId: +unfollowing
    }})
      .then(function(data) {
        callback(null, {removedRow : data});
      })
      .catch(function(err) {
        callback(err);
      });
  }
};
