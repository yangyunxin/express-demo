var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: '注册' });
});
router.post('/register', userController.register)

module.exports = router;
