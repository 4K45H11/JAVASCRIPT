console.log("A5.6_HW2")
console.log("---- ---- ----")

const srkEarnings = [12500020, 15000465, 950000302, 201800006, 
18000000, 11000000, 900054608, 130050087, 140000000, 160000109]

console.log("1.1")

for(let i = 0; i<srkEarnings.length; i++){
    if(srkEarnings[i]%3 == 0) console.log(srkEarnings[i])
}
console.log("---- ---- ----")

console.log("1.2")

for(let i = 0; i<srkEarnings.length; i++){
    if(srkEarnings[i]%5 == 0) console.log(srkEarnings[i])
}
console.log("---- ---- ----")

console.log("1.3")

let earningDivByTwo = []
for(let i = 0; i<srkEarnings.length; i++){
    if(srkEarnings[i]%2 == 0) earningDivByTwo.push(srkEarnings[i])
}
console.log("SRK earings divided by 2:",earningDivByTwo)
console.log("---- ---- ----")

console.log("1.4")

let sum = 0
for(let i = 0; i<srkEarnings.length; i++){
    sum+=srkEarnings[i]
}
console.log("Total earnings of Shahrukh Khan:",sum)
console.log("---- ---- ----")

console.log("1.5")

let oddSum = 0
let evenSum = 0
for(let i = 0; i<srkEarnings.length; i++){
    if(srkEarnings[i]%2 == 0) evenSum+=srkEarnings[i]
    else oddSum+=srkEarnings[i]
}
console.log("Sum of odd earnings:",oddSum)
console.log("Sum of even earnings:",evenSum)