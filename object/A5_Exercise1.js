console.log("A5_Exercise1")
console.log("---- ---- ----")

const salesPersonsData = [
    {
        name:"Rajesh",
        location:"Mumbai",
        q1:120000,
        q2:145000,
        q3:130000,
        q4:155000
    },
    {
        name:"Sneha",
        location:"Delhi",
        q1:90000,
        q2:110000,
        q3:95000,
        q4:120000 
    },
    {
        name:"Divya",
        location:"Chennai",
        q1:95000,
        q2:120000,
        q3:110000,
        q4:130000
    },
    {
        name:"Arun",
        location:"Chennai",
        q1:100000,
        q2:125000,
        q3:115000,
        q4:135000
    },
    {
        name:"Kavita",
        location:"Kolkata",
        q1:85000,
        q2:95000,
        q3:88000,
        q4:105000
    },
    {
        name:"Sanjay",
        location:"Mumbai",
        q1:110000,
        q2:135000,
        q3:120000,
        q4:140000
    }
]

console.log("1.1")
console.log(salesPersonsData)
console.log("---- ---- ----")

console.log("1.2")
let totalQuarter = 4
for(let i = 0; i<salesPersonsData.length; i++){
    let totalSales = (salesPersonsData[i].q1+salesPersonsData[i].q2+salesPersonsData[i].q3+salesPersonsData[i].q4)
    let avgSales = totalSales/totalQuarter

    salesPersonsData[i].totalSales = totalSales
    salesPersonsData[i].avgSales = avgSales
}
console.log("---- ---- ----")

console.log("1.3")

function generatePerformenceReport(data){
    let avg = data.avgSales
    if(avg >= 140000) return "Top Performer"
    else if(avg >= 120000) return "Medium Performer"
    else return "Low Performer"
}

function generateSalesReport(){
    let report = "===== Performence Report =====\n"
   for(let i = 0; i<salesPersonsData.length; i++){
    
    report += "Name: "+salesPersonsData[i].name+"\nLocation: "+salesPersonsData[i].location+"\nTotal Sales: "+salesPersonsData[i].totalSales+"\nAverage Sales: "+salesPersonsData[i].avgSales
    +"\nPerformence Grade: "+generatePerformenceReport(salesPersonsData[i])+"\n------"

    console.log(report)
    report = ""
   } 
    
}

generateSalesReport()
console.log("---- ---- ----")

console.log("1.4")

function getBestSalesMan(data){
    let best = data[0]
    for(let i = 0; i<data.length; i++){
        if(best.totalSales < data[i].totalSales) best = data[i]
    }
    return best
}
function getTotalTopPerformer(data){
    let count = 0
    for(let i = 0; i<data.length; i++){
        if(data[i].avgSales >= 140000) count++
    }
    return count
}

function getQuarterlyAverage(data,q){
    let totalQSales = 0
    let quarters = 4
    for(let i = 0; i<data.length; i++){
        totalQSales += data[i][q]
    }
    return (totalQSales/quarters)
}
function getTotalYearlySales(data){
    let total = 0
    for(let i = 0; i<data.length; i++){
        total += data[i].totalSales
    }
    return total
}
function getTotalAvgYearlySales(data){
    let total = 0
    for(let i = 0; i<data.length; i++){
        total += data[i].avgSales
    }
    return total
}

function getAnualSalesReport(salesPersonsData){

    let bestSalesMan = getBestSalesMan(salesPersonsData)
    let totalTopPerformer = getTotalTopPerformer(salesPersonsData)
    let q1SalesAverage = getQuarterlyAverage(salesPersonsData,"q1")
    let q2SalesAverage = getQuarterlyAverage(salesPersonsData,"q2")
    let q3SalesAverage = getQuarterlyAverage(salesPersonsData,"q3")
    let q4SalesAverage = getQuarterlyAverage(salesPersonsData,"q4")
    let totalYearlySales = getTotalYearlySales(salesPersonsData)
    let totalAvgYearlySales = getTotalAvgYearlySales(salesPersonsData) /**or, add q1,q2,q3,q4 sales average */

    let report = "===== Annual Sales Report ====="
    report += "\n-----"
    report += "\nBest Performer"
    report += "\n-----"
    report += "\nName: "+bestSalesMan.name
    report += "\nLocation: "+bestSalesMan.location
    report += "\nTotal Sales by Best Performer: "+bestSalesMan.totalSales+"\n-----"
    report +="\nTop Performers:\n-----"
    report +="\nTotal No. of top Performers: "+totalTopPerformer+"\n"
    for(let i = 0; i<salesPersonsData.length; i++){
        if(salesPersonsData[i].avgSales >= 140000){
            report += "Name: "+salesPersonsData[i].name
            report += "Total Sales: "+salesPersonsData[i].totalSales
        }
    }
    report += "\n-----\n"
    report += "Sales Averages"
    report += "\n-----"

    report += "\nQ1 Average Sales: "+q1SalesAverage
    report += "\nQ2 Average Sales: "+q2SalesAverage
    report += "\nQ3 Average Sales: "+q3SalesAverage
    report += "\nQ4 Average Sales: "+q4SalesAverage

    report += "\n-----"
    report += "\nTotal Sales: "+totalYearlySales
    report += "\nTotal Average Sales: "+totalAvgYearlySales
    report += "\n-----"

    return report
    
}


console.log(getAnualSalesReport(salesPersonsData))
