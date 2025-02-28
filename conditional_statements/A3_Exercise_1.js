console.log("A3_Exercise_1")
console.log("---- ---- ----")

let rahulSalesTarget = 100
let priyaSalesTarget = 200
let amitSalesTarget = 150

let rahulActualSales = 85
let priyaActualSales = 180
let amitActualSales = 120

let rahulSalesPercentage = (rahulActualSales/rahulSalesTarget) * 100
let priyaSalesPercentage = (priyaActualSales/priyaSalesTarget) * 100
let amitSalesPercentage = (amitActualSales/amitSalesTarget) * 100

//rahul evaluation
let rahulPerformence = ""
let rahulBonus = 0
if(rahulSalesPercentage >= 90)
{
    rahulPerformence = "High Performer"
    rahulBonus = 0.2
}
else if(rahulSalesPercentage >=70)
{
    rahulPerformence = "Average Performer"
    rahulBonus = 0.1
}
else 
{
    rahulPerformence = "Low Performer"
}

//priya evaluation
let priyaPerformence = ""
let priyaBonus = 0
if(priyaSalesPercentage >= 90)
{
    priyaPerformence = "High Performer"
    priyaBonus = 0.2
}
else if(priyaSalesPercentage >=70)
{
    priyaPerformence = "Average Performer"
    priyaBonus = 0.1
}
else 
{
    priyaPerformence = "Low Performer"
}

//amit evaluation
let amitPerformence =""
let amitBonus = 0
if(amitSalesPercentage >= 90)
{
    amitPerformence = "High Performer"
    amitBonus = 0.2
}
else if(amitSalesPercentage >=70)
{
    amitPerformence = "Average Performer"
    amitBonus = 0.1
}
else 
{
    amitPerformence = "Low Performer"
}

let rahulBonusAmount = rahulBonus * rahulActualSales
let priyaBonusAmount = priyaBonus * priyaActualSales
let amitBonusAmount = amitBonus * amitActualSales

let rahulSalesReport = "Rahul"+"\nSales Target: "+rahulSalesTarget+" units"+"\nUnits Sold: "+rahulActualSales+" units"+"\nSales Percentage: "+rahulSalesPercentage+"%"+"\nPerformence Category: "+rahulPerformence+"\nBonus Amount: "+rahulBonusAmount+" units"
let priyaSalesReport = "Priya"+"\nSales Target: "+priyaSalesTarget+" units"+"\nUnits Sold: "+priyaActualSales+" units"+"\nSales Percentage: "+priyaSalesPercentage+"%"+"\nPerformence Category: "+priyaPerformence+"\nBonus Amount: "+priyaBonusAmount+" units"
let amitSalesReport = "amit"+"\nSales Target: "+amitSalesTarget+" units"+"\nUnits Sold: "+amitActualSales+" units"+"\nSales Percentage: "+amitSalesPercentage+"%"+"\nPerformence Category: "+amitPerformence+"\nBonus Amount: "+amitBonusAmount+" units"

console.log(rahulSalesReport,"\n")
console.log(priyaSalesReport,"\n")
console.log(amitSalesReport)


