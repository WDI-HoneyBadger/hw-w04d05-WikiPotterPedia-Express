//require our dependencies
var express = require('express');
var router = express.Router();
var hp = require('../data/data');

router.get('/', function(request, response){
    var dataOfStudent = {
        listOfStudent: hp
    };
    response.render('./students', dataOfStudent);
});

router.get('/:id', function(request, response){
    var idOfStudent = request.params.id;
    var dataOfStudent = {
        listOfStudent: hp[idOfStudent]
    }
    response.render('./studentsID', dataOfStudent);
});



// export the router

module.exports = router;