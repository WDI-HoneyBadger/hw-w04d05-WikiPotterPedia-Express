//require our dependencies
var express = require('express');
var router = express.Router();

var harrypotterdata = require('../data/data');

// routes

router.get('/',function(request,response){

    var houseData={
        housesList:harrypotterdata
    };
    response.render('./houses/index' ,houseData)
    
    })
    
    router.get('/:name', function(request, response){
      var housesName = request.params.name; 
      var houseData = harrypotterdata.filter(function(house){
return house.house == housesName;
      })
      houses={
        housesList:houseData

      }
         
      response.render('./houses/show', houses);
    })

// export the router

module.exports = router;
