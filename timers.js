//setTimeout rodar uma função depois de X milisegundos
const timeOut = 3000
const fineshed = () => console.log('fineshed')
setTimeout(fineshed,timeOut)

//clearTimeout cancela um timeOut
let timer = setTimeout(fineshed,timeOut)
clearTimeout(timer)

//setInterval ira rodar uma função N vezes depois de X milisegundos
const setTime = 1000
const checking = () => console.log('checking')


//clearInterval ira cancelar um setInterval registrado
let interval = setInterval(checking,setTime)

setTimeout(() => clearInterval(interval),5000)
