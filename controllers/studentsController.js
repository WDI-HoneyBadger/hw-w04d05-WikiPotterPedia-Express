var express = require('express');
var router = express.Router();

var harryPotterData = require('../data/data');

router.get('/', function(req, res){
    var musttachevariables = { studentList: harryPotterData};
    // res.send('test')
    res.render('./students/index', musttachevariables);
})

router.get('/:id', function(req, res){
    var sid = req.params.id;  

    var musttachevariables = {
       student: harryPotterData[sid]
    }
    res.render('./students/show', musttachevariables);
})




module.exports = router;