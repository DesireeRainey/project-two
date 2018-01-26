require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var request = require("request");
var yelp = require('yelp-fusion');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
var db = require('../models');

router.get('/', isLoggedIn, function(req, res){
	db.profile.findAll({
		where: {userId: req.user.id},
		include: [db.user]
	}).then(function(profiles){
		res.render('profile', {results: profiles, restaurant: req.query.restaurant})
	})
});

router.get('/edit/:id', isLoggedIn, function(req, res){
	db.profile.findOne({
		where: {
			id: req.params.id,
			userId: req.user.id
		},
		include: [db.user]
	}).then(function(profile){
		res.render('edit', {profile: profile})
	})
});

router.put('/edit/:id', isLoggedIn, function(req,res){
	db.profile.findOne({
		where: {id: req.body.id}
	}).then(function(profile){
		profile.restaurant = req.body.restaurant;
		profile.comment = req.body.comment;
		profile.save();
	}).then(function(updatedProfile){
		res.send('Profile is updated');
	}).catch(function(err){
		res.send(err);
	});
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


router.delete('/:id', function(req,res){
	console.log('Delete route. ID = ', req.params.id);
	db.profile.findOne({
		where: { id: req.params.id }
	}).then(function(profile){
		db.profile.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(deleted){
		res.send('success')
	});
	}).catch(function(err){
		console.log('ERROR', err);
		res.send('Failed')
	})
});



module.exports = router;