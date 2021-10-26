



var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var secret = "somerandomstring"

var AuthFunc =  function(req,res,next){
  jwt_token =   req.cookies.token
  try{
    user =  jwt.verify(jwt_token,secret) 
    next()
  }
  catch{
    res.redirect("/")
  }
}



/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("cookie ", req.cookies)
  res.render('index', { title: 'Express' });
});

router.get('/setcookie', function (req, res, next) {
  res.cookie("name", "this is cookie value")
  res.redirect("/")
})

router.get('/otherurl', function (req, res, next) {
  console.log("other url cookie", req.cookies)
  res.redirect("/")
})
//

router.get("/home",AuthFunc,function (req, res, next) {
  res.render('home', { username: 'Navneet' });
})

//  username =  menav
// password = pass

router.get('/logout',function(req,res,next){
  res.cookie("token",null)
  res.redirect("/")
})

router.get('/login', function (req, res, next) {
  if (req.query.username === "menav" && req.query.password === "pass") {

    jwt_token = jwt.sign({"name": req.query.username}, secret)
    
    console.log("Token ", jwt_token)
    
    res.cookie("token", jwt_token)
    res.json({ "msg": "valid login" })

  } else {
    res.json({ "msg": "invalid login" })
  }
});


module.exports = router;
