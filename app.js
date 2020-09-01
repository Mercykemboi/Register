var bodyParser = require("body-parser"),
    express = require("express"),
    session = require('express-session'),
    app        = express();
    mongoose=require("mongoose");

var userRoutes = require("./routes/userRoutes");
mongoose.connect('mongodb://localhost/register1' , { useNewUrlParser: true });
mongoose.Promise = global.Promise;



app.use(session({
    secret:"Project",
    resave: false,
    saveUninitialized: false
}));
 
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/public", express.static("public"));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, authorization,x-access-token"
	)
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, DELETE"
	)
	next();
})


app.use(userRoutes);

var port = process.env.PORT || 3000; //
app.listen(port);