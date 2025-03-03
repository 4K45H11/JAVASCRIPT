console.log("A5.2_HW1")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")
for(let i = 20; i>= 10; i--){
    console.log(i)
}
console.log("---- ---- ----")

console.log("1.2")
console.log("---- ---- ----")
for(i = 10; i>=1; i--){
    let res = i*6
    console.log("6 * "+i+" = "+res)
}
console.log("---- ---- ----")

console.log("1.3")
console.log("---- ---- ----")

for(let i = 100; i>=10; i-=10){
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
printNumber(8)
console.log("---- ---- ----")

console.log("2.2")
console.log("---- ---- ----")

function printEvenNumber(n){
    for(let i = 2; i<=n; i++){
        if(i%2==0) console.log(i)
    }
}
printEvenNumber(15)
console.log("---- ---- ----")

console.log("2.3")
console.log("---- ---- ----")

function divisibility(n){
    for(let i = 1; i<= n; i++){
        if(i%10 == 0) console.log(i) // lcm(5,10) = 10
    }
}
divisibility(50)