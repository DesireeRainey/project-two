'use strict';
module.exports = (sequelize, DataTypes) => {
  var places = sequelize.define('places', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    lat: DataTypes.INTEGER,
    lng: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.places.belongsTo(models.user);
      }
    }
  });
  return places;
};