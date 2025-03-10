console.log("A5.6_HW1")
console.log("---- ---- ----")
const viratKohliRuns = [82, 120, 45, 66, 102, 55, 91, 76, 115, 42]

console.log("1.1")
console.log("Runs that are divisible by 3:")

for(let i = 0; i<viratKohliRuns.length;i++){
    if(viratKohliRuns[i]%3 === 0)console.log(viratKohliRuns[i])
}
console.log("---- ---- ----")

console.log("1.2")
console.log("Runs that are divisible by 5:")

for(let i = 0; i<viratKohliRuns.length;i++){
    if(viratKohliRuns[i]%5 === 0)console.log(viratKohliRuns[i])
}
console.log("---- ---- ----")

console.log("1.3")
let runsDivisibleBy2 = []
for(let i = 0; i<viratKohliRuns.length;i++){
    if(viratKohliRuns[i]%2 === 0)runsDivisibleBy2.push(viratKohliRuns[i])
}
console.log(runsDivisibleBy2)
console.log("---- ---- ----")

console.log("1.4")
let runs = 0
for(let i = 0; i<viratKohliRuns.length; i++){
    runs+=viratKohliRuns[i]
}
console.log("Virat Kohli's total runs:",runs)
console.log("---- ---- ----")

console.log("1.5")
let oddRun = 0
let evenRun = 0
for(let i = 0; i<viratKohliRuns.length; i++){
    if(viratKohliRuns[i]%2 == 0) evenRun+=viratKohliRuns[i]
    else oddRun+=viratKohliRuns[i]
}
console.log("Sum of odd runs scored: ",oddRun)
console.log("Sum of even runs scored: ",evenRun)