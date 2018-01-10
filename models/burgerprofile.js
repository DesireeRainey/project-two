'use strict';
module.exports = (sequelize, DataTypes) => {
  var burgerProfile = sequelize.define('burgerProfile', {
    usersId: DataTypes.INTEGER,
    restaurantName: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burgerProfile;
};