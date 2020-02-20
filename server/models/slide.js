'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize;

  class Slide extends Model {}

  Slide.init({
    name: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    }
  }, {sequelize});

  Slide.associate = function(models) {
    // associations can be defined here
  };
  
  return Slide;
};