const arr = []
let repeater
const startAddingData=()=>{
repeater = setInterval(()=>{
    arr.push(Math.floor(Math.random()*10))
    console.log(arr);
},1000)
}

const stopAddingData = ()=>{
    clearInterval(repeater)
}

startAddingData() 