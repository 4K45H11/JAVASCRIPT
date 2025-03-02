console.log("4.3_HW1")
console.log("---- ---- ----")

let day1Burnt = 400
let day2Burnt = 450
let day3Burnt = 300
let day4Burnt = 500
let baseCalorieBurn = 1500

let day1Intake = 1500
let day2Intake = 1800
let day3Intake = 1600
let day4Intake = 2000

console.log("Exercise 1")
console.log("---- ---- ----")
function calculateSurplusDeficite(day,dayBurnt,dayIntake,baseCalorieBurn){
    let res=  dayBurnt-(dayIntake+baseCalorieBurn)
    if(res<0) console.log(day+": Deficite: "+res)
    else console.log(day+": Surplus: "+res)
}
calculateSurplusDeficite("Day 1",day1Burnt,day1Intake,baseCalorieBurn)
calculateSurplusDeficite("Day 2",day2Burnt,day2Intake,baseCalorieBurn)
calculateSurplusDeficite("Day 3",day3Burnt,day3Intake,baseCalorieBurn)
calculateSurplusDeficite("Day 4",day4Burnt,day4Intake,baseCalorieBurn)
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")
function totalBurnt(){
    return day1Burnt + day2Burnt + day3Burnt + day4Burnt
}
console.log("Total Calories Burnt:",totalBurnt())
console.log("---- ---- ----")

console.log("Exercise 3")
console.log("---- ---- ----")

function totalIntake(){
    return day1Intake + day2Intake + day3Intake + day4Intake
}
console.log("Total Calories Intake:",totalIntake())
console.log("---- ---- ----")

console.log("Exercise 4")
console.log("---- ---- ----")

function totalSurplus(totalBurnt,totalIntake,baseCalorieBurn){
    return totalBurnt - (totalIntake + (4*baseCalorieBurn))
}
console.log("Total Surplus/Deficit: ",totalSurplus(totalBurnt(),totalIntake(),baseCalorieBurn))
console.log("---- ---- ----")

console.log("Exercise 5")
console.log("---- ---- ----")

function getWeeklySummary(totalBurnt,totalIntake,totalSurplus){
    let standingGoalAwards = ""
    if(totalBurnt>= 1000) standingGoalAwards = "Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!"
    else if(totalBurnt < 1000) standingGoalAwards = "No Award yet"
    console.log("Weekly Summary:\n"+"Total Calories Burnt: "+totalBurnt+"\n"+"Total Calories Intake: "+totalIntake+"\n"+"Total Surplus/Deficite: "+totalSurplus)

}
getWeeklySummary(totalBurnt(),totalIntake(),totalSurplus(totalBurnt(),totalIntake(),baseCalorieBurn))
