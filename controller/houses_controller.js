var express = require('express');
var router = express.Router();

var harryPotterData = require('../data/data');


router.get('/', function (request, response) {
    // set up mustache data:
    var housesinfo = {
        housesinfoList: harryPotterData
    }

    response.render('./houses/index', housesinfo);
})

router.get('/:name', function (request, response) {

    var harryPotterDataId = request.params.name;
    var houses = harryPotterData.filter(function (house) {
        return house.house == harryPotterDataId;
    })
    var housesinfo = {
        housesinfoList: houses
    };


    response.render('./houses/show', housesinfo);
});



//   export the router

module.exports = router;