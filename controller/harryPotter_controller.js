//require our dependencies
var express = require('express');
var router = express.Router();
var harryPotterData = require('../data/data');

router.get('/', function(request, response){
    var studentData = {
        studentsList: harryPotterData
    };
    response.render('./students', studentData);
});

router.get('/:id', function(request, response){
    var studentId = request.params.id;
    var studentData = {
        studentsList: harryPotterData[studentId]
    }
    response.render('./studentsShow', studentData);
});



// export the router

module.exports = router;