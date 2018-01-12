// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 47.61, lng: -122.3321},
//     zoom: 13

//   });

//   var infowindow = new google.maps.InfoWindow();
//   var service = new google.maps.places.PlacesService(map);

// //Kings Hardware
// service.getDetails({
//     placeId: 'ChIJh9o1qccVkFQRt5ADLA499W0',
//   }, function(place, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       var marker = new google.maps.Marker({
//         map: map,
//         position: place.geometry.location
//       });
//       google.maps.event.addListener(marker, 'click', function() {
//         infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//           // 'Place ID: ' + place.place_id + 
//           '<br>' +
//           place.formatted_address + '</div>');
//         infowindow.open(map, this);
//       });
//     }
//   });

// //Quality Athletics
//  service.getDetails({
//     placeId: 'ChIJReiCkqRqkFQR98cXpqs-DWQ',
//   }, function(place, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       var marker = new google.maps.Marker({
//         map: map,
//         position: place.geometry.location
//       });
//       google.maps.event.addListener(marker, 'click', function() {
//         infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//           // 'Place ID: ' + place.place_id + 
//           '<br>' +
//           place.formatted_address + '</div>');
//         infowindow.open(map, this);
//       });
//     }
//   });

// //Dicks Queen Anne 
//  service.getDetails({
//     placeId: 'ChIJJxszkEMVkFQRir4VQRt8zwc',
//   }, function(place, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       var marker = new google.maps.Marker({
//         map: map,
//         position: place.geometry.location
//       });
//       google.maps.event.addListener(marker, 'click', function() {
//         infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//           // 'Place ID: ' + place.place_id + 
//           '<br>' +
//           place.formatted_address + '</div>');
//         infowindow.open(map, this);
//       });
//     }
//   });

// //Dicks Broadway
//  service.getDetails({
//     placeId: 'ChIJ6cIFkjIVkFQR87o8Cmd7d_k',
//   }, function(place, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       var marker = new google.maps.Marker({
//         map: map,
//         position: place.geometry.location
//       });
//       google.maps.event.addListener(marker, 'click', function() {
//         infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//           // 'Place ID: ' + place.place_id + 
//           '<br>' +
//           place.formatted_address + '</div>');
//         infowindow.open(map, this);
//       });
//     }
//   });

// //great state burger
//   service.getDetails({
//     placeId: 'ChIJXbZKrUsVkFQRhf1z10f-Ed8',
//   }, function(place, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       var marker = new google.maps.Marker({
//         map: map,
//         position: place.geometry.location
//       });
//       google.maps.event.addListener(marker, 'click', function() {
//         infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//           // 'Place ID: ' + place.place_id + 
//           '<br>' +
//           place.formatted_address + '</div>');
//         infowindow.open(map, this);
//       });
//     }
//   });

//   //lil' woodys
// service.getDetails({
// placeId: 'ChIJlc-91cpqkFQR7py8rj_H1eQ' 
//  }, function(place, status) {
//    if (status === google.maps.places.PlacesServiceStatus.OK) {
//      var marker = new google.maps.Marker({
//        map: map,
//        position: place.geometry.location
//      });
//      google.maps.event.addListener(marker, 'click', function() {
//        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//          // 'Place ID: ' + place.place_id + 
//          '<br>' 
//          + place.formatted_address + '</div>');
//        infowindow.open(map, this);
//      });
//    }
//  });
// }

var map;
var infowindow;

function initMap() {
  var seattle = {lat: 47.61, lng: -122.3321};

  map = new google.maps.Map(document.getElementById('map'), {
    center: seattle,
    zoom: 10
  });


  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = [
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6090668,
               "lng" : -122.3262247
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6103503802915,
                  "lng" : -122.3248145697085
               },
               "southwest" : {
                  "lat" : 47.6076524197085,
                  "lng" : -122.3275125302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "5c52201a5fd79c965aa08f275172f4f7cb74f242",
         "name" : "206 Burger Company",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3024,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/105708467350677462601/photos\"\u003eelijahpunk\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAG6A1DfEer54440wB1fbNtWiSysHrFGF-mw25wDVLs98FCSGVGZIJp_0MLGcDjbNchcHjvirJW13gEwXJGxKhv48lk7HHKG_NnaJc9PMQgzXn3AGNePDY9en5i4-V9UhLEhBDo0myzycsJhnLI1bwua5aGhTAwXkNBLRuMeoDLtrabOIwbLyDDA",
               "width" : 4032
            }
         ],
         "place_id" : "ChIJs4RcGLZqkFQRnNFLvYacIwM",
         "price_level" : 1,
         "rating" : 4.4,
         "reference" : "CmRRAAAAySFUyoQa7uXdsipY9ecIJPjEEZ-U1IbTTgwQ8qsIPU3QM2KRjZSN8jNYPECKdR1nqJlPijqBxQem7kLT8iSINBPMyTjkssV4Djm9r644gkc0CjAv2oYMAXKVMAlQuTPqEhBE97tiXYFz7OBiwRpZPBiKGhSuMo2guHqTcYVoL4HyWw-eXhqbtA",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "1000 Madison Street, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6136929,
               "lng" : -122.3381333
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6148969802915,
                  "lng" : -122.3369723197085
               },
               "southwest" : {
                  "lat" : 47.6121990197085,
                  "lng" : -122.3396702802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "9a190597b1107bcf2948da6d3affd29c1ed07b1d",
         "name" : "Relish Burger Bistro",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2988,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/107301382392752537961/photos\"\u003eLogan Dorsey\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAtrFhpt0IJ0tjgBPaRVud3e8oivBUz3GCiIuzMIHo_j-3QpHEO1SIjIM4SwOIPWXUDnkK_BO5IqmXAVOEppNanNjf3dsQhiVNaDcobfeDI5ZznhHRWW4ECJxIfe-0rIQUEhDSCr5lyPB7f4ZTHhF8NFQdGhRMa-ExuOnYFLiOl25DU8EM4kuCmA",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJ90iRa0sVkFQRMr6jML7zVgY",
         "rating" : 3.7,
         "reference" : "CmRRAAAAkMy2bLs5L8xYtsi_sHAqNmqcVeWMEEkC2UqIUnC3YuQTW5MImxfHAmVTh8PLD3RSzC0V47yB4pBIDRQcMACJB7Jacq29U3oyt60e17nHzEuN9rsma27IwfO7ZgAn1_hoEhCt7AYNyBrZ16ZxshjbMm_5GhSc1yfGSk8cGN7yBzSgz0U7BpjMRw",
         "scope" : "GOOGLE",
         "types" : [
            "cafe",
            "bar",
            "night_club",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "1900 5th Avenue, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6059072,
               "lng" : -122.3339069
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6074292302915,
                  "lng" : -122.3321352697085
               },
               "southwest" : {
                  "lat" : 47.6047312697085,
                  "lng" : -122.3348332302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "3187dde0fecc28595f3e1b9ddba3d72c8dc8f6fe",
         "name" : "Mel's Market",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 900,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/100987830063512406721/photos\"\u003eMel&#39;s Market\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAgogZa5ROHvg9PnMLyQRfZb8DpkLABtmivetnSlNOhWThWUXn9pOeSZf4E5X4gw9YRw4Dv_4ekQNpvPSHCyRHeOm8oLcgjg17XzoJyt79GgL78GnMYQqE5C57m3hXM6RMEhAKNsSsebcB3GfNCOsVQPbsGhQQ92gT22BxQS_w6eyJq2mCuk22oQ",
               "width" : 1920
            }
         ],
         "place_id" : "ChIJP7Xggz8VkFQRbl2wJcdpGuo",
         "price_level" : 2,
         "rating" : 4.1,
         "reference" : "CmRSAAAAV379w0X5S6gYfFzDixRPIN9ozEXJMSrCctDZrQ1QRgtmkBT0L29eXaGndYJ2GQrhIIvPAsO7HwjKt52X0-Ug3bcC5iH4oJqKsxPO4i8n_D8dksBELCeX3sLBW75wvzipEhD5Yr0UbeRYEoV32cSPJcR3GhQvmhbtrQ_Y2OyS60Ut4DRL6GP5Bw",
         "scope" : "GOOGLE",
         "types" : [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "1001 4th Avenue #50, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.61278890000001,
               "lng" : -122.3347667
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6139972302915,
                  "lng" : -122.3332818197085
               },
               "southwest" : {
                  "lat" : 47.6112992697085,
                  "lng" : -122.3359797802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "99ba178cdf1d44f52944d6ee498a3ffd3f9b2a3b",
         "name" : "Gordon Biersch",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3024,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/114870134561063908739/photos\"\u003eBrian Newman\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAj2EXQuk3_fcNnfeUgsXNmVcwnNXhm5pDPHXpN6v7UJ9iGI9V0hzFnreFyhzdJsfrs-HMw0Ne82gAVG3UVTI_1ajuGjkE5dnMXh62c9DWuQ760s2a8KFK7h36eEwWnnMMEhBvnK28mYTnOVN-pCfIawmAGhSU9S1nXXZ-VMvjrLNK6sSnWEPMpA",
               "width" : 4032
            }
         ],
         "place_id" : "ChIJLSDL0bRqkFQRzb82Xt7spGA",
         "price_level" : 2,
         "rating" : 3.3,
         "reference" : "CmRRAAAARMP3Qi2zvEYT9QjNzuzVvrzBIw4xtky6hTKLtqWoIdeTq0iGZeshYVgjY9N6ZcD62DAA2XUW6XbX3UHJlq6ug8FjtOubYEiX19So8DSaHuky0Yq_Jz5cruTtjnlobFqOEhBQp_66hZLxQ00u0NHmzpKyGhT5buVqxuSWGonO7p5lM6XNFS7WcA",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "600 Pine Street #401, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.610237,
               "lng" : -122.3370037
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6116359302915,
                  "lng" : -122.3355525697085
               },
               "southwest" : {
                  "lat" : 47.6089379697085,
                  "lng" : -122.3382505302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "f388217fd1fe3cc53e55e550109eb6417a883d02",
         "name" : "Yard House",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3024,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/111371652666993973316/photos\"\u003eLance Banks\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAqh3loB_862jOOtIxZtZkzsTJhSAALQ4htE-GL3pMhTldj45RNBRXI1m9CYaRKewE3mH07bHqeQqxzfQdl2optr4LYkg5sTiL-BC7Uo3jr6ovJdYIcuPO78b1KvhUT8ieEhAGnrTTbAi935DPQCbOj9g2GhQlEaV5kXx0uOP2cI3J6bG8QOaIZg",
               "width" : 4032
            }
         ],
         "place_id" : "ChIJSxHAcbNqkFQRimpTht7bPsM",
         "price_level" : 3,
         "rating" : 4.2,
         "reference" : "CmRSAAAA7XDmc6RK-LXDX77z4CB2ga2c2YRp3HnrAXfMsYbJZyfuTo_XieBqL3_G4f3zN7IaWQhWBQ22FAuuoHMg-WDm-XOngsFufoT6LqaseivkQYp6_TeJxo0PjY-yh-Ur32vBEhALEkoDzylR8xnh437Cs6tOGhTBTtgvuYfUNDz9bBaunBjvL-Rmjw",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "1501 4th Avenue #118, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6065492,
               "lng" : -122.3383332
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6079549802915,
                  "lng" : -122.3368467197085
               },
               "southwest" : {
                  "lat" : 47.6052570197085,
                  "lng" : -122.3395446802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "ec103c19b83fe53fa010c5b6b73bf62054b6f027",
         "name" : "Von's 1000SPIRITS",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 1481,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/111897398070491628288/photos\"\u003eVon&#39;s 1000SPIRITS\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAi1lFdapRH3_mlM-yw2V9YWVjCPoArmV_h-WkfwsbUlPLgqULExq-W4n3ICObpd3q0GloKmt5Z4EMOez4sfb2gIMkyN4nfc6_rdzGQOdS0Qcxa3L2CSxvKHQNcOkDa4WjEhCXuxnKfZ_pwBpPHDbryO4qGhTo8uQl9hSW0xPjbkWVYXLInhJJ7g",
               "width" : 2048
            }
         ],
         "place_id" : "ChIJYSjPILJqkFQRE-m7s1g6K0Y",
         "price_level" : 2,
         "rating" : 4.5,
         "reference" : "CmRRAAAAg5PJuFJaRu9HHjb8jFQNY-D29jL1MrLLIMRNTRTacq3CX9LpZeqxJlqbsnL3TxoaA4_wbKirbK6QY4ijtkcEY4wk5XK6xbnc-PhUZjUbQwkDE8gZ16i13VlcYn096tHxEhBmrjh1k4_EvMVzd9ENNyj2GhS9zWGMCQvQ-eJhdaMsTfpG21sT8Q",
         "scope" : "GOOGLE",
         "types" : [
            "cafe",
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "1225 1st Avenue, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.612807,
               "lng" : -122.3355599
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.61415598029149,
                  "lng" : -122.3342109197085
               },
               "southwest" : {
                  "lat" : 47.61145801970849,
                  "lng" : -122.3369088802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "3677233e0d9eb23f7f3edf5119f1ab943390d388",
         "name" : "Johnny Rockets",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2268,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/116588704148144949516/photos\"\u003eYevgen Sukharenko\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAr2y-WshpDJvbcjTxlmMkvIW26jEmNxL1XtxvNmzt3rgUiiWuu_tDJlJLMC73EJsxDLq3NFg0_owVPyncWDDKiWY0E2L76PX1DgmmpJy7AUf31fjNmvaVTFRqH6IEujKHEhBVn78kXQ9CdxV1B-833M_CGhSFJ7EMmqIGUl4XOIFAC1Q0JxHHKA",
               "width" : 4032
            }
         ],
         "place_id" : "ChIJLSDL0bRqkFQR99kDRyRlMec",
         "price_level" : 1,
         "rating" : 2.9,
         "reference" : "CmRSAAAAzzdiUcqjGngv_dJo2jhXVxqjJvCQSKqsuToN7HJwOmFhoQlPDGwwXkf7EHb9AY5zeIRzwqzgppBKRZVo1yjmsThBGTIujSp6vzSoFagVRjKl6s9O1ngrUHVSdJpFuz7_EhAlioDh9JnUXhGqIIbiBwmJGhTSB-BGXiAfGNAW1VryWzyVjYcTKQ",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "600 Pine Street, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.61133349999999,
               "lng" : -122.3334265
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6127715302915,
                  "lng" : -122.3321599697085
               },
               "southwest" : {
                  "lat" : 47.6100735697085,
                  "lng" : -122.3348579302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "9420669d23f45b7028d039725548dc6d16a7bb68",
         "name" : "Daily Grill",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 667,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/106087491596275526934/photos\"\u003eDaily Grill\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAnBAQAk1eB3aOJMWymTYeSjJipkBboGrkvEjz99yneME_y2VA7zyMdEtAbqvTuLJ1afCME0BlQUDoF22ZvZVf-rnDACiCy5owy7PZhwaUIm23AOnagvY_F1nim5am240xEhArFhqU3_vvfUeZyCi8fiMcGhQjTItwNrQo43lXe_6JFdIj_mZyVw",
               "width" : 1000
            }
         ],
         "place_id" : "ChIJa11l-7RqkFQRSHyIXukmw9o",
         "price_level" : 2,
         "rating" : 3.5,
         "reference" : "CmRSAAAA1BUNP9kJBBiv8GVjhoQ5UqMI3ZXx9KetMuCnyb0GgtmzVGpxjxQsVRZS5KmU1k6d2X-mKF7r9p4PdfiQln4hDIqo80-zwvdkbvj5MJcqi36qCweuYItOBj0qtjvNmPjwEhBIE5W3iVGHiMFLCsYosq1sGhQxLJKtswX7olfukaElXLINitOSnA",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "629 Pike Street, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.60832019999999,
               "lng" : -122.3392164
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6096168802915,
                  "lng" : -122.3379957197085
               },
               "southwest" : {
                  "lat" : 47.6069189197085,
                  "lng" : -122.3406936802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "9e398be69a6036ae5b835f359672f28e5257df00",
         "name" : "The Blarney Stone Pub & Restaurant",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2976,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/100059937665090134114/photos\"\u003eGreg Nick\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAU72MlbtSei7fyqQoeAkeZ-76EGjWyF38MEtVPNvtPbeiBwhqHEjzm6uHf2rjTY2GFNJy2KwzpjpZyRHCrI8EhccSkloa-_d4rG2p7EwklHozEuJhSxo7_Exxe5wHSeh5EhAtRNYzDneMIf0M6Pmr4q3TGhQdieQrZ7Y_FT37BZm3P3s6cM2Cug",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJHT8jULJqkFQRbWUzOe5ZHHk",
         "price_level" : 1,
         "rating" : 4,
         "reference" : "CmRRAAAA_YmhO2hGgdwpIDzDDx_qUSnFajJSJLiL-QENBFDJ56JdQwRhdefxmo97z219iviNahi5tQ5qe8YBZcC3fWlOUklSAVTQ4Ln4x6mlZhNzsiwDQNILsW6sPDXz83309Qz6EhCAK9cGxXIHuGOk7rT07FA7GhQMxoLXrtk4AesuegLiBE-MgDQthA",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "1416 1st Avenue, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.60666549999999,
               "lng" : -122.3354029
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.60807888029149,
                  "lng" : -122.3338988697085
               },
               "southwest" : {
                  "lat" : 47.60538091970849,
                  "lng" : -122.3365968302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "0302f00c53f4ad7e282b169f91072ec0d7e5c645",
         "name" : "Great State Burger",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 933,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/117632529348403005808/photos\"\u003eGreat State Burger\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAACO-66X4krIMbI1BSjL56OPItY4mO0vU6sWX70QVFyRSxx-aUknl2HNyfWVwhg_yPvszM3re0fyB0I9HO8xZmGuOZOlsRGGHMEkI3zFIjYtGKDVITosYV8AAHbi1_d-yJEhCAd2zj38Dvhr4I9oQ3mzYWGhQoHncYoycY3jgk-0xryS7u2W3kbg",
               "width" : 1280
            }
         ],
         "place_id" : "ChIJD9I_cLFqkFQRt7WQX_3Hsd0",
         "rating" : 3,
         "reference" : "CmRSAAAAzmbsywtSEfHlUERd5TPnjyqR9kgbw2RExxGwXgdsDezdCDkvG7UBWTkKiN4yH_C2Qg0ASdrMjsgCoY1HuYZLxs2wDOKZf9sNQM8Tm3EaL6YLZL3bu985hubY5fkGEYpVEhAJHrz74MILPMRJVW-fKjA6GhQr3r_EN7zkcz8IGmV8EL8nlX6B9g",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "1111 3rd Avenue, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6095336,
               "lng" : -122.3388704
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.61079813029149,
                  "lng" : -122.3374432197085
               },
               "southwest" : {
                  "lat" : 47.6081001697085,
                  "lng" : -122.3401411802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "a44c5932f471d1635d7ee2de33442eb3bf2ff95f",
         "name" : "Ludi's",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 1152,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/114789847907097870165/photos\"\u003eSergey Gabdurakhmanov\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAApFHkp2oq22Ry-qTSSJnT84ocBdexJCZ1YBFl4xvCp-bjaNEVs9PLyCIhME8QJnKSOEyeRzJjmQAHJhQgizm-GUzLH_MBopOIrdkfe8LATH4OJBo2wlsLlbu6vOxTfdCPEhDE2YCpnHM6RXkO8DNbRPbiGhRON3_Kwk3L2_IawjNb9-pgvZRANQ",
               "width" : 2048
            }
         ],
         "place_id" : "ChIJlzSrD7NqkFQRv_1BgzhrrHs",
         "rating" : 4.2,
         "reference" : "CmRRAAAAFio1_QN--RZ77XSqR-DLkeWBvTmC52LSIdlA2n-0NtJsUTgPhx2usvUEakPQ-C7rc2HIDJEoyw3ggEntQbOaO030RFs4w5iqiAkgZsBsJr3JoD0uPmRpOB6xuipszF60EhDT_mI01MEbjOLM5n4Lme3LGhRXBM_ympcZjpnvlsubmXAdL7SL8g",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "200 Pike Street, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6092238,
               "lng" : -122.3394789
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.61050788029151,
                  "lng" : -122.3380701197085
               },
               "southwest" : {
                  "lat" : 47.60780991970851,
                  "lng" : -122.3407680802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "dbb2b6e91b29dd88a9093b2da74c04b186428f1e",
         "name" : "Hard Rock Cafe",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2340,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/109025050233410210310/photos\"\u003eAndrew Norris\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAg5_SlfhwbvdixLHclZrDIw2xr1xZTDuCxuyV2DmapCuWVJma8-g34_lQYQTkBySHnLOvhqqh6l7NIPIHh9GJQr0HUz8D1ruBTQ12hq8Y78cU2nHKvUF1Kfddr5C9sVCGEhCbEqz_dmTxBppAWP5XwBRrGhQUpKyX50A74q2kQzVzl1kK9U0dow",
               "width" : 4160
            }
         ],
         "place_id" : "ChIJ20Ed_7JqkFQRUr79h0lYTEQ",
         "price_level" : 2,
         "rating" : 3.8,
         "reference" : "CmRRAAAAP2g8B_I3XXAArAiHmtgLTdXsRdubA751lLN6JFl9PIIllndrgIzY8cHad6BxFE9HMbXhC9zFnNwZqQuzU2Dmf0JWfdc3TuwzhzxU1kWWN0_E9gVD3g0UizA-vgV88hv2EhAYDheQByI4c8yA6rC8Rtk4GhSXKbkgWlv9ClWOjGuJbOt69up-SQ",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "116 Pike Street, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.608886,
               "lng" : -122.340519
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.61016438029149,
                  "lng" : -122.3391160697085
               },
               "southwest" : {
                  "lat" : 47.6074664197085,
                  "lng" : -122.3418140302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "4e79e43ddba4a943a65a09feb1b32eff132a3254",
         "name" : "Matt's in the Market",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3672,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/114609847957459222930/photos\"\u003eEve Sanders Halley\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAfNb400Bn-RV84LKocnN9j2BtnXynle3E1Sce-ZeM8LjlXsYAamTilVkzdJ_Da6EBfaSaobzdlR9N2gcHQXhi2_n7XUnBQyLojvCpC5qNF-7qnsJj4quQf1sz_yAjhBoBEhBQCAQg_8z5z5seeDbTyc6LGhQWFt3QXBIIua50S5qmcHSjTJNazw",
               "width" : 4896
            }
         ],
         "place_id" : "ChIJt6GM-bJqkFQRnqQLxHoXr4w",
         "price_level" : 2,
         "rating" : 4.4,
         "reference" : "CmRSAAAAPjWhCTlXzTxCdjn75ax-zTjVNH7OYBvAg95yU_II5G_zwnPUzAp9Cw5I-sRwUFh0ojc3NM136zQEt3_wUFa3QprHgMpWi1y9fPKidmFCaEa7vivLOmVgpWfmH66pUrWhEhDRjjVr57bOxaaxJP074sR9GhSfd5PBPfeFgM2OkAD_-fRahFyzVg",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "94 Pike Street #32, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.60684209999999,
               "lng" : -122.3338881
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6082365302915,
                  "lng" : -122.3324343197085
               },
               "southwest" : {
                  "lat" : 47.6055385697085,
                  "lng" : -122.3351322802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "9871b8bdee66ebd9bcbc1f6b412d2c5a3347c11f",
         "name" : "Outlier",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3024,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/105402092152536511908/photos\"\u003eLeonides Martinez\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAckAE7n5rygyU-_GSYPiZXvlmNJNfieeR8N2zbd16F3NkLHbuJIGRI_vvo8cuhsPyxQq2rPcJqEZYtvu99EChRIAtGP4tIA0DsjFFYcocuhcvyzIxARczYIaP2GAyP0VpEhC7cE6QejIIiFWJGvjCzEpwGhRjYCxVTEI4QAFAHv8jFLfwbO-hPA",
               "width" : 4032
            }
         ],
         "place_id" : "ChIJj2myQ7FqkFQRgvcdiA41MEI",
         "price_level" : 2,
         "rating" : 4.1,
         "reference" : "CmRRAAAAiANPkhGDB8uT6GUsiKBkdFctXw1JGJieMp9W7XwuMSnQ12rwZLEwQ2_OE13mLq9QyqsUVdKsVP3IgDZyz5Hx3v9Owl02d_rLNB78EQV-K7x5vy7bjgA3grL2h5pfXWXNEhA0Lr3H0_of6MwOS0FLB5oQGhTEkw01zT1mQD87cKofSFqNTA34Xg",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "1101 4th Avenue, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6082913,
               "lng" : -122.3351808
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6096724302915,
                  "lng" : -122.3337522197085
               },
               "southwest" : {
                  "lat" : 47.6069744697085,
                  "lng" : -122.3364501802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "827356f5a1003f7f03c5ae81387a843299693c5a",
         "name" : "The Capital Grille",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 4032,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/108048509502345537302/photos\"\u003ejason pham\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAC8GHSGLMj8pnlYRgxJP54zGEiwd-sjjwkx0q-GnEXLumoQRNK01Lbx2G1IaPLXK3cZVHcYcoWbm4OYqzccVQArmqWcv2jHCO0lrcS45euDLRwQg0QfFt-FLDfj5UDD4EEhAHUgJ2mxliL7HVxGD87lOsGhS8Df-iyPXyKe036VpiQBKCvSzWiw",
               "width" : 3024
            }
         ],
         "place_id" : "ChIJ320c77NqkFQR2SRL16MUXfU",
         "price_level" : 3,
         "rating" : 4.3,
         "reference" : "CmRSAAAARQ2OwOvdHttDOhq6aGzxnvr6Kohhg7OsnSdI182M08kDeaK79JXakUGz-QqvDouT49HYoFR6aQwXXFCyuQy2ZKSI7vpn8U6vFH8lknI2XBu06VQBP5R8lm-h-pEO_ArMEhAsi2NYaeC-_a6b7kc1s83NGhQxX6yxLEqQt6CqUIDFqzOCxBIelw",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "1301 4th Avenue, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6065171,
               "lng" : -122.3386078
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6079095302915,
                  "lng" : -122.3373017697085
               },
               "southwest" : {
                  "lat" : 47.6052115697085,
                  "lng" : -122.3399997302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "373cd639de6f17089522877e6d2125298ef27956",
         "name" : "Lecosho",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3492,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/116855725994126082812/photos\"\u003eCraig Langerman\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAxud77XcZrkyIO5XPgGdnyR_Qb7VJ17hDYBH7aSqyWp3sBtT6jzlhHYCgJo4RG9mt-NoS4h6_C0C6l8eBoGUGWA1tRnQofFAbm7owfXIdhsplZdUCKZhCQ5N5fYqjX8vhEhCCcbVx4dARsWJe-Up829dPGhR51lgrNXVR2EG9LGOJo42P_xgsTg",
               "width" : 4656
            }
         ],
         "place_id" : "ChIJ58iUH7JqkFQRrJNtfBE3GwI",
         "price_level" : 2,
         "rating" : 4.5,
         "reference" : "CmRRAAAAMEWY73957kpEHffjPnxaWH4t5QZtf0bbIkZp7UVZ1amGwXgZhg7na1erOfH8_dg9R4lIM4YZk7YUfwwAE-0AXkAyc6mbSfMNDoNXq8-N62NkxZHrsiiy1l_AGUl8jt8pEhBGBcwtI3_xsRM_0knlX3axGhRr42cMTddqjE3izjzCyOsLJ20A2A",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "89 University Street, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6141431,
               "lng" : -122.3366548
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.61548138029151,
                  "lng" : -122.3351858197085
               },
               "southwest" : {
                  "lat" : 47.61278341970851,
                  "lng" : -122.3378837802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "921d6702952d81d9e3e0f811bfb398cd594e9f36",
         "name" : "Miller's Guild",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2992,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/110575816784282742459/photos\"\u003eHartwig Adam\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAeUmxdPaeunkfUrGjgqNJ-352QQfic8lKNsuy37-Y8Idx9ZSvGzyHIlJPFqgOWtFluYhdDM-NznTS8NfVgdvbv8w9txADXV7vLNKQtT4YEon5mP_Z3rglpM1NTFzpTgSIEhA-aAy4kKjnO3fYA3vae-jcGhRs66PL96X4hoa1zspprOQNy3cysw",
               "width" : 4000
            }
         ],
         "place_id" : "ChIJu25ZH0sVkFQRi9VFLtjkOIg",
         "price_level" : 2,
         "rating" : 4.1,
         "reference" : "CmRSAAAA6RdA2StYqPt2_AVIpWbxlZz4JEen-bBeUOrsGWortzwchpmynPMEclQFIzvSmV_feVJNLDrgUBWj0bgz_2ulNC45mKut7l1od8GQSXSa1vndFdMDPqnOuqpGtOBowvz5EhCJDOMLQV8Y4x_93-gwEdAwGhTjadN7jmV-EinXqxoEQWDoeW6rsw",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "612 Stewart Street, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.60895109999999,
               "lng" : -122.3268446
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6103637302915,
                  "lng" : -122.3252852197085
               },
               "southwest" : {
                  "lat" : 47.6076657697085,
                  "lng" : -122.3279831802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "8d22e1d2adb66d56b0102efcbd45c13fef68da5d",
         "name" : "Dunbar Room",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 1365,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\"\u003eZAGAT\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAA9hv45fK-XGP7GKyKA5weh0LLg6oOqL7xZZm76tZiXHue5bnQi307o6cWykPpTuP0PrZhf1O_cyuqYcbmX2PI3IeTOc2thfokDnd-9olwZC8hBizsojuh4JRzD59pTllzEhCSFaDz61di2SKVL7WzMKPCGhQnd5w2cuqsn35GOj0TDUNAVGWdJg",
               "width" : 2048
            }
         ],
         "place_id" : "ChIJKSKzIrZqkFQRe2iGTKQo_7M",
         "price_level" : 3,
         "rating" : 2.9,
         "reference" : "CmRSAAAArdOp2GsYsNRy-k6uhyxuITyOIoHoEkXyEdLIdTkow3eCgTWsHCilri_0rQtnmR9obdyAZ4dNnkjOorrfQzofp3PVJWPzF-0dmjdhtbS5l9mikqMOq2G2hLKkU7uBo-tqEhD6yzES8ukzhwiDDsqc5DunGhSkM94IVhN-JVdmbvt6H0Sn1E194Q",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "900 Madison Street, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6118602,
               "lng" : -122.3333376
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.61311863029149,
                  "lng" : -122.3319103697085
               },
               "southwest" : {
                  "lat" : 47.6104206697085,
                  "lng" : -122.3346083302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "98e0a9cbf3c1aae52894dc1c53da43a7ea5883bb",
         "name" : "The Cheesecake Factory",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3088,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/118385846017377236127/photos\"\u003eAdrian Mandy\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAA3JsadgrvhccQhnOCj4tjUkCdMiRvk7qX-8bFGW9U2aAKzqQC6HVdurufuPYSZxqiA8w-52U20lduuxxD-b-67ofcQokTy9DGW-mfjI6Pj0Ujblnled-V1OOIGOsPVNCOEhCIHM3DZCbxw9GaUiRxzaIVGhR3ehaVr3DAv5KYtKuX3lQE2SExzg",
               "width" : 4160
            }
         ],
         "place_id" : "ChIJKQ2BHbVqkFQRRnjiLmdeTDM",
         "price_level" : 2,
         "rating" : 3.9,
         "reference" : "CmRRAAAAUo40D7tk8s0SN1dLGMVXIzkAemXp78tfeFPeTFIIcTqY6tGNy0oGuOXVM3NJLcZmha3f0BMtR5tycp7TTETnkwCmt2fr19m8jLjGZLRJ7Ts-lyhOq24eB6BA7MTXuRyEEhBrdA3LIyOemuhWnEZakd80GhSs9g1WBhZIfHMTh2kdSiCrc1AJRg",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "700 Pike Street, Seattle"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 47.6073212,
               "lng" : -122.3366865
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 47.6086065302915,
                  "lng" : -122.3354914197085
               },
               "southwest" : {
                  "lat" : 47.6059085697085,
                  "lng" : -122.3381893802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "e2955f2e0e0f97d136535e223aa7f710abfbdfe1",
         "name" : "The Brooklyn Seafood, Steak & Oyster House",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2988,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/111132229615957633913/photos\"\u003eHagai Nechmad\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAUhxGuiERl9UMy6G4GTB2UUkXKVa0PoSvcw245eU83Ul5DbRkAcuCAkPhwMar7L8z7c-Va4VjTvRh90NfRpke7eT35oEHOt8CrHZHMmW7atTBABfJ3KaHIxY2U7gEmX2NEhDq-Ot1LjSwiVOCdwCKHirSGhSb_rId5wcczE3SgbfIQUEQ7mAH2g",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJz8aP1LNqkFQRZsOlkz0Fbq4",
         "price_level" : 3,
         "rating" : 4.3,
         "reference" : "CmRSAAAA3_-pc3VK7-D3pv1Rq2v8tpvcYKj3GWBqa2-4WS6ysQ1yxej-XchUEbaM-B_U9Nf_-zAjybYYflPrMBBlEC0qGcKmd9ysQmNv7HPFO17c-aWNL-O6RziErhqqX3oYoRKDEhBLjDkd6QEk3X1_LpGXEJbhGhSNdhZZHt6pLMECFjhx0yFVGnlWpQ",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "1212 2nd Avenue, Seattle"
      }
   ]

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
 