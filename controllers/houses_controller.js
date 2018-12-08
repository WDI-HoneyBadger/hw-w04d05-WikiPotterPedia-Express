var express = require('express');
var router = express.Router();

var houses = require('../data/data');

router.get('/', function(request, response){
    response.render('./houses/index')
})
 router.get('/:houseName', function(request, response){
    var houseName = request.params.houseName;
    var house = houses.filter(function(element){
        return element.house == houseName;
    })

    var mustacheData = {
        houseList: house  }

    response.render('./houses/show', mustacheData);
})
 module.exports = router;
