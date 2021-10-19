var check_password = function (pwd,c_pwd) {
    console.log("function called")
    if (pwd===c_pwd){
        return true
    }
    else{
        return false
    }
}

var say_hello=function (){
    console.log("Saying Hello")
}



// module.exports.check_password = check_password
// module.exports.say_hello = say_hello
