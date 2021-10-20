const express = require('express')
var bodyParser = require('body-parser')

// var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()
app.use(urlencodedParser)
// app.use(jsonParser)


//  read
app.get('/', function (req, res) {
    console.log("GET  REQEST")
    console.log(req.query)
    res.send("ok")
})

// create
app.post('/', function (req, res) {
    console.log("POST  REQEST")
    console.log(req.body)
    res.send("ok")
})

//update
app.put('/', function (req, res) {
    console.log("PUT  REQEST")
    res.send("ok")
})

//delete
app.delete('/', function (req, res) {
    console.log("DELET  REQEST")
    res.send("ok")
})

app.listen(3000)