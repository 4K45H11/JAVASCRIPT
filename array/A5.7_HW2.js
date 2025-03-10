console.log("A5.7_HW2")
console.log("---- ---- ----")

const numbersArray = [33, 57, 24, 49, 52, 66]

console.log("1.1")
function printOriginalArray(){
    console.log("Original Array:",numbersArray)
}
printOriginalArray()
console.log("---- ---- ----")

console.log("1.2")
function divideNumbersByThree(numbers){
    let ans = []
    for(let i = 0; i<numbers.length; i++){
        ans.push(numbers[i]/3)
    }
    return ans
}
console.log("Array numbers divided by three:",divideNumbersByThree(numbersArray))
console.log("---- ---- ----")

console.log("1.3")
let findNum = 24
function findNumInArray(n,numbers){

    for(let i = 0; i<numbers.length; i++){
        if(n === numbers[i]) return true
    }
    return false
}
console.log("Num:",findNum,findNumInArray(findNum,numbersArray))
console.log("---- ---- ----")

console.log("1.4")

function findLargestNumberDivisibleBy5(numbers){
    let ans = 0
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]%5 === 0 && numbers[i]> ans) ans = numbers[i]
    }
    return ans
}
console.log("Largest number divisible by 5 is:",findLargestNumberDivisibleBy5(numbersArray))
