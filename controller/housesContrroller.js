var express = require('express');
var router = express.Router();
var harryPotterData = require('../data/data');






router.get('/', function(request, response){
    var housesData = {
        housesList: harryPotterData
    };
    response.render('./houses', housesData);
});

router.get('/:name', function(request, response){
    var housesName = request.params.name;
    //console.log(housesName)

    var housess = harryPotterData.filter(function(house){
        return house.house == housesName;
    })
    //console.log(housess)
    var housesData = {
        housesList: housess
    };
    //console.log(harryPotterData[housesName])
    response.render('./housesID', housesData);
});


// export the router

module.exports = router;