var a = null
var b = "some string"


var c = null

// if (a){
//     c=a
// }else{
//     c=b
// }

// var  ex1 = null //false 
// var  ex2 = undefined //false 
// var  ex3 = "" //false 
// var ex4 = "eve 1" // true
// var ex5 = "some random string"

// res = ex2 && ex1 && ex3 && ex4 && ex5



// console.log(res)

var users = [{
    name: "Navneet1",
    email: "random1@gmail.com"
},
{
    name: "Navneet2",
    email: "random2@gmail.com"
},
{
    name: "Navneet3",
    email: "random3@gmail.com"
},
{
    name: "Navneet4",
    email: "random4@gmail.com"
},
]

users.map(function(x){
    return x.name
})

filtered_emails = users.filter(function(x){
    return x.email
})

console.log(filtered_emails)



// for( i=0;i<users.length;i++){
//     console.log(users[i].email  || "Email Not Found")
// }



// (ex1 && ex2 && ex3 && ex4 && ex5)

// c = a || b


// console.log(c)