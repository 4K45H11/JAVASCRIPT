console.log("A5.7_CW")
console.log("---- ---- ----")

console.log("Exercise 1")
console.log("---- ---- ----")
let numbersArray = [5,12,7,25,18,3]

console.log("1.1")
function printOriginalArray(){
    console.log("original array:",numbersArray)
}
printOriginalArray()

console.log("---- ---- ----")

console.log("1.2")
function addTenToArray(){
    let newArray = []
    for(let i = 0; i<numbersArray.length; i++){
        newArray.push(numbersArray[i]+10)
    }
    return newArray
}
console.log("Array added with 10:",addTenToArray())
console.log("---- ---- ----")

console.log("1.3")
function convertOddToEven(numbers){
    let convertedArray = []
    for(i = 0; i<numbers.length; i++){
        if(numbers[i]%2 !==0){
            convertedArray.push(numbers[i]+1)
        }
        else convertedArray.push(numbers[i])
    }
    return convertedArray
}

console.log(convertOddToEven(numbersArray))
console.log("---- ---- ----")

console.log("1.4")
function findLargestNum(numbers){
    let ans = numbers[0]
    for(let i = 0; i<numbers.length; i++){
        if(ans < numbers[i]) ans = numbers[i]
    }
    return ans
}
console.log("Largest number of the array is:",findLargestNum(numbersArray))