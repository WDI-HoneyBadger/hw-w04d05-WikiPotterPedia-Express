//require our dependencies
var express = require('express');
var router = express.Router();

var harrypotter = require('../data/data');

// routes

router.get('/', function(request, response){
  // set up mustache data:
  var mustacheData = {
    harryPotterList: harrypotter
  };

  response.render('./students/index', mustacheData);
  response.render('./houses/index')
})
router.get('/students',function(request,response){

var mustacheData={
    harryPotterList:harrypotter.harryPotterData
};
response.render('./students/show' ,mustacheData)

})

router.get('/:id', function(request, response){
  var studentsId = request.params.id;  //get the number from the url and save as variable birdId
  var mustacheData = {
    harrypotter : harrypotter[studentsId]  /* use that number as an index in the array in angry_birds.js.  Send the object at that index to mustache*/
  }
  response.render('./students/show', mustacheData);
})



router.get('/houses',function(request,response){

    var mustacheData={
        harryPotterList:harrypotter.harryPotterData
    };
    response.render('./houses/show' ,mustacheData)
    
    })
    
    router.get('/:name', function(request, response){
      var studentsId = request.params.id;  //get the number from the url and save as variable birdId
      var mustacheData = {
        harrypotter : harrypotter[studentsId]  /* use that number as an index in the array in angry_birds.js.  Send the object at that index to mustache*/
      }
      response.render('./houses/show', mustacheData);
    })

// export the router

module.exports = router;