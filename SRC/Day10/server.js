var http = require("http")
var fs = require("fs")
http.createServer(function(req,res){

    fs.readFile("index.html",function(err,data){
        if(err){
            console.warn("we have error")
        }
        else{
            res.end(data)
        }
    })


    // console.log(req.url)
    // res.end("<H1>Navneet</H1>")
}).listen("8080")