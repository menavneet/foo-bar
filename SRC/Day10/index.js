var eventEmitter = require("events")
var em = new  eventEmitter.EventEmitter()

em.on("disco",()=>{
    console.log("event 2")
})

em.on("disco",()=>{
    console.log("event 7")
})

em.on("disco",()=>{
    console.log("event 8")
})

em.emit("disco")
em.removeListener("disco",)