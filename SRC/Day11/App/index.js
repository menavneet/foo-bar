var express = require('express')

var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World Navneet')
})

app.get('/welcome', function (req, res) {
    res.send('This is a welcome page')
  })

app.get('/getjson',function(req,res){
    console.log("----------body-----------")
    console.log(req.body)
    console.log("----------query-----------")
    console.log(req.query)
    console.log("---------------------")
    res.send({
        "key1":"value1",
        "key2":"value2",
        "key3":"value3",
    })
})
app.listen(3000)