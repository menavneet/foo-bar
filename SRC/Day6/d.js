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

emails = users.map(function(x){
    return x.email
})
console.log(emails)