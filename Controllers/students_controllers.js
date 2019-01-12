var express = require('express');
var router = express.Router();


var studensHouses= require('../data/data');

router.get('/',function(req,res){
    var mustscheVariables={
        studentsList:studensHouses.harryPotterData
    }
    Response.render('./students/index',mustscheVariables)
})


router.get('/:id',function(req,res){
    var harrypotterID=request.params.id;
    var mustacheVariables={
        housesCategoris: studensHouses.harryPotterData[harrypotterID],
    };
    Response.render('./students/show', mustacheVariables)
})

module.exports=router;