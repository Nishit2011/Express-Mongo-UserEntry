var express = require('express');
var router = express.Router();

var User = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('https://restcountries.eu/rest/v1/region/Europe', function(req,res,next){
	console.log(res)
});

router.post('/register', function(req,res,next){
	var name = req.body.name;
	var sex = req.body.sex;
	var age = req.body.age;
	var country = req.body.country;

	// req.checkBody('name','Name field is required').notEmpty();
	// req.checkBody('sex','sex field is required').notEmpty();
	// req.checkBody('age','age field is required').notEmpty();
	// req.checkBody('country','country field is required').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		})
	}else{
			var newUser = new User({


				name:name,
				sex:sex,
				age:age,
				country:country
			}

				);
			User.createUser(newUser, function(err, user){
				if(err) throw err
					console.log(user);
			});

			res.location('/');
			res.redirect('/');
	}
})

module.exports = router;
