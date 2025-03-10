console.log("A5.12_CW")
console.log("---- ---- ----")

const studentsData = [
    { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90, computers: 88, science: 82, totalMarks: 415, avgMarks: 83 },
    { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95, computers: 92, science: 78, totalMarks: 420, avgMarks: 84 },
    { name: "Priya", rollNo: 103, hindi: 78, english: 92, maths: 87, computers: 95, science: 90, totalMarks: 442, avgMarks: 88.4 },
    { name: "Kaveri", rollNo: 104, hindi: 89, english: 95, maths: 96, computers: 98, science: 91, totalMarks: 469, avgMarks: 93.8 }
]

function getTopper(data){
    let highestTotalStudent = data[0]
    for(let i = 0; i<data.length; i++){
        if(data[i].totalMarks > highestTotalStudent.totalMarks) highestTotalStudent = data[i]
    }
    return highestTotalStudent
}

function getGrade(avg){
    if(avg >= 90) return "A"
    else if(avg >= 80) return "B"
    else if(avg >= 70) return "C"
    else if(avg >= 60) return "D"
    else if(avg >= 50) return "E"
    else return "F"
}
function getAgraderCount(dataArray){
    let count = 0
    for(let i = 0; i<dataArray.length; i++){
        if(dataArray[i].avgMarks>=90) count+=1
    }
    return count
}
function getTotalMarks(data){
    let classTotalMarks = 0
    for(let i = 0; i<data.length; i++){
        classTotalMarks+= data[i].totalMarks
    }
    return classTotalMarks
}
function calculateSubjectAverage(data,subject){
    let totalMarks = 0
    for(let i = 0; i<data.length; i++){
        totalMarks += data[i][subject] //be aware
    }
    return (totalMarks/data.length)

}
/**New method of string concatenation */
function generateClassReport(studentsData){

    let topper = getTopper(studentsData)
    let grade = getGrade(topper.avgMarks)
    let aGradeCount = getAgraderCount(studentsData)
    let totalMarksScoredByClass = getTotalMarks(studentsData)
    let totalStudenInTheClass = studentsData.length
    let hindiAvg = calculateSubjectAverage(studentsData,"hindi")
    let mathsAvg = calculateSubjectAverage(studentsData,"maths")
    let englishAvg = calculateSubjectAverage(studentsData,"english")
    let scienceAvg = calculateSubjectAverage(studentsData,"science")
    let computerAvg = calculateSubjectAverage(studentsData,"computers")

    let report = "====== Class Performence Report ======\n"
    report += "Toper\n"
    report += "-------\n"
    report += "Name: "+topper.name + "\n"
    report += "Roll No: "+topper.rollNo + "\n"
    report += "Total Marks: "+ topper.totalMarks + "\n"
    report += "Grade: "+grade + "\n"

    report += "\nA graders:\n"
    report += "------\n"
    report += "Total No of A graders: "+aGradeCount + "\n"

    for(let i = 0; i<studentsData.length; i++){
        if(studentsData[i].avgMarks >= 90) report+="Name: "+studentsData[i].name+"\n" + "\Total Marks: "+studentsData[i].totalMarks+"\n------"
    }

    report += "\nClass Average:\n"
    report += "------\n"
    report+= "Total Marks Scored By Class: "+totalMarksScoredByClass + "\n"
    report+= "Total Average of Class: "+(totalMarksScoredByClass/totalStudenInTheClass)+"\n"
    report+="------\n"
    report+="Total Average of Hindi: "+ hindiAvg + "\n"
    report+="Total Average of Maths: "+ mathsAvg + "\n"
    report+="Total Average of English: "+ englishAvg + "\n"
    report+="Total Average of Science: "+ scienceAvg + "\n"
    report+="Total Average of Computers: "+ computerAvg + "\n"

    return report
}

console.log(generateClassReport(studentsData))