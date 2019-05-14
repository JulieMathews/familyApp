'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User);
    foreignKey: "ownerUuid"
  };
  return Post;
};