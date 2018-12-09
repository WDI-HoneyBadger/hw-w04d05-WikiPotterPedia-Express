var express = require('express');
var router = express.Router();
var harryPotterData = require("../data/data")

  router.get('/', function(request, response){
      response.render('./houses/houses')
  })
   router.get('/:houseName', function(request, response){
      var houseName = request.params.houseName;
      var house = harryPotterData.filter(function(el){
          return el.house == houseName;
      })
  
      var mustacheVaribles = {
          houseList: house

          }
  
      response.render('./houses/show', mustacheVaribles);
  })

   



module.exports = router;