console.log("A3.3_HW_2")
console.log("---- ---- ----")

let goalAmount = 12000

let currentSavingMonth1 = 3000
let currentSavingMonth2 = 5000
let currentSavingMonth3 = 8000

let savingsContributionsMonth1 = 1000
let savingsContributionsMonth2 = 1500
let savingsContributionsMonth3 = 2000

let totalCurrentSavings = currentSavingMonth1 + currentSavingMonth2 + currentSavingMonth3
let totalSavingsContributions = savingsContributionsMonth1 + savingsContributionsMonth2 + savingsContributionsMonth3

let quarterlyGoalAmount = goalAmount/4
let percentageAchieved = (totalCurrentSavings/quarterlyGoalAmount) * 100

//Projected Timeline
let projectedTimeLine = ""
if(percentageAchieved >= 100)
{
    projectedTimeLine = "Congratulations! You have already achieved your quarterly savings goal!"
}
else if(percentageAchieved >= 75)
{
    projectTimeLine = "At your current savings rate,you are on track to reach your quarterly goal by the end of the quarter"
}
else projectedTimeLine = "Based on your current savings rate,it may take some additional time to reach your quarterly goal.Consider increasing your savings contributions."

//savings Tips
let savingsTips = ""
if(percentageAchieved >= 80)
{
    savingsTips = "Great Job! you are making excellent progress towards your quarterly goal.Keep up the good work!"
}
else if(percentageAchieved >= 50)
{
    savingsTips = "You are halfway there!Try to find additional ways to save money and increase your savings rate."
}
else savingsTips = "To reach your quarterly savings goal sooner consider cutting back of non-essential expenses and findig opportunities to save more."

console.log("Quarterly Savings Report")
console.log("-------------------------")
console.log("Goal Amount: ",goalAmount)
console.log("Quarterly Goal Amount: ",quarterlyGoalAmount)
console.log("Total Current Savings: ",totalCurrentSavings)
console.log("Total Saving Contributions: ",totalSavingsContributions)
console.log("Percentage Achieved: ",percentageAchieved,"\n")
console.log(projectedTimeLine,"\n")
console.log(savingsTips)

