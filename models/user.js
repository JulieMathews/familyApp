'use strict';

var uuidv1 = require("uuid/v1");
//var bcrypt = require("bcrypt");


module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1
    },
    username:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 30]
      }
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull:  false,
      unique: true,
      validate: {
        len: [1, 100]
      }
  }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unqie: true,
      validate: {
        len: [1, 100]
      }
    }
    });
  User.associate = function(models) {
    User.hasMany(models.User,{
      foreignKey: "ownerUuid",
      onDelete: "cascade"
    });
    // associations can be defined here
  };

//generating a hash
// checking if password if valid


  return User;
};