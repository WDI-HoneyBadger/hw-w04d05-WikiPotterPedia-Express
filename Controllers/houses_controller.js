

var express = require('express');
var router = express.Router();
var studensHouses = require('../data/data');



router.get('/', function(request,response){

   var mustacheVariables={
       housesList: studensHouses.harryPotterData
   };
response.render('./houses/houses',mustacheVariables );

})

router.get('/:id',function(request,response){
    var harrypotterID = request.params.id;
    var mustacheVariables={
        housesCategoris: studensHouses.harryPotterData[harrypotterID],
    }
    response.render('./houses/show',mustacheVariables);
})

module.express = router;