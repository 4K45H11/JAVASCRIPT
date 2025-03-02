console.log("A4.3_CW")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

let hourlyRate = 500
let hoursWorked = 40

function calculateGrossPay(rate,worked){
    return rate*worked
}
let grosspay = calculateGrossPay(hourlyRate,hoursWorked)
console.log("Gross Pay:",grosspay)
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")

let overtimeRate = 1.5
function calculateOvertimePay(hourlyRate,hoursWorked,overTimeRate){
    let overTimePay = 0
    if(hoursWorked > 40){
        let overTimeHours = hoursWorked-40
        overTimePay = overTimeHours * hourlyRate * overTimeRate
    }
    return overTimePay
}
let overTimePay = calculateOvertimePay(hourlyRate,hoursWorked,overtimeRate)
console.log("Overtime Pay:",overTimePay)
console.log("---- ---- ----")

console.log("Exercise 3")
console.log("---- ---- ----")

let taxRate = 0.2
let insurenceRate = 0.1
let retirementRate = 0.05

function calculateDeductions(grosspay,taxRate,insurenceRate,retirementRate){
    let taxAmount = grosspay*taxRate
    let insurenceAmount = grosspay*insurenceRate
    let retirementAmount = grosspay*retirementRate
    return taxAmount + insurenceAmount + retirementAmount
}

let deductions = calculateDeductions(grosspay,taxRate,insurenceRate,retirementRate)
console.log("Deductions:",deductions)
console.log("---- ---- ----")

console.log("Exercise 4")
console.log("---- ---- ----")

function calculateNetPay(grosspay,overTimePay,deductions){
    return (grosspay+overTimePay)-deductions
}
let netPay = calculateNetPay(grosspay,overTimePay,deductions)
console.log("Net Pay:",netPay)
console.log("---- ---- ----")

console.log("Exercise 5")
console.log("---- ---- ----")

let performenceScore = 7
function calculateBonus(performenceScore){
    let bonus = 0
    if(performenceScore >= 8) bonus =10000
    else if(performenceScore >= 6) bonus = 5000
    else if(performenceScore >= 4) bonus = 2500
    
    return bonus
}

let bonusAmount = calculateBonus(performenceScore)
console.log("Bonus Amount: ",bonusAmount)
console.log("---- ---- ----")

console.log("Exercise 6")
console.log("---- ---- ----")

function generatePayStub(employeeName,hourlyRate,hoursWorked,overTimePay,grosspay,deductions,bonusAmount){
    let payStub = "Pay Stub For "+employeeName+"\n\n"+"Hourly Rate: "+hourlyRate+"\n"+"Hours Worked: "+hoursWorked+"\n"+"Gross Pay: "+grosspay+"\n"+"Overtime Pay: "+overTimePay+"\n"+"Deductions: "+deductions+"\n"+"Bonus: "+bonusAmount+"\n"+"Final Net Pay:"+(grosspay + overTimePay + bonusAmount-deductions)
    return payStub;
}
console.log(generatePayStub("rahul",hourlyRate,hoursWorked,overTimePay,grosspay,deductions,bonusAmount))