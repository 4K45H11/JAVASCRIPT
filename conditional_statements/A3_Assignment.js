console.log("A3_Assignment")
console.log("---- ---- ----")

let salary = 50000
let sideHustles = 10000
let groceries = 5000
let utilities = 2000
let rent = 20000
let transportation = 3000

let totalIncome = salary + sideHustles
let totalExpense = groceries + utilities + rent + transportation
let budgetSurplusDeficite = totalIncome - totalExpense

//budget status

let budgetStatus = ""
if(budgetSurplusDeficite >= 0)
{
    budgetStatus = "Congratulations! You have budget surplus."
}
else budgetStatus = "Ops! You have budget deficite."

//spending insights

let spendingInsights = ""
if(totalExpense <= 10000)
{
    spendingInsights = "Great Job! You have maintained a low expense level."
}
else if(totalExpense >= 10000 && totalExpense <= 20000)
{
    spendingInsights = "Your expenses are moderate.Look for opportunities to reduce spending on unnecessary spending."
}
else spendingInsights = "Your expenses are quite high.It is essential to analyze your spending habits and make necessary adjustments."

//budget tips

let budgetTips = ""
if(budgetSurplusDeficite >= 10000)
{
    budgetTips = "You have significant budget surplus. Consider allocating surplus towards savings or debt repayment."
}
else if(budgetSurplusDeficite < 10000 && budgetSurplusDeficite >= -10000)
{
    budgetTips = "Your budget is relatively balanced. Focus on maintaining your current financial habits."
}
else budgetTips = "You have a budget deficite. Evaluate your expenses and identify areas where you can cut back."

//printing values

console.log("Monthly Budget Analysis Report")
console.log("-------------------------------")
console.log("Total Income: ",totalIncome)
console.log("Total Expenses: ",totalExpense)
console.log("Budget Surplus/Deficite: ",budgetSurplusDeficite,"\n")
console.log("Budget Status: ",budgetStatus)
console.log("\nSpending Insights: \n",spendingInsights)
console.log("\nBudget Management Tips: \n",budgetTips)
