var express = require('express');
var router = express.Router();

var students = require('../data/data');

router.get('/', function(request, response){
    var mustacheVariables = {
        studentList: students,   
    }
    response.render('./students/students_index', mustacheVariables);
})

router.get('/:id', function(request, response){
    var studentId = request.params.id;
    var student = students[studentId];
    var mustacheVariables = {
        studentList: student,   
    }
    response.render('./students/students_show', mustacheVariables);
})



module.exports = router;