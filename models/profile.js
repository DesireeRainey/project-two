'use strict';
module.exports = (sequelize, DataTypes) => {
  var profile = sequelize.define('profile', {
    restaurant: DataTypes.STRING,
    comment: DataTypes.STRING,
    userId: DataTypes.STRING
  }); 
  profile.associate = function(models) {
        // associations can be defined here
        models.profile.belongsTo(models.user);
  }
  return profile;
};