'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      },
    },
    article: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blurb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};