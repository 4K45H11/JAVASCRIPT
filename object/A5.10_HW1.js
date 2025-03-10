console.log("A5.10_HW1")
console.log("---- ---- ----")

console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")

const scoreDetails = [
    {
        name : "Virat",
        eden : 72,
        wankhede : 88,
        feroz : 45,
        chepuk : 74
    },
    {
        name : "Rohit",
        eden : 64,
        wankhede : 41,
        feroz : 68,
        chepuk : 34
    },
    {
        name : "Shikhar",
        eden : 54,
        wankhede : 38,
        feroz : 72,
        chepuk : 44
    },
    {
        name : "Rishabh",
        eden : 22,
        wankhede : 27,
        feroz : 34,
        chepuk : 51
    }

]

for(let i = 0; i<scoreDetails.length; i++){
    console.log("Crickter: "+scoreDetails[i].name+"\nEden Gardens: "+scoreDetails[i].eden+"\nWankhede Stadium: "+scoreDetails[i].wankhede+"\nFeroz Shah Kotla: "+scoreDetails[i].feroz+"\nChepauk: "+scoreDetails[i].chepuk+"\n")
}
console.log("---- ---- ----")
console.log("1.2")
const chinnaswamyStadiumScores = [54, 82, 49, 45]
for(let i = 0; i<scoreDetails.length; i++){
    scoreDetails[i].chinnaSwamy = chinnaswamyStadiumScores[i]
}
console.log(scoreDetails)
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
const KL_Rahul_Data = {
    name : "KL Rahul",
    eden : 34,
    wankhede : 56,
    feroz : 42,
    chepuk : 31,
    chinnaSwamy : 68
}
console.log("Kl Rahul's data: ",KL_Rahul_Data)
console.log("---- ---- ----")

console.log("2.2")
scoreDetails.push(KL_Rahul_Data)
console.log("Updated array: ",scoreDetails)
console.log("---- ---- ----")

console.log("2.3")
for(let i = 0; i<scoreDetails.length; i++){
    let total = (scoreDetails[i].eden + scoreDetails[i].wankhede + scoreDetails[i].feroz + scoreDetails[i].chepuk + scoreDetails[i].chinnaSwamy)

    scoreDetails[i].totalScore = total
}
console.log("Array with total runs: ",scoreDetails)
console.log("---- ---- ----")

console.log("2.4")
for(let i = 0; i<scoreDetails.length; i++){
    const noOfStadium = 5
    const average = scoreDetails[i].totalScore/noOfStadium
    scoreDetails[i].avgRuns = average
}
console.log("Player's Data: ",scoreDetails)
console.log("---- ---- ----")

console.log("Exercise 3")
console.log("---- ---- ----")

function getPerformence(scoreDetails){
    let performence = ""
    for(let i = 0; i<scoreDetails.length; i++){
        if(scoreDetails[i].avgRuns >= 80) performence = "Good"
        else if(scoreDetails[i].avgRuns >= 60 &&scoreDetails[i].avgRuns < 80) performence = "Above Average"
        else if(scoreDetails[i].avgRuns >= 45 &&scoreDetails[i].avgRuns < 60) performence = "Average"
        else  performence = "Bad"

        scoreDetails[i].performence = performence
    }
}

function getScoreCard(scoreDetails){

    console.log("===== Score Card for "+scoreDetails.name+" ====="+"\nEden Gardens: "+scoreDetails.eden+"\nWankhede Stadium: "+scoreDetails.wankhede+"\nFeroz Shah Kotla: "+scoreDetails.feroz+"\nChepauk: "+scoreDetails.chepuk+"\nChinnaswamy Stadium: "+scoreDetails.chinnaSwamy+"\n------\nTotal: "+scoreDetails.totalScore+"\nAverage: "+scoreDetails.avgRuns+"\nPerformence: "+scoreDetails.performence+"\n------ ------ ------ ------")

}
getPerformence(scoreDetails)

for(let i = 0; i<scoreDetails.length; i++){
    getScoreCard(scoreDetails[i])
}
