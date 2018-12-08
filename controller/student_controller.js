var express = require('express');

var router = express.Router();

var studentsData = require('../data/data');


//setting the route page
router.get('/', function(request, response){
    var mustach_variable = {
        studentsList: studentsData
    }
    response.render('./students/index', mustach_variable)
})

//passing id's 
router.get('/:id', function(request, response){
    var stuedntId = request.params.id;
    
    var student = studentsData[stuedntId];
    
    //our object to carry info
    var mustach_variable = {
        studentName: student.first + " " + student.last,
        studentImge: student.image,
        studentHouse: student.house
    }
    response.render('./students/show', mustach_variable)
})


module.exports = router; 