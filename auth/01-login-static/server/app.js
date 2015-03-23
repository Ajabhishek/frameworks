var express 		= require('express'),
	path 			= require('path'),
	port			= 3000,
	bodyParser 		= require('body-parser');


var app = express();

var controllers = './controllers/';
var appController = require(controllers);
var userController = require(controllers + 'user');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/')));

var router 	= express.Router();
router.get('/', appController.index);
router.post('/login', userController.login);
router.get('/users', userController.users);
router.get('/api/users', userController.getAll);
router.get('/api/user/:username', userController.getOne);
app.use('/', router);

app.listen(port, function(){
	console.log('Listening on port + ' + port);
});