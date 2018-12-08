var express = require('express');
var router = express.Router();

var students = require('../data/data');


router.get('/', function(request, response){
 
  var mustacheData = {
    studentsList: students
  };

  response.render('./students/index', mustacheData);
})

router.get('/:id', function(request, response){
  var studentId = request.params.id;  
  var mustacheData = {
    student: students[studentId]  
  }
  response.render('./students/show', mustacheData);
})


module.exports = router;