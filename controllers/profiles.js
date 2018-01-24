require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var request = require("request");
var yelp = require('yelp-fusion');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
var db = require('../models');

router.get('/', isLoggedIn, function(req, res){
	db.profile.findOne({
		where: {id: req.user.id},
		include: [db.users]
	}).then(function(profiles){
		res.render('profiles', {results: profiles})
	})
});


router.post('/', function(req, res){
	console.log(req.body);
	db.profile.create({
		restaurant: req.body.title,
		comment: req.body.comment,
		userId: req.user.id
	}).then(function(createdComment){
		res.redirect('/profiles')
	}).catch(function(err){
		console.log(err)
	});
});

router.delete('/:id', function(req,res){
	console.log('Delete route. ID = ', req.params.id);
	db.comment.destroy({
		where: {
			//???? Get the id from the users table?  
			id: req.params.id
		}
	}).then(function(deleted){
		console.log('deleted = ', deleted);
		res.send('success');
	}).catch(function(err){
		console.log('ERROR', err);
		res.send('Failed')
	})
});



module.exports = router;