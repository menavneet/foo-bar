// var hello = function () {
//     console.log("hello")
// }

// var greet = function (name, helloFunction) {
    
//     if (typeof helloFunction === 'function') {
//         helloFunction()
//     }
//     console.log(name)

//     return function (){
//         console.log("Greeting is done")
//     }
// }

// var a = greet("Navneet",hello)
// a()


// hello()
// hello2()
// hello3()

// console.log(typeof "navneet")
// console.log(typeof 1)
// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof hello2)

// console.log("-----------")
// console.log(Array.isArray([]))
// console.log(Array.isArray({}))

var mul2 = function(x){
    console.log("->",x)
    return x*2
}

var evenFilter  = function(x){
    console.log(x)
    if(x%2==0){
        return true
    }else{
        return false
    }
}

var a = [1,2,3,4,5,6,7,8,9,10]
var b = a.filter(evenFilter)
console.log(b)

// var b = a.map(mul2)
// var c = a.map(x=>3*x)

// console.log("--------------")
// console.log(b)
// console.log(c)