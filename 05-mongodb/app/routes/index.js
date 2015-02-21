exports.index = function(req, res){
  // render a view: /views/index.html
  // res.render('index'); 

  // render a text
  // res.send("index route")

  // sends a 200 (OK)
  res.send(200);
};

exports.products = function(req, res){
	var ProductsModel = require("../data/products");
	ProductsModel.find(function(err, data){
		if(err) console.error;
		res.json(data);
	})
}
