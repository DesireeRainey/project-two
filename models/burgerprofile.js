'use strict';
module.exports = (sequelize, DataTypes) => {
  var burgerProfile = sequelize.define('burgerProfile', {
    usersId: DataTypes.INTEGER,
    favoritedRestaurant: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.burgerProfile.belongsTo(models.user);
      }
    }
  });
  return burgerProfile;
};