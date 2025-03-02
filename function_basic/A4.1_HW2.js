console.log("A4.1_HW2")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")
function warnUser(userName){
    console.log("Hey there,"+userName+"! you are running out of storage.")
}
warnUser("Ravi")
console.log("---- ---- ----")

console.log("1.2")
function congratulationMessage(message){
    return "$$"+message+"$$"
}
console.log(congratulationMessage("Congratulations! You won a lottery."))
console.log("---- ---- ----")

console.log("1.3")
function concatenateKeywords(keyword1,keyword2){
    return keyword1 + "-" + keyword2
}
console.log(concatenateKeywords("if","else"))
console.log("---- ---- ----")

console.log("1.4")
function tertiaryColors(color1,color2,color3,color4,color5,color6){
    let finalStr = "Six Tertiary color: "+color1+"-"+color2+", " + color3+"-"+color2+", "+color3+"-"+color4+", "+color5+"-"+color4+", "+color5+"-"+color6+", "+color1+"-"+color6
    return finalStr
}
console.log(tertiaryColors("Red","Orange","Yellow","Green" ,"Blue", "Violate"))
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
function decrementAge(age){
    return age - 10
}
console.log(decrementAge(35))
console.log("---- ---- ----")

console.log("2.2")
function getReminder(num1, num2){
    return num1 % num2
}
console.log(getReminder(10,3))
console.log("---- ---- ----")

console.log("2.3")
function calculateTotalPrice(price,quantity){
    return price*quantity
}
console.log(calculateTotalPrice(120,10))
console.log("---- ---- ----")

console.log("2.4")
function calculateTotalAmount(price1,price2,quantity1,quantity2){
    return (price1*quantity1)+(price2*quantity2)
}
console.log(calculateTotalAmount(120,150,10,15))
