console.log("A5.4_HW2")
console.log("---- ---- ----")

console.log("1.1")

function avgOfNumUpToN(n){
    let sum = 0
    for(let i = 1; i<=n; i++){
        sum+=i
    }
    return sum/n
}
let numInput1 = 10
console.log("The average of numbers from 1 to "+numInput1+" is:",avgOfNumUpToN(numInput1))
console.log("---- ---- ----")

console.log("1.2")

function sumOfNumbersGreaterThanSixUpToN(n){
    let sum = 0
    for(let i = 1; i<=n; i++){ //could have initialized by 6
        if(i>6) sum+=i
    }
    return sum
}

let numInput2 = 12
console.log("sum of numbers is:",sumOfNumbersGreaterThanSixUpToN(numInput2))
console.log("---- ---- ----")

console.log("1.3")

function sumDivisibleByEightUpToN(n){
    let sum = 0
    for(let i = 10; i<=n;i++){
        if(i%8 == 0) sum+=i
    }
    return sum
}
console.log(sumDivisibleByEightUpToN(40))
console.log("---- ---- ----")

console.log("1.4")

function sumEvenAndOddUpToN(n){
    let evenSum = 0
    let oddSum = 0

    for(let i = 1; i<=n; i++){
        if(i%2 == 0) evenSum+=i
        else oddSum+=i
    }
    console.log("Sum of even no's is:",evenSum)
    console.log("Sum of odd numbers:",oddSum)
}
sumEvenAndOddUpToN(30)
