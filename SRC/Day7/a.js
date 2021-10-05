// var fun1 = () =>console.log("A")
// var fun2 = () =>console.log("B")
// var fun3 = () =>console.log("C")
// var fun4 = () =>console.log("D")


// fun1() // 1000 // retun name
// fun2() // 500  // DP
// fun3() // 300 // no of f
// fun4() // 100 // list suggested friend




// var hello = function(){
//     console.log("Hello")
// }

// console.log("Start")
// setTimeout(hello,1000)
// console.log("End")

// Promise = Pending -> resolve | rejected

// var checkname = function(name){
//     return new Promise(function (res,rej){
//         if (typeof name=== 'string'){
//             if (name.startsWith("nav"))
//             {
//                 setTimeout(()=>{
//                     console.log("promise got resolved")
//                 },0)
//                 res("This is OK")
//             }
//             else{
//                 rej("This is not OK")
//             }
//         }
//     })
// }



// console.log("A")

// var p = checkname("navneet")
// console.log(p)
// p.then(function(val){
//     console.log(val)
// })
// console.log("B")

// p.catch((err)=>console.log("This is rejected state",err))
// p.finally((data)=>console.log("This is a finally state",data))


var fun1 = ()=>new Promise(function(res,rej){
    setTimeout(()=>(res("fun1")),1000)
})

var fun2 = ()=>new Promise(function(res,rej){
    setTimeout(()=>(res("fun2")),500)
})

var fun3 = ()=>new Promise(function(res,rej){
    setTimeout(()=>(res("fun3")),2000)
})

var hello = function(val){
    console.log(val)
}

var p1 = fun1()
var p2 = fun2()
var p3 = fun3()

console.log("start")
// p1.then(hello)
// p2.then(hello)
// p3.then(hello)

var  pAll = Promise.all([p1,p2,p3])
console.log("p ALl",pAll)
pAll.then((val)=>console.log("P All resolved state",val))

// var pRace = Promise.race([p1,p2,p3])
// pRace.then((val)=>console.log("P Race resolved state",val))

console.log("end")



