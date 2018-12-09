var express = require('express');
var router = express.Router();
var harryPotterData = require("../data/data")

router.get('/',function(request,response){
    var mustacheVaribles = {
        harryPotterList : harryPotterData
    }
    response.render('./students/students',mustacheVaribles)
})
    
router.get('/:id',function(request,response){
    var studentID = request.params.id;
    var mustacheVaribles = {
        harryPotterList : harryPotterData[studentID]
    }
    response.render('./students/show',mustacheVaribles)
})


module.exports = router;