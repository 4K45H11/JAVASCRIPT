console.log("A5.7_CW")
console.log("---- ---- ----")

const numbersArray = [22, 35, 18, 47, 50, 63];

console.log("1.1")
function printOriginalArray(){
    console.log("Original Array:",numbersArray)
}
printOriginalArray()
console.log("---- ---- ----")

console.log("1.2")
function multiplyNumbersByTwo(numbers){
    let ans = []
    for(let i = 0; i<numbers.length; i++){
        ans.push(numbers[i]*2)
    }
    return ans
}
console.log("Array numbers multiplied by two:",multiplyNumbersByTwo(numbersArray))
console.log("---- ---- ----")

console.log("1.3")
function evenToOdd(numbers){
    let ans  = []
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]%2 === 0) ans.push(numbers[i]+1)
        else ans.push(numbers[i])    
    }
    return ans
}

console.log("Array converted to nearest odd numbers:",evenToOdd(numbersArray))
console.log("---- ---- ----")

console.log("1.4")
function smallestNumber(numbres){
    let small = numbres[0]
    for(let i = 0; i<numbres.length; i++){
        if(small > numbres[i]) small = numbres[i]
    }
    return small
}
console.log("The smallest number of the array:",smallestNumber(numbersArray))