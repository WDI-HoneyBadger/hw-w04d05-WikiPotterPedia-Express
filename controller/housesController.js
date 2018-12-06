var express = require('express');
var router = express.Router();
//set variables data module
var harryPotterData = require('../data/data');


router.get('/', function(request, response){
    var allHouses = {
        lists: harryPotterData
    };
    response.render('./house', allHouses);
});


router.get('/:id', function(request, response){
    var getHouse = request.params.id;

    var housess = harryPotterData.filter(function(house){
        return house.house == getHouse;
    });
    
    var housesData = {
        housesList: housess
    };
    response.render('./wikipotter/house_id', housesData);
});


// export the router

module.exports = router;