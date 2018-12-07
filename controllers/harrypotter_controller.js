//require our dependencies
var express = require('express');
var router = express.Router();

var harryPotter = require('../data/data');

// routes

router.get('/', function(request, response){
  // set up mustache data:
  var mustacheData = {
    harryPotterDataList: harryPotter.harryPotterData
  };
  response.render('./students/index', mustacheData);  // khala al show students button goes to the other page 
})

router.get('/houses', function(request, response){
    // set up mustache data:
    var mustacheData = {
      harryPotterDataList: harryPotter.harryPotterData
    };3
  
    response.render('./houses/index', mustacheData);  // khala al show students button goes to the other page 
  })
  


router.get('/:id', function(request, response){
  var harrypotterId = request.params.id;  //get the number from the url and save as variable birdId
  var mustacheData = {
    charc: harryPotter.harryPotterData[harrypotterId]  /* use that number as an index in the array in angry_birds.js.  Send the object at that index to mustache*/
  }
  response.render('.//show', mustacheData);
})

router.get('/:name', function(request, response){
    var harrypotterId = request.params.id;  //get the number from the url and save as variable birdId
    var mustacheData = {
      charc: harryPotter.harryPotterData[harrypotterId]  /* use that number as an index in the array in angry_birds.js.  Send the object at that index to mustache*/
    }
    response.render('./houses/show', mustacheData);
  })

// export the router

module.exports = router;