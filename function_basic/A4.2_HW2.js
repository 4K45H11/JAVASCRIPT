console.log("A4.2_HW2")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")
function checkEvenOdd(num){
    if(num%2==0) console.log("The number is even")
    else console.log("The number is odd")    
}
checkEvenOdd(9)
console.log("---- ---- ----")

console.log("1.2")
function checkGrade(score,passingScore){
    if(score>=passingScore) console.log("Congratulations! you have passed.")
    else console.log("Sorry! you have to give exam again.")
}
checkGrade(85,60)
console.log("---- ---- ----")

console.log("1.3")
function calculateAllowence(age,isStudent,baseAllowence){
    if(age<18 && isStudent) return baseAllowence+=100
    else if(age>=18 && age<=25 && isStudent) return baseAllowence+=50
    else return baseAllowence
}
console.log(calculateAllowence(16,true,500))