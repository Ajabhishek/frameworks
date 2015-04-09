var express 	= require("express"),
	routes 		= require("./routes"),
	path 		= require("path"),
	ejs 		= require("ejs"),
	mongoose	= require("mongoose"),
	bodyParser	= require("body-parser"),
	dbname 		= "morebeerhere";

/* Express setup */
var app = express();
app.engine("html", ejs.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // remember to install the body-parser module


/* Mongoose and MongoDB setup */
mongoose.connect("mongodb://localhost/" + dbname);

var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function(callback){
	console.log("MongoDB connection established to " + dbname);
});

/* Routes */
app.get("/ok", routes.index);
app.get("/products", routes.products);
app.post("/product", routes.saveProduct);

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log("Listening on port " + port);
})