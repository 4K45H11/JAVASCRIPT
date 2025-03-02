console.log("A4.2_HW1")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")
function checkAge(age){
    if(age>=18) console.log("You are eligible for voting")
    else console.log("You are not eligible.")
}
checkAge(21)
console.log("---- ---- ----")

console.log("1.2")
function compareNumbers(num1,num2){
    if(num1>num2) console.log(num1,"is greater than",num2)
    else console.log(num2,"is greater than",num1)
}
compareNumbers(10,5)
console.log("---- ---- ----")

console.log("1.3")
function shippingCoast(totalWeight,baseCost,country){
    if(totalWeight<=1 && country == "local") return baseCost+10
    else if(totalWeight==1 && country == "international") return baseCost+20

    return baseCost
}
console.log(shippingCoast(0.5,50,"local"))