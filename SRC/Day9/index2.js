var http = require("http")

console.log("Here A")

http.createServer((req,res)=>{
    console.log("Here C")
    res.end("Hello From Server 8081")
}).listen(8081)

console.log("Here B")