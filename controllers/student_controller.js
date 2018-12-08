var express = require("express");

var router = express.Router();

var students = require("../data/data");

router.get("/", function(req, res){
    var mustacheData = {
        studentList: students
    }
    res.render("./student_index.html", mustacheData);
})

router.get("/:id", function(req, res){
    var studentId = req.params.id;
    var mustacheData = {
        first: students[studentId].first,
        last: students[studentId].last,
        image: students[studentId].image,
        house: students[studentId].house
    }
    res.render("./student_show.html", mustacheData);
})

module.exports = router;