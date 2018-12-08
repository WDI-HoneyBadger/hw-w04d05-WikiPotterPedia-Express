var express = require('express');
var router = express.Router();

var studentsAndHouses = require('../data/data');

router.get('/', function(requrst,response){
    
    var mustacheData = {
         housesList: studentsAndHouses.harryPotterData
    };
    response.render('./houses/houses', mustacheData);

    
})


router.get('/:id', function (request, response) {
    var harryPoterId = request.params.id;
   
var mustacheData = {
    harryPoterCategory: studentsAndHouses.harryPotterData[harryPoterId],
};
response.render('./houses/show', mustacheData);
    
})




module.exports = router;