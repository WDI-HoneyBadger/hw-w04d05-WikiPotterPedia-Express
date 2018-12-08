var express = require('express');
var router = express.Router();
var studentsData = require('../data/data');

router.get('/', function(request, response){
    var mustacheData = {
        housesList: studentsData
    };
    response.render('./houses', mustacheData);
});

router.get('/:name', function(request, response){
    var getHouseName = request.params.name;

    var studentsDataFilter = studentsData.filter(function(elm){
        return elm.house === getHouseName;
    })

    var mustacheData = {
        housesList: studentsDataFilter
    };
    response.render('./houses_name', mustacheData);
});

module.exports = router; 