console.log("A5_Exercise2")
console.log("---- ---- ----")

console.log("1.1")
console.log("---- ---- ----")
const employeeData = [
    {
        name : "Rajesh Kumar",
        dept : "Marketing",
        hourlySalary : 250,
        week1Hours : 40,
        week2Hours : 42,
        week3Hours : 38,
        week4Hours : 39,
        bonusMultiplier : 0.65
    },
    {
        name : "Priya Gupta",
        dept : "Sales",
        hourlySalary : 220,
        week1Hours : 38,
        week2Hours : 40,
        week3Hours : 37,
        week4Hours : 41,
        bonusMultiplier : 0.5
    },
    {
        name : "Ankit Sharma",
        dept : "Finance",
        hourlySalary : 280,
        week1Hours : 35,
        week2Hours : 36,
        week3Hours : 39,
        week4Hours : 38,
        bonusMultiplier : 0.8
    },
    {
        name : "Ritu Singh",
        dept : "Operations",
        hourlySalary : 300,
        week1Hours : 42,
        week2Hours : 41,
        week3Hours : 43,
        week4Hours : 40,
        bonusMultiplier : 0.45
    },
    {
        name : "Rahul Verma",
        dept : "IT",
        hourlySalary : 260,
        week1Hours : 37,
        week2Hours : 39,
        week3Hours : 38,
        week4Hours : 36,
        bonusMultiplier : 0.7
    }

]

console.log(employeeData)
console.log("1.2")
console.log("---- ---- ----")
function getUpdatedObjectBytotalSalaryandBonus(employeeData){
    let bonusTheshold = 160
    for(let i = 0; i<employeeData.length; i++){
        let totalHours = (employeeData[i].week1Hours+employeeData[i].week2Hours+employeeData[i].week3Hours+employeeData[i].week4Hours)
        /*console.log(totalHours) --> debugging ,was having issue with the values due to missing out of putting [i] after employeeData, be concious.*/
        let totalSalary = totalHours*employeeData[i].hourlySalary

        let bonus = 0 /*be concious about the 'bonus' variable placing.*/
        if(totalHours > bonusTheshold){
            let bonusHours = totalHours -bonusTheshold
            bonus = bonusHours*employeeData[i].hourlySalary*employeeData[i].bonusMultiplier
        }
        employeeData[i].totalSalary = totalSalary 
        employeeData[i].bonus = bonus
    }
}
getUpdatedObjectBytotalSalaryandBonus(employeeData)

console.log(employeeData)
console.log("---- ---- ----")

console.log("1.3")

function generateEMployeePaySlip(employeeData){

    let report = "===== Employee Payslip ====="
    
    for(let i = 0; i<employeeData.length; i++){
        
        let totalHours = (employeeData[i].week1Hours+employeeData[i].week2Hours+employeeData[i].week3Hours+employeeData[i].week4Hours)

        report += "\nName: "+employeeData[i].name
        report += "\nDepartment: "+employeeData[i].dept
        report += "\nTotal Hours Worked: "+totalHours
        employeeData[i].totalHoursWorked = totalHours
        report += "\nTotal Salary: "+employeeData[i].totalSalary
        report += "\nBonus: "+employeeData[i].bonus
        report += "\n------"
    }

    return report 
}
let report = generateEMployeePaySlip(employeeData)
console.log(report)
console.log("---- ---- ----")

console.log("1.4")

function getMostPaidEmployee(data){
    let highest = data[0]
    for(let i = 0; i<data.length; i++){
        if(data[i].totalSalary > highest.totalSalary)highest = data[i]
    }
    return highest
}
function getTotalHours(data){
    let total = 0
    for(let i = 0; i<data.length; i++){
        total += data[i].totalHoursWorked
    }
    return total
}
function getAvgByWeek(week,data){
    let res = 0
    for(let i = 0; i<data.length; i++){
        res += data[i][week]
    }
    return res/data.length
}

function generateHumanResourceReport(employeeData){

    let mostPaidEmployee = getMostPaidEmployee(employeeData)
    let totalHoursWorkedByAllEmployee = getTotalHours(employeeData)
    let avgWeekOne = getAvgByWeek("week1Hours",employeeData)
    let avgWeekTwo = getAvgByWeek("week2Hours",employeeData)
    let avgWeekThree = getAvgByWeek("week3Hours",employeeData)
    let avgWeekFour = getAvgByWeek("week4Hours",employeeData)

    let report = "====== Human Resource Report ====="
    report += "\n------"
    report += "\nMost Paid Employee"
    report += "\n------"
    report += "\nName: "+mostPaidEmployee.name
    report += "\nDepartment: "+mostPaidEmployee.dept
    report += "\nTotal Hours Worked: "+mostPaidEmployee.totalHoursWorked
    report += "\nTotal Salary: "+mostPaidEmployee.totalSalary
    report += "\n-----"
    report += "\nCompany Average"
    report += "\n-----"
    report += "\nTotal Hours worked by All: "+totalHoursWorkedByAllEmployee
    report += "\nTotal Average hours of Company: "+totalHoursWorkedByAllEmployee/employeeData.length
    report += "\n-----"
    report += "\nTotal Average of Week One: "+avgWeekOne
    report += "\nTotal Average of Week Two: "+avgWeekTwo
    report += "\nTotal Average of Week Three: "+avgWeekThree
    report += "\nTotal Average of Week Four: "+avgWeekFour

    return report
}

console.log(generateHumanResourceReport(employeeData))