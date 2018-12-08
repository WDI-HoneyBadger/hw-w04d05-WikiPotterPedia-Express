var express = require('express');
var router = express.Router();

var harryPotterData = require('../data/data');

// routes

router.get('/', function (request, response) {
    // set up mustache data:
    var mustacheData = {
        harryPotterDataList: harryPotterData
    }

    response.render('./students/index', mustacheData);
})


router.get('/:id', function (request, response) {

      var harryPotterDataId = request.params.id;
    var mustacheData = {
        harryPotterData: harryPotterData[harryPotterDataId]
    };

    response.render('./students/show', mustacheData);
})



    // export the router

    module.exports = router;