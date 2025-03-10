console.log("A5.6_CW")
console.log("---- ---- ----")

console.log("Exercise 1")
console.log("---- ---- ----")

const number = [1,2,3,4,5,6,7,8,9,10]

console.log("1.1")
console.log("Numbers that are divisible by 3:")

for(let i = 0; i<number.length;i++){
    if(number[i]%3 === 0)console.log(number[i])
}
console.log("---- ---- ----")

console.log("1.2")
console.log("Numbers that are divisible by 5:")

for(let i = 0; i<number.length;i++){
    if(number[i]%5 === 0)console.log(number[i])
}
console.log("---- ---- ----")

console.log("1.3")
let numDivisibleBy2 = []
for(let i = 0; i<number.length;i++){
    if(number[i]%2 === 0)numDivisibleBy2.push(number[i])
}
console.log(numDivisibleBy2)
console.log("---- ---- ----")

console.log("1.4")
let sum = 0
for(let i = 0; i<number.length; i++){
    sum+=number[i]
}
console.log("Sum of all numbers:",sum)
console.log("---- ---- ----")

console.log("1.5")
let oddSum = 0
let evenSum = 0
for(let j = 0; j<number.length; j++){
    if(number[j]%2 == 0) evenSum+=number[j]
    else oddSum+=number[j]
}
console.log("Sum of odd numbers: ",oddSum)
console.log("Sum of even numbers: ",evenSum)