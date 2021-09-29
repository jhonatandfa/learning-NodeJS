const { EventEmitter } = require('events')
const ev = new EventEmitter()

//ON = ouvir sempre   / Once = ouvir apenas uma vez
ev.on('Saysomething', (message) =>{
    console.log("Eu ouvi você: ", message)
})

ev.emit('Saysomething', "Jhonatan")

