var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models')
var router = express.Router();

router.get('/places', function(req, res){
	db.place.findAll().then(function)
})