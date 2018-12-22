var express = require('express');
var router = express.Router();

var harryPotterData = require('../data/data');


router.get('/', function(req, res){
    res.render('./houses/index');
})


router.get('/:houses', function(req, res){
   var houseName = req.params.house;
   var houseStudents = harryPotterData.filter(function(h){
       if (h.house == houseName){
           return h;
       };
       var musttachvariables = {
           students: houseStudents
       }
       
       console.log(houseStudents)
    //    res.render('./houses/show', musttachvariables);

   })


})
module.exports = router;