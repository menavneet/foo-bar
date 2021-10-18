var http = require("http")
var fs = require("fs")

// http.createServer(function(req,res){
//   res.end("<h1>Navneet</h1>")
// }).listen(8080)

// console.log("Server Started")

// var  data  = fs.readFileSync("C:\\Users\\menav\\Desktop\\Codekaro.in\\MERN\\foo-bar\\SRC\\Day10\\index.html")
// console.log(data.toString())
// console.log("Point C")

path =  "C:\\Users\\menav\\Desktop\\Codekaro.in\\MERN\\foo-bar\\SRC\\Day10\\index.html"
console.log("Point A")
data = fs.readFile(path,function(err,data){
    if (err){
        console.log("Error")
    }
    else{
        console.log(data.toString())
        console.log("Point C")
    }
})
console.log("Point B")