var express = require('express');
var router = express.Router();

var studentsData = require('../data/data');

router.get('/', function(request, response){
    var mustachVar = {
        studentsList: studentsData
    }
    response.render('./students/index', mustachVar)
})

router.get('/:id', function(request, response){
    var stuedntId = request.params.id;
    var student = studentsData[stuedntId];
    var mustachVar = {
        studentName: student.first + ' ' + student.last,
        studentImge: student.image,
        studentHouse: student.house
    }
    response.render('./students/show', mustachVar)
})

module.exports = router; 