require('dotenv').config();
var express = require('express');
var passport = require('../config/passportConfig');
var request = require("request");
var yelp = require('yelp-fusion');
var router = express.Router();
var db = require('../models')
var client = yelp.client(process.env.API_KEY);


function yelpSearch(searchTerm, location, callback){
  console.log(searchTerm.title);
  client.search({
    term: searchTerm.title,
    location: location
  }).then(response => {
    response.jsonBody.businesses.forEach(function(item){
    	console.log(item);
    });
    callback(response.jsonBody.businesses);
  }).catch(e => {
    console.log(e);
  });
};

router.get('/', function(req, res) {
  console.log('find rest route reach');
  res.render('places', {businesses: [null]});
});

//yelp post route
router.post('/', function(req, res) {
  console.log(req.body);
  yelpSearch(req.body, 'Seattle', function(businesses){
    res.render('places', {businesses: businesses});
  });
});

module.exports = router;