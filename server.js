const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

let PORT = process.env.PORT || 8080;

console.log(PORT);

var app = express();

app.use(express.static(process.cwd() + '/public'));  //how to change this line for our app

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("client"));
app.set("views", "client/views");

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/articles.js")(app);

//Starting the server, syncing our models
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT: " + PORT + "visit http://localhost:" + PORT + "/?");
    });
});

module.exports = app;


