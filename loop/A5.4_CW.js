console.log("A5.4_CW")
console.log("---- ---- ----")

console.log("1.1")
function sumUpto(n){
    let sum = 0;
    for(let i = 1; i<= n; i++){
        sum = sum+i
    }
    return sum;
}

console.log(sumUpto(5))

console.log("---- ---- ----")
console.log("1.2")
function sumOfOddNo(n){
    let sum = 0
    for(let i = 1; i<= n; i++){
        if(i%2 != 0) sum+=i
    }
    return sum
}
console.log(sumOfOddNo(7))
console.log("---- ---- ----")

console.log("1.3")
console.log("---- ---- ----")

function sumDivisibleByThreeandSevenUptoN(n){
    let sumThree = 0
    let sumSeven = 0
    for(let i = 1; i<=n; i++){
        if(i%3 == 0) sumThree +=i

        if(i%7 == 0) sumSeven +=i
    }

    console.log("Sum of numbers divisible by 3:",sumThree)
    console.log("Sum of numbers divisible by 7:",sumSeven)
}
sumDivisibleByThreeandSevenUptoN(21)

console.log("---- ---- ----")

console.log("1.4")
console.log("---- ---- ----")
function factorialN(n){
    let fact = 1;
    for(let i = 1; i<= n; i++){
        fact *= i
    }
    return fact;
}
console.log(factorialN(5))