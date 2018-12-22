var express = require('express');
var router = express.Router();

var harryPotterData = require('../data/data');


router.get('/', function(req, res){
    res.render('./houses/index');
})


router.get('/:houses', function(req, res){
   var houseName = req.params.houses;
   console.log(houseName)
   var houseStudents = harryPotterData.filter(function(h){
    if  (h.house.toLowerCase == houseName.toLowerCase){
            return h
    }

       })
       var musttachvariables = {
           students: houseStudents
           }
       
       console.log(houseStudents)
        res.render('./houses/show', musttachvariables);

   })



module.exports = router;