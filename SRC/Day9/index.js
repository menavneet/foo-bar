var http = require("http")

console.log("Here A")

http.createServer((req,res)=>{
    console.log("Here C")
    res.end("Hello From Server 8080")
}).listen(8080)

console.log("Here B")