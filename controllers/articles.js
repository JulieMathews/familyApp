var db = require('../models');

module.exports = function(app) {
    app.get("/specialist-articles", function(req, res) {
        db.Article.findAll().then(articles => {
            res.render('specialistArticles', { articles: articles.map(a => a.get({plain: true})) });
        });
    });

    app.get("/article/:id", function(req, res) {
        db.Article.findByPk(req.params.id).then(article => {
            res.render('singlePost', {article: article.get({plain: true})});
        });
    });
};
