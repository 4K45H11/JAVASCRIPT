console.log("A5.12_HW1")
console.log("---- ---- ----")

const studentsData = [
    { name: "Sarah", rollNo: 201, chemistry: 88, homeScience: 78, commerce: 92, physicalEducation: 90, moralScience: 85, totalMarks: 433, avgMarks: 86.6 },
    { name: "Michael", rollNo: 202, chemistry: 75, homeScience: 90, commerce: 85, physicalEducation: 94, moralScience: 88, totalMarks: 432, avgMarks: 86.4 },
    { name: "Emily", rollNo: 203, chemistry: 82, homeScience: 95, commerce: 88, physicalEducation: 92, moralScience: 90, totalMarks: 447, avgMarks: 89.4 },
    { name: "David", rollNo: 204, chemistry: 95, homeScience: 96, commerce: 94, physicalEducation: 99, moralScience: 99, totalMarks: 483, avgMarks: 96.6 },
    { name: "Olivia", rollNo: 205, chemistry: 85, homeScience: 92, commerce: 89, physicalEducation: 91, moralScience: 86, totalMarks: 443, avgMarks: 88.6 }
]

function getTopper(data){
    let highestTotal = data[0]
    for(let i = 0; i<data.length; i++){
        if(data[i].totalMarks > highestTotal.totalMarks) highestTotal = data[i]
    }
    return highestTotal
}
function getGrade(data){
    let avg = data.avgMarks
    if(avg >= 95) return "A+"
    else if(avg >= 90) return "A"
    else if(avg >= 85) return "B+"
    else if(avg >= 80) return "B"
    else if(avg >= 75) return "C+"
    else if(avg >= 70) return "C"
    else if(avg >= 65) return "D+"
    else if(avg >= 60) return "D"
    else return "E"
}
function getNoOfAPlusGraders(data){
    let count = 0
    for(let i = 0; i<data.length; i++){
        if(data[i].avgMarks >= 95) count++
    }
    return count
}
function getTotalMarks(data){
    let total = 0
    for(let i = 0; i<data.length; i++){
        total += data[i].totalMarks
    }
    return total
}
function getSubAvg(subject,data){
    let totalMarksSub = 0
    for(let i = 0; i<data.length; i++){
        totalMarksSub+=data[i][subject]
    }
    return totalMarksSub/data.length
}

function generatePerformenceReport(studentsData){

    let topper = getTopper(studentsData)
    let topperGrade = getGrade(topper)
    let totalAplusGraders = getNoOfAPlusGraders(studentsData)
    let classTotal= getTotalMarks(studentsData)
    let classAverage = classTotal/(studentsData.length)
    let chemistAvg = getSubAvg("chemistry",studentsData)
    let homeScienceAvg = getSubAvg("homeScience",studentsData)
    let commerceAvg = getSubAvg("commerce",studentsData)
    let physicalEducationAvg = getSubAvg("physicalEducation",studentsData)
    let moralScienceAvg = getSubAvg("moralScience",studentsData)

    let report = "====== Class Performence Report ======\n"
    report += "Topper:\n"
    report+="------\n"
    report+="Name: "+topper.name+"\n"
    report+= "Roll No: "+topper.rollNo+"\n"
    report+="Total Marks: "+topper.totalMarks+"\n"
    report+="Grade: "+ topperGrade+"\n"

    report+="\nA+ Graders: \n"
    report+="------\n"
    report+="Total No of A+ Graders: "+totalAplusGraders+"\n"

    for(let i = 0; i<studentsData.length; i++){
        if(studentsData[i].avgMarks >= 95){
            report+="Name: "+studentsData[i].name+"\nTotal Marks: "+studentsData[i].totalMarks+"\n------"
        }
    }
    report+="\nClass Average:"
    report+="Total Marks Scored by Class: "+classTotal+"\n"
    report+="Total Average of Class: "+classAverage+"\n"
    report+="------"
    report+="\nTotal Average of Chemistry: "+chemistAvg
    report+="\nTotal Average of Home Science: "+homeScienceAvg
    report+="\nTotal Average of Commerce: "+commerceAvg
    report+="\nTotal Average of Physical Education: "+physicalEducationAvg
    report+="\nTotal Average of Moral Science: "+moralScienceAvg


    return report
}

console.log(generatePerformenceReport(studentsData))