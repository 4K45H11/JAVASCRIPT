console.log("A5.2_CW")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")
console.log("---- ---- ----")
for(let j = 10; j>=1; j--){
    console.log(j)
}

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")
for(j = 10; j>=1; j--){
    let res = j*7
    console.log("7 * "+j+" = "+res)
}
console.log("---- ---- ----")

console.log("1.3")
console.log("---- ---- ----")

for(let i = 12; i>=2; i-=3){
    console.log(i)
}
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
console.log("---- ---- ----")

function printNumber(n){
    for(let i = 1; i<= n; i++){
        console.log(i)
    }
}
printNumber(5)
console.log("---- ---- ----")

console.log("2.2")
console.log("---- ---- ----")

function printOddNumber(n){
    for(let i = 2; i<=n; i++){
        if(i%2!==0) console.log(i)
    }
}
printOddNumber(10)
console.log("---- ---- ----")

console.log("2.3")
console.log("---- ---- ----")

function printNumberDivisibleBy5(n){
    for(let i = 1; i<=n; i++){
        if(i%5==0) console.log(i)
    }
}
printNumberDivisibleBy5(20)