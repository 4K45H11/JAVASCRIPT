console.log("A3_Exercise_2")
console.log("---- ---- ----")

let day1Burnt = 400
let day2Burnt = 450
let day3Burnt = 300
let day4Burnt = 500
let day5Burnt = 350

let day1Intake = 1500
let day2Intake = 1800
let day3Intake = 1600
let day4Intake = 2000
let day5Intake = 1700

let baseCalorie = 1500
let day1Surplus = day1Burnt - (day1Intake + baseCalorie)
let day2Surplus = day2Burnt - (day2Intake + baseCalorie)
let day3Surplus = day3Burnt - (day3Intake + baseCalorie)
let day4Surplus = day4Burnt - (day4Intake + baseCalorie)
let day5Surplus = day5Burnt - (day5Intake + baseCalorie)

let day1Result = "Surplus"
if(day1Surplus <0) day1Result = "Deficit"
let day2Result = "Surplus"
if(day2Surplus <0) day2Result = "Deficit"
let day3Result = "Surplus"
if(day3Surplus <0) day3Result = "Deficit"
let day4Result = "Surplus"
if(day4Surplus <0) day4Result = "Deficit"
let day5Result = "Surplus"
if(day5Surplus <0) day5Result = "Deficit"

//Daily reports

console.log("Daily Reports:")
let day1 = "Day1: " + "Surplus/Deficite: " + day1Surplus +" "+ "(" + day1Result + ")"
console.log(day1)+"\n"
let day2 = "Day2: " + "Surplus/Deficite: " + day2Surplus +" "+ "(" + day2Result + ")"
console.log(day2)+"\n"
let day3 = "Day3: " + "Surplus/Deficite: " + day3Surplus +" "+ "(" + day3Result + ")"
console.log(day3)+"\n"
let day4 = "Day4: " + "Surplus/Deficite: " + day4Surplus +" "+ "(" + day4Result + ")"
console.log(day4)+"\n"
let day5 = "Day5: " + "Surplus/Deficite: " + day5Surplus +" "+ "(" + day5Result + ")"
console.log(day5)

//weekly reports

let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt
let totalIntake = day1Intake + day2Intake + day3Intake + day4Intake + day5Intake
let totalSurplus = totalBurnt -(totalIntake + (1500 * 5))

let weeklySummary = "\nWeekly Summary:\n"
weeklySummary = weeklySummary + "Total Calories Burnt: " + totalBurnt + " calories" + "\nTotal Calories Intake: "+ totalIntake +" calories" + "\nTotal Surplus/Deficite: " + totalSurplus + " calories"


//Awards

let standingGoalAwards = ""
if(totalBurnt >= 1000)
{
    standingGoalAwards = "Standing Goal Award: Congratulations! You have kept moving throughout.Keep it up!"
}
else
{
    standingGoalAwards = "No Award yet."
}

weeklySummary = weeklySummary + "\n" + "\nAward:\n" + standingGoalAwards
console.log(weeklySummary)
