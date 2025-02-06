const filterOdd = numbers => numbers.filter(number=>number%2!==0)
const doubleNumbers = numbers => numbers.map(number=>number*2)
const calculateSum = numbers => numbers.reduce((sum,number)=>sum+=number)
const maxNumber = numbers => numbers.reduce((max,number)=>number>max?number:max,numbers[0])

const processdata = (numbers,callback)=>{
    return callback(numbers)
}

const numbers = [45, 5, 51, 36, 99, 63, 47, 44, 22, 11] 

console.log("original numbers :",numbers)
console.log("filter odd : ", processdata(numbers,filterOdd))
console.log("Double Numbers :", processdata(numbers,doubleNumbers))
console.log("Calculate Sum :", processdata(numbers,calculateSum))
console.log("Maximum Number :", processdata(numbers,maxNumber))

