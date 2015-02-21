var express 	= require("express"),
	routes 		= require("./routes"),
	path 		= require("path"),
	ejs 		= require("ejs");

var app = express();
app.engine("html", ejs.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));


app.get("/ok", routes.index);

app.get("/products", routes.products);

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log("Listening on port " + port);
})