var db = require('../models');

module.exports = function(app) {
    app.get("/community-forum", function(req, res) {
        db.Post.findAll().then(posts => {
            res.render('layouts/communityForum', { posts: posts.map(a => a.get({plain: true})) });
        });
    });

    app.get("/forum/:id", function(req, res) {
        db.Forum.findByPk(req.params.id).then(forum => {
            res.render('singlePost', {forum: forum.get({plain: true})});
        });
    });

    app.post("/community-forum/insertOne"), function(req, res){
        db.Forum.insertOne([
            "message"],
       [
           req.body.message],

            function(result){
                res.redirect("/");
            });
            
    };
};

