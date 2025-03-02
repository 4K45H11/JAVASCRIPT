console.log("A4.1_HW1")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")
function greetUser(){
    console.log("Good Morning!")
}
greetUser();

console.log("1.2")
function welcomeMessage(userName){
    console.log("Hey there, " + userName + "! We are thrilled to have you.")
}
welcomeMessage("John")

console.log("1.3")
function formatMessage(message){
    return "*"+message+"*"
}
console.log(formatMessage("Learning functions with return in javaScript."))

console.log("1.4")
function concatenateStrings(string1,string2){
    return string1 +" "+ string2
}
console.log(concatenateStrings("Blue","Bull"))

console.log("1.5")
function addStrings(color1,color2,color3){
    let str = "The primary colors are: "+color1+" "+color2+" "+color3
    return str
}
console.log(addStrings("Red,","Yellow,","Blue."))

console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
function incrementAgeBy5(num){
    return num+5;
}
console.log(incrementAgeBy5(25))

console.log("2.2")
function calculateProduct(num1,num2){
    let product = num1*num2
    return product
}
console.log(calculateProduct(10,30))

console.log("2.3")
function calculateDiscount(price,discount){
    return price*(discount/100);
}
console.log(calculateDiscount(1000,20))

console.log("2.4")
function calculateNetSalary(baseSalary,performenceBonus){
    return baseSalary + performenceBonus
}
console.log(calculateNetSalary(290000,20000))