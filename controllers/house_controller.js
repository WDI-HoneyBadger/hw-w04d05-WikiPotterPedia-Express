var express = require('express');
var router = express.Router();

var data = require('../data/data');

router.get('/', function(request, response) {
    var mustacheVariables = {
        
    }
    response.render('./houses/index',mustacheVariables);
})

router.get('/:name', function(request,response){
    var getName = request.params.name;
    var filterData = data.filter(function(e){
        return e.house.toLowerCase() === getName;
    });
    var mustacheVariables = {
        housesData: filterData,
        houseName: getName.toUpperCase()
    }
    response.render('./houses/show', mustacheVariables);
})

module.exports = router;