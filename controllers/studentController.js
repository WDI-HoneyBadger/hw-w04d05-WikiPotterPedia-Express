//require our dependencies
var express = require('express');
var router = express.Router();
var harryPotterData = require('../data/data');

router.get('/', function(request, response){
    var sData = {
        sList: harryPotterData
    };
    response.render('./students/student', sData);
});

router.get('/:id', function(request, response){
    var sId = request.params.id;
    var sData = {
        sList: harryPotterData[sId]
    }

    response.render('./students/sID', sData);
});



// export the router

module.exports = router;