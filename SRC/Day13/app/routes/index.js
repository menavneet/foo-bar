var express = require('express');
var router = express.Router();
var db = require('../db/student')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// var helloFun = function(req,res,next){
//   console.log("getting request helloFun ")
//   // res.json({"msg":"fine"})
//   next()
// }

// var helloFun2 = function(req,res,next){
//   console.log("getting request helloFun2")
//   res.json({"msg":"fine"})
// }
//   savestudentdata
//
// router.get('/', helloFun,helloFun2)

var fetchStudentRecord = function (req, res, next) {
  if (req.query.name) {
    data = db.filter((x) => x.name === req.query.name)
    if (data.length == 0) {
      res.json({ "msg": "no  data found" })
    }
    res.json(data)
  }
  else {
    res.json(db)
  }
}

var AuthApi = function (req, res, next) {
  if (req.query.API_KEY !== "FAKE_1234_KEY") {
    res.json({ msg: "not allow" })
  }
  else {
    next()
  }
}
//  only allow  client with valid API key
// API_KEY=FAKE_1234_KEY

var addSudentRecord = function (req, res, next) {
  db[db.length] = req.body
  res.json({ "msg": "student record is added" })
}

var validateBodySudentRecord = function (req, res, next) {
  if (!req.body.name) {
    res.json({ "msg": "name is  missing" })
  }
  else if (!req.body.class) {
    res.json({ "msg": "class is  missing" })
  } else if (!req.body.subject) {
    res.json({ "msg": "subject is  missing" })
  }
  else {
    next()
  }

}

  router.get('/std', AuthApi, fetchStudentRecord)
router.post('/std', AuthApi,validateBodySudentRecord , addSudentRecord)




module.exports = router;
