var express = require('express');
var router = express.Router();
var studentsData = require('../data/data');

router.get('/', function(request, response){
    var mustacheData = {
        studentsList:studentsData
    };
    response.render('./students', mustacheData);
});

router.get('/:id', function(request, response){
    var getStudentId = request.params.id;
    var mustacheData = {
        studentsList: studentsData[getStudentId]
    }
    response.render('./students_id', mustacheData);
});


 module.exports = router; 