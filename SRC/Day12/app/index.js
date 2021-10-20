const express = require('express')
var bodyParser = require('body-parser')

// var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()
// app.use(urlencodedParser)
app.use(jsonParser)

app.get('/', function (req, res) {
    console.log("GET  REQEST")
    console.log("-------------")
    console.log("-------------")
    res.send("ok")
})

app.post('/', function (req, res) {
    console.log("POST  REQEST")
    console.log("-------------")
    console.log(req.query)
    console.log(req.body)
    console.log("-------------")
    res.send("ok")
})


app.listen(3000)