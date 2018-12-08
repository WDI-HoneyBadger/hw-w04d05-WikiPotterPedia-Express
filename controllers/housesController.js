var express = require('express');
var router = express.Router(); 
var harryPotterData = require('../data/data');

router.get('/', function(request,response) {

    var housesData = {
        housesList: harryPotterData
    };
    response.render('./houses', housesData);
});

router.get ('/:name', function (request, response){
    var housesName = request.params.name;

    var housesf = harryPotterData.filter(function(house){
        return house.house == housesName;
    
    });

    var housesData = {
        housesList: housesf
    };

    response.render('./houses_id', housesData);
});


module.exports = router;