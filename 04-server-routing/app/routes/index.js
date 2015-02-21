exports.index = function(req, res){
  // render a view: /views/index.html
  // res.render('index'); 

  // render a text
  // res.send("index route")

  // sends a 200 (OK)
  res.send(200);
};

exports.products = function(req, res){
	var path = require("path");
	var __parentDir = path.dirname(process.mainModule.filename);

	var jsonfile = require("jsonfile");
	
	jsonfile.readFile(__parentDir + "/data/products.json", function(err, data){
		if (err) console.log(err);
		res.json(data);
	})
}
