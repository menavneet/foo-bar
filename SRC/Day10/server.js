var http = require("http")
var fs = require("fs")

function readFromFile(file_name){
    data = fs.readFileSync(file_name)
    return data
}

http.createServer(function(req,res){
    console.log(req.url)
    switch (req.url) {
        case "/login":
            data = readFromFile("login.html")
            res.end(data.toString())
            break;
        case "/welcome":
            data = readFromFile("index.html")
            res.end(data.toString())
            break;
        default:
            res.end("404")
            break;
    }
}).listen("8080")