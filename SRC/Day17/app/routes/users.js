var express = require('express');
var User = require('../model/user')
var router = express.Router();

var crypto = require('crypto');
// var name = 'braitsch';
var createHash = crypto.createHash('md5')
// update(name).digest('hex');
// console.log(hash);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/signup",async function(req,res,next){
  password   = req.body["password"]
  req.body["password"]= createHash.update(password).digest('hex')
  var  user = new User(req.body)
  var data =await user.save()
  console.log(">")
  console.log(data)
  console.log(">")
  res.json({"msg":"this is signup page"})
})

router.post("/signin",async function(req,res,next){
  var  username = req.body.username
  var password = req.body.password
  password = crypto.createHash('md5').update(password).digest('hex')
  console.log("-------")
  console.log(username,password)
  console.log("-------")
  var user  =await User.findOne({username,password})
  if(user !== null){
    res.json({"msg":"valid  login"})
  }
  else{
    res.json({"msg":"Invalid  login"})
  }
  console.log(user)
})

// router.post("/addUser",function(req,res,next){
//   var username =  req.body.username
//   var password = req.body.password
//   var email = req.body.email
//   console.log("-------------")
//   console.log(req.body)
//   console.log("-------------")

//   var user = new User(req.body)
//   user.save()

//   res.json({"msg":"user added"})
// })

// router.post("/login",async function(req,res,next){
//   var username =  req.body.username
//   var password = req.body.password
//   var user =await User.findOne({username,password})
  
//   console.log("---------------",user)
//   if(!!user){
//     return res.json({"msg":"you logged in"});
//   }else{
//     return res.json({"msg":"login failed"});
//   }
//   res.json({"msg":"user added"})
// })

module.exports = router;
