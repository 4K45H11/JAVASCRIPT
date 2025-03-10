console.log("A5.5_CW")
console.log("---- ---- ----")

//arrays
let cities = ["New York","London","Tokyo"] //arrays syntax
console.log("1.1")
console.log(cities)
console.log("---- ---- ----")

console.log("1.2")
console.log(cities[1])

console.log("---- ---- ----")
console.log("1.3")
console.log("Number of cities",cities.length) //length of an array
console.log("---- ---- ----")

console.log("1.4")
console.log(cities[cities.length - 1])
console.log("---- ---- ----")

console.log("1.5")
for(let i = 0; i<cities.length; i++){
    console.log(cities[i])
}
console.log("---- ---- ----")

console.log("1.6")
cities.push("Paris") //get pushed at the end of the array
console.log("element pused ("+cities[cities.length-1]+")")
console.log("---- ---- ----")

console.log("1.7")
console.log("Updated number of cities:",cities.length)