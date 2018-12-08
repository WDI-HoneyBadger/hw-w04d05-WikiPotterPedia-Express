//require dep
var express = require('express');
var router = express.Router();

var harryPotterDatas  = require('../modules/harryPotterData');
//routes
router.get('/', function(request, response) {
    //set up mustache data
    var mustacheData ={
        harryPotterDataList: harryPotterDatas


      }
      response.render('./harryPotterData/index', mustacheData);
    
    })

router.get('/:id', function (request, response) {
        var harryPotterDataId = request.params.id;
       var mustacheData = {
        harryPotterDatas: harryPotterDatas[harryPotterDataId]
       }
       response.render('./harryPotterData/show', mustacheData);})
        //export the router
module.exports = router;