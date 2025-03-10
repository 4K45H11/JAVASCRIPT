console.log("A5.11_CW")
console.log("---- ----- ----")

 const studentData = [
    {
        name:"Anu",
        rollNo:101,
        hindi:80,
        english:75,
        math:90
    },
    {name:"Priya",rollNo:102,hindi:85,
        english:70,math:95
    },
    {name:"Ravi",rollNo:103,hindi:78,
        english:92,math:87
    },
    
]

console.log("1.1")
console.log("---- ---- ----")
function printReportCard(rollNo){
    let student = getReportByRollNo(rollNo)
    console.log("===== Report Card for "+student.name+" =====\nRoll No: "+student.rollNo+"\n------\nMarks:\n------\nhindi: "+student.hindi+"\nenglish: "+student.english+"\nmaths: "+student.math+"\n------ ------ ------")
}

function getReportByRollNo(rollNo){
    for(i = 0; i<studentData.length; i++)
    {
        if(studentData[i].rollNo === rollNo) return studentData[i]
    }
}
printReportCard(101)
printReportCard(102)
printReportCard(103)
console.log("---- ---- ----")

console.log("1.2")
console.log("---- ---- ----")

function getStuentsDataBycutOff(cutOff,subjectName){

    let res = []
    for(let i = 0; i<studentData.length; i++){
        if(studentData[i][subjectName] > cutOff){/**using subject name as key to access the value form object. */
            res.push(studentData[i])
        }
    }
    return res
}

console.log("Student data with cutoff for hindi > 80",getStuentsDataBycutOff(80,"hindi"))

console.log("Student data with cutoff for english > 90",getStuentsDataBycutOff(90,"english"))

console.log("Student data with cutoff for Math > 90",getStuentsDataBycutOff(90,"math"))
console.log("---- ---- ----")

console.log("1.3")
console.log("---- ---- ----")

for(let i = 0; i<studentData.length; i++){
    let noOfsubjects = 3
    let totalMarks = studentData[i].hindi + studentData[i].english + studentData[i].math
    let avg = (totalMarks/noOfsubjects)

    studentData[i].totalMarks = totalMarks
    studentData[i].avgMarks = avg
}

function getStuentsDataByAvgcutOff(cutOff){

    let res = []
    for(let i = 0; i<studentData.length; i++){
        if(studentData[i].avgMarks > cutOff){/**notice the usage of . and [] in different cases */
            //res.push(studentData[i])
            console.log(studentData[i].name+" has average marks of: "+studentData[i].avgMarks+"\n")
        }
    }
}

getStuentsDataByAvgcutOff(82)
console.log("---- ---- ----")

console.log("1.4")
console.log("---- ---- ----")

function getHighestAverageMarks(studentData){

    let res = []

    let highest = studentData[0].avgMarks
    for(let i = 0; i<studentData.length; i++){
        if(studentData[i].avgMarks>highest) highest = studentData[i].avgMarks
    }
    for(let i = 0; i<studentData.length; i++){
        if(studentData[i].avgMarks === highest) res.push(studentData[i])
    }
    return res
}

console.log("Students with highest avg marks: ",getHighestAverageMarks(studentData))

