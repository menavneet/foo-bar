var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'somerandon-string');
var a = jwt.verify(token, 'somerandon-string');
console.log(a)