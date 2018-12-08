var express = require('express');
var router = express.Router();
var studentsData = require('../data/data');
router.get('/', function(request, response){
    response.render('./houses/index')
})
router.get('/:houseName', function(request, response){
    var houseName = request.params.houseName;
    
    var studentsOfTheHouse = studentsData.filter(function(elem){
        if (elem.house == houseName){
            return elem;
        };
    })
    var mustachVar = {
        studentList: studentsOfTheHouse
    }
    response.render('./houses/show', mustachVar);
})
module.exports = router; 