var express = require('express');
var router = express.Router();

var harryPotterData = require('../data/data');

 router.get('/', function(request, response){
    var housesData = {
        housesList: harryPotterData
    };
    response.render('./houses', housesData);
});

router.get('/houses', function(request, response){
    // set up mustache data:
    var mustacheData = {
      housesList: harryPotter.harryPotterData
    };
  
    response.render('./houses/show', mustacheData);  // khala al show students button goes to the other page 
  })
  

  router.get('/:name', function(request, response){
    var housesName = request.params.name;
    
     var houses = harryPotterData.filter(function(house){
        return house.house == housesName;
    })
  
    var housesData = {
        housesList: houses
    };
    //console.log(harryPotterData[housesName])
    response.render('./houses/show', housesData);
});

// router.get('/:name', function(request, response){
//   var harrypotterName = request.params.name;  //get the number from the url and save as variable birdId
//   var mustacheData = {
//     harryPotter: harryPotter[harrypotterName]  /* use that number as an index in the array in angry_birds.js.  Send the object at that index to mustache*/

//     var housess = harryPotterData.filter(function(house){
//         return house.house == housesName;
//     })

//   }
//   response.render('./houses/show', mustacheData);
// })

 // export the router
 module.exports = router; 