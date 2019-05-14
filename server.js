
require('dotenv').config();
//Dependencies
const express = require('express'); //
const path = require('path');
const bodyParser = require('body-parser'); //
var exphbs = require("express-handlebars");//
const session = require('express-session');//
var passport = require("passport");//
var flash = require("connect-flash");//
const Sequelize = require('sequelize');
const db = require("./models"); //This is from when articles were set up

var app = express();//
var port = process.env.PORT || 8080;

//passing the passport for configuration file
require("./config/passport")(passport);

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("client"));
app.set("views", "client/views");


// session support is required for passportjs
app.use(
    session({
    key: "user_sid",
    secret: "giasghsdjgoisdgsdhgkwhe53lkd",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 6000000
    }
})
);

app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash());

//Handlebars
app.engine(
    "handlebars", 
    exphbs({ 
        defaultLayout: "main" 
    })
);

app.set("view engine", "handlebars");


//Routes
require("./controllers/articles")(app, passport);
require("./controllers/forum")(app, passport);
require("./controllers/user")(app, passport);

var syncOptions = { force: false };

//if running a test, set syncOptions. for to true
//clearing the testdb
if (process.env.NODE_ENV === "test"){
    syncOptions.force=true;
}





//Starting the server, syncing our models
db.sequelize.sync(syncOptions).then(function() {
    app.listen(port, function() { 
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        port,
        port
        );
    });
});




module.exports = app;


