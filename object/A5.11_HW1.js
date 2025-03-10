console.log("A5.11_HW1")
console.log("---- ---- ----")

console.log("1.1")
const studentData = [
    { studentName: "John", rollNo: 201, science: 88, history: 75, geography: 90 },
    { studentName: "Alice", rollNo: 202, science: 92, history: 85, geography: 88 },
    { studentName: "Bob", rollNo: 203, science: 78, history: 89, geography: 91 }
]

function generateReportCard(rollNo){
    let targetStudent = {}

    for(let i = 0; i<studentData.length; i++){
        if(studentData[i].rollNo == rollNo){
            targetStudent = studentData[i]
            break
        }
    }

    let report = "===== Report Card for "+targetStudent.studentName+" ====="
    report += "\nRoll No: "+rollNo
    report += "\n-----"
    report += "\nMarks:"
    report += "\n-----"
    report += "\nscience: "+targetStudent.science
    report += "\nhistory: "+targetStudent.history
    report += "\nGeography: "+targetStudent.geography
    report +="\n------ ------ ------"
    return report
}

console.log(generateReportCard(201))
console.log(generateReportCard(202))
console.log(generateReportCard(203))
console.log("---- ---- ----")

console.log("1.2")
function getStuentsDataBycutOff(cutOff,subjectName){

    let result = []
    for(let i = 0; i<studentData.length; i++){
        if(studentData[i][subjectName] >= cutOff){
            result.push(studentData[i])
        }
    }
    return result
}

console.log("Students with marks in science >= 80",getStuentsDataBycutOff(80,"science"))
console.log("Students with marks in history >= 90",getStuentsDataBycutOff(90,"history"))
console.log("Students with marks in geography >= 90",getStuentsDataBycutOff(90,"geography"))
console.log("---- ---- ----")

console.log("1.3")

let noOfSub = 3
for(let i = 0; i<studentData.length; i++){
    let total = studentData[i].geography+studentData[i].history+studentData[i].science

    studentData[i].avgMarks = total/noOfSub
}

function getStuentsDataByAvgcutOff(cutOff){

    let result = []
    for(let i = 0; i<studentData.length; i++){
        if(studentData[i].avgMarks >= cutOff){
            result.push(studentData[i])
        }
    }
    return result
}

let aboveAvgStudents = getStuentsDataByAvgcutOff(82)

for(let i = 0; i<aboveAvgStudents.length; i++){
    console.log(aboveAvgStudents[i].studentName+" has avg marks of "+aboveAvgStudents[i].avgMarks)
}
console.log("---- ---- ----")

console.log("1.4")

function getHighestAvgMarksStudent(studentData){
    let highestAvg = studentData[0]
    for(let i = 0; i<studentData.length; i++){
        if(studentData[i].avgMarks > highestAvg.avgMarks) highestAvg = studentData[i]
    }
    return highestAvg
}
console.log(getHighestAvgMarksStudent(studentData))