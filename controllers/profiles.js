require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var request = require("request");
var yelp = require('yelp-fusion');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
	db.profile.findAll({
		where: {userId: req.user.id},
		include: [db.users]
	}).then(function(profiles){
		res.render('profile', {results: profiles})
	})
});


router.post('/', function(req, res){
	console.log(req.body);
	db.profile.create({
		restaurant: req.body.title,
		comment: req.body.comment,
		userId: req.user.id
	}).then(function(createdComment){
		res.redirect('/profile')
	}).catch(function(err){
		console.log(err)
	});
});

router.delete('/', function(req,res){

});


module.exports = router;