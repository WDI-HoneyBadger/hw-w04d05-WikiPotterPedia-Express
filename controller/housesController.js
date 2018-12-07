var express = require('express');
var router = express.Router();
var harryPotterData = require('../data/data');






router.get('/', function(request, response){
    var dataOfHouses = {
        listOfHouse: harryPotterData
    };
    response.render('./houses', dataOfHouses);
});

router.get('/:name', function(request, response){
    var nameofHouse = request.params.name;
    //console.log(housesName)

    var housess = harryPotterData.filter(function(house){
        return house.house == nameofHouse;
    })
    //console.log(housess)
    var dataOfHouses = {
        listOfHouse: housess
    };
    //console.log(harryPotterData[housesName])
    response.render('./housesID', dataOfHouses);
});


// export the router

module.exports = router;