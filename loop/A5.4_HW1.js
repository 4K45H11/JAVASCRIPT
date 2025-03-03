console.log("A5.4_HW1")
console.log("---- ---- ----")

console.log("1.1")
console.log("---- ---- ----")

function sumUpToN(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum+=i
    }
    return sum
}

console.log(sumUpToN(10))
console.log("---- ---- ----")

console.log("1.2")
console.log("---- ---- ----")

function sumOfEvenNo(n){
    sum = 0
    for(let i = 1; i<=n; i++){
        if(i%2 == 0) sum+=i
    }
    return sum
}

console.log(sumOfEvenNo(9))
console.log("---- ---- ----")

console.log("1.3")
console.log("---- ---- ----")

function sumDivisibleByFiveAndSevenUpToN(n){
    let sumFive = 0
    let sumSeven = 0

    for(let i = 1; i<=n; i++){
        if(i%5 == 0) sumFive+=i
        if(i%7 == 0) sumSeven+=i
    }
    console.log("Sum of numbers divisible by 5:",sumFive)
    console.log("Sum of numbers divisible by 7:",sumSeven)
}
sumDivisibleByFiveAndSevenUpToN(35)
console.log("---- ---- ----")

console.log("1.4")
console.log("---- ---- ----")

function factorial(n){
    let fact = 1
    for(let j = 1; j<=n; j++){
        fact *= j
    }
    return fact
}

console.log(factorial(7))