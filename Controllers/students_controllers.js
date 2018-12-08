var express = require('express');
var router = express.Router();

var studentsAndHouses = require('../data/data');

router.get('/', function(requrst,response){
    console.log(studentsAndHouses.harryPotterData);
    var mustacheData = {
         studentList: studentsAndHouses.harryPotterData
         
    };
    response.render('./students/index', mustacheData);

    
})


router.get('/:id', function (request, response) {
    var harryPoterId = request.params.id;
    // console.log(`this the list  ${harryPoterId}`);
var mustacheData = {
    harryPoterCategory: studentsAndHouses.harryPotterData[harryPoterId],
};
response.render('./students/show', mustacheData);
    
})

module.exports = router;