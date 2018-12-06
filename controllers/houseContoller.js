//require our dependencies
var express = require('express');
var router = express.Router();
var harryPotterData = require('../data/data');

router.get('/', function(request, response){
    var hData = {
        hList: harryPotterData
    };
    response.render('./houses/house', hData);
});

router.get('/:name', function(request, response){
    var hName = request.params.name;

    var houses = harryPotterData.filter(function(house){
        return house.house == hName;
    })
    var hData = {
        hList: houses
    };
    response.render('./houses/hID', hData);
});



// export the router

module.exports = router;