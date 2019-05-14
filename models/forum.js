'use strict';
module.exports = (sequelize, DataTypes) => {
  const Forum = sequelize.define('Forum', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      },
    }, 
    message: { 
      type: DataTypes.TEXT,
      allowNull: false,
    },

});
  Forum.associate = function(models) {
    // associations can be defined here
  };
  return Forum;
};