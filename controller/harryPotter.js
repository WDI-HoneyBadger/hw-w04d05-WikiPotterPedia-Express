//require our dependencies
var express = require('express');
var router = express.Router();
var harryPotterData = require('../data/data');



router.get('/', function(request, response){
    var studentData = {
        studentsList: harryPotterData
    };
    response.render('./studentsAll', studentData);
});

router.get('/:id', function(request, response){
    var studentId = request.params.id;
    var studentData = {
        studentsList: harryPotterData[studentId]
    }
    response.render('./studentsID', studentData);
});



// export the router

module.exports = router;