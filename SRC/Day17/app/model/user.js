var mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password:String,
    email:String
  });

var UserModel = mongoose.model("User",userSchema)

 module.exports=UserModel