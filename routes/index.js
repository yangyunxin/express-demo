var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.js');
var goodsController = require('../controllers/goods.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.cookies);
	if (req.session.isVisit) {
		req.session.isVisit++;
		console.log('你是第' + req.session.isVisit + '页面');
	} else {
		req.session.isVisit = 1;
		console.log("欢迎第一次来这里")
	}
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: '注册' });
});
router.post('/register', userController.register);

//login
router.get('/login', function (req, res, next) {
	console.log(req.session.user)
	if (req.session.user) {
		res.redirect('/')
	}
	res.render('login', { title: '登陆' })
});
router.post('/login', userController.login);

//商品
router.get('/goods', goodsController.list);
router.get('/addGoods', function (req, res, next) {
	res.render('goods_add.ejs', {

	});
});
router.post('/addGoods', goodsController.add);


module.exports = router;
