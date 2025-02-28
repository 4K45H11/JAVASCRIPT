console.log("A3.3_HW_1")
console.log("---- ---- ----")

let employee1Name = "Rahul"
let employee1Grade = 90
let employee1HoursWorked = 27
let employee1Salary = 45000
let employee1VacationLeaveTaken = 2
let employee1SickLeaveTaken = 1

let employee1Bonus = 0
if(employee1HoursWorked > 30 && employee1Grade > 75)
{
    employee1Bonus = 0.2
}
else if(employee1HoursWorked > 25 && employee1Grade > 95)
{
    employee1Bonus = 0.15
}
else if(employee1HoursWorked > 25 && employee1Grade > 85)
{
    employee1Bonus = 0.1
}
let employee1PFDeduction = 2500
if(employee1Salary > 35000) employee1PFDeduction = employee1Salary * 0.125

let employee1TDSDeduction = 199
if(employee1Salary > 40000) employee1TDSDeduction = employee1Salary * 0.1

let employee1VacationLeaveDeduction = (employee1Salary/30) * employee1VacationLeaveTaken
let employee1SickLeaveDeduction = (employee1Salary/30) * employee1SickLeaveTaken

let employee1NetSalary = (employee1Salary + (employee1Bonus * employee1Salary))-(employee1PFDeduction + employee1TDSDeduction + employee1SickLeaveDeduction + employee1VacationLeaveDeduction)

let employee1PaySlip = "Employee Name: "+ employee1Name + "\nGrade: " + employee1Grade + "\nHours Worked: " + employee1HoursWorked + "\nSalary: " + employee1Salary + "\nBonus: " + employee1Bonus + "\nPF Deduction: " + employee1PFDeduction + "\nTDS Deduction: " + employee1TDSDeduction + "\nVacation Deduction: " + employee1VacationLeaveDeduction + "\nSick Deduction: " + employee1SickLeaveDeduction + "\nNet Salary: " + employee1NetSalary

console.log(employee1PaySlip)

let employee2Name = "Narendra"
let employee2Grade = 95
let employee2HoursWorked = 37
let employee2Salary = 98000
let employee2VacationLeaveTaken = 4
let employee2SickLeaveTaken = 0

let employee2Bonus = 0
if(employee2HoursWorked > 30 && employee2Grade > 75)
{
    employee2Bonus = 0.2
}
else if(employee2HoursWorked > 25 && employee2Grade > 95)
{
    employee1Bonus = 0.15
}
else if(employee2HoursWorked > 25 && employee2Grade > 85)
{
    employee1Bonus = 0.1
}
let employee2PFDeduction = 2500
if(employee2Salary > 35000) employee2PFDeduction = employee2Salary * 0.125

let employee2TDSDeduction = 199
if(employee2Salary > 40000) employee2TDSDeduction = employee2Salary * 0.1

let employee2VacationLeaveDeduction = (employee2Salary/30) * employee2VacationLeaveTaken
let employee2SickLeaveDeduction = (employee2Salary/30) * employee2SickLeaveTaken

let employee2NetSalary = (employee2Salary + (employee2Bonus * employee2Salary))-(employee2PFDeduction + employee2TDSDeduction + employee2SickLeaveDeduction + employee2VacationLeaveDeduction)

let employee2PaySlip = "Employee Name: "+ employee2Name + "\nGrade: " + employee2Grade + "\nHours Worked: " + employee2HoursWorked + "\nSalary: " + employee2Salary + "\nBonus: " + employee2Bonus + "\nPF Deduction: " + employee2PFDeduction + "\nTDS Deduction: " + employee2TDSDeduction + "\nVacation Deduction: " + employee2VacationLeaveDeduction + "\nSick Deduction: " + employee2SickLeaveDeduction + "\nNet Salary: " + employee2NetSalary

console.log("\n"+employee2PaySlip)

let employee3Name = "Priyanka"
let employee3Grade = 70
let employee3HoursWorked = 18
let employee3Salary = 55000
let employee3VacationLeaveTaken = 1
let employee3SickLeaveTaken = 10

let employee3Bonus = 0
if(employee3HoursWorked > 30 && employee3Grade > 75)
{
    employee3Bonus = 0.2
}
else if(employee3HoursWorked > 25 && employee3Grade > 95)
{
    employee3Bonus = 0.15
}
else if(employee3HoursWorked > 25 && employee3Grade > 85)
{
    employee3Bonus = 0.1
}
let employee3PFDeduction = 2500
if(employee3Salary > 35000) employee3PFDeduction = employee3Salary * 0.125

let employee3TDSDeduction = 199
if(employee3Salary > 40000) employee3TDSDeduction = employee3Salary * 0.1

let employee3VacationLeaveDeduction = (employee3Salary/30) * employee3VacationLeaveTaken
let employee3SickLeaveDeduction = (employee3Salary/30) * employee3SickLeaveTaken

let employee3NetSalary = (employee3Salary + (employee3Bonus * employee3Salary))-(employee3PFDeduction + employee3TDSDeduction + employee3SickLeaveDeduction + employee3VacationLeaveDeduction)

let employee3PaySlip = "Employee Name: "+ employee3Name + "\nGrade: " + employee3Grade + "\nHours Worked: " + employee3HoursWorked + "\nSalary: " + employee3Salary + "\nBonus: " + employee3Bonus + "\nPF Deduction: " + employee3PFDeduction + "\nTDS Deduction: " + employee3TDSDeduction + "\nVacation Deduction: " + employee3VacationLeaveDeduction + "\nSick Deduction: " + employee3SickLeaveDeduction + "\nNet Salary: " + employee3NetSalary

console.log("\n"+employee3PaySlip)