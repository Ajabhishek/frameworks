var indexController = {
	index: function(req, res, next){
		res.render('index', {title: 'Node.js Authorization App'});
	}
};

module.exports = indexController;
