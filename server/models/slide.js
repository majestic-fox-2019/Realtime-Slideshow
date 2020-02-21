'use strict';
module.exports = (sequelize, DataTypes) => {
  const Slide = sequelize.define('Slide', {
    name: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {});
  Slide.associate = function(models) {
    // associations can be defined here
  };
  return Slide;
};