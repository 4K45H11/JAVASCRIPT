console.log("A4.1_CW");
console.log("---- ---- ----")

console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")

function greetUser(){
    console.log("Welcome to our Website!")
}
greetUser();

console.log("1.2")
function greetPerson(name){
    console.log("Hello, "+name+"! Welcome to our website!")
}
greetPerson("Chandrasekhar");

console.log("1.3")
function formatMessage(message){
    return "*"+message+"*"
}
console.log(formatMessage("Hello, World!"));

console.log("1.4")
function combineStrings(string1,string2){
    return string1 + " " + string2
}

console.log(combineStrings("Hello","World"))

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
function incrementAge(age){
    age+=1
    return age
}

console.log(incrementAge(22))

console.log("2.2")
function calculateSquare(number){
    number = number*number
    return number;
}
console.log(calculateSquare(2));

console.log("2.3")
function calculateDiscountedPrice(price,discountPercentage){
    price = price - (price*discountPercentage)/100
    return price
}
console.log(calculateDiscountedPrice(500,5));

console.log("2.4")
function calculateSalary(hoursWorked,hourlyRate){
    let totalSalary = hourlyRate * hoursWorked
    return totalSalary;
}
console.log(calculateSalary(24,500))