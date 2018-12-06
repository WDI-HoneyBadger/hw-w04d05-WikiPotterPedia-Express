var express = require('express');
var router = express.Router();

var harryPotterData = require('../data/data');

router.get('/', function(request, response){
    // set up mustache data:
    var allStudents = {
      lists: harryPotterData
    };
  
    response.render('./wikipotter/index', allStudents);
  })

  var harryPotterData = require('../data/data');

  router.get('/:id', function(request, response){
      var theStudentsData = request.params.id;
    // set up mustache data:
    var allStudents = {
      studentIfo: harryPotterData[theStudentsData]
    };
  
    response.render('./wikipotter/student_id', allStudents);
  })

// export the router
module.exports = router;