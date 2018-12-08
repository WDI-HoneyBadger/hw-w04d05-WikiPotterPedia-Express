var express = require('express');
var router = express.Router();
var harryPotterData = require('../data/data');

router.get('/',function(request,response){

    var studentsData = {
        studentsList : harryPotterData
    };
    response.render('./students', studentsData);
});

router.get('/:id',function(request,response){
var students_id = request.params.id;
var studentsData = {
    studentsList: harryPotterData[students_id]
};

response.render('./students_id',studentsData);

});


module.exports = router;
