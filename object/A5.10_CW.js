console.log("A5.10_CW")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")

const studentsData = [ /*array of objects, keep all key's name same for accessability.*/
    {
        name : "Rahul",
        rollNo : 101,
        hindi : 80,
        english : 75,
        maths : 90,
        computer: 88
    },
    {
        name : "Amit",
        rollNo : 102,
        hindi : 85,
        english : 70,
        maths : 95, 
        computer: 92 
    },
    {
        name : "Priya",
        rollNo : 103,
        hindi : 78,
        english : 92,
        maths : 87,
        computer: 95  
    }

]

for(let i = 0; i<studentsData.length;i++){
    console.log("Name: "+studentsData[i].name+"\n"+"Roll No: "+studentsData[i].rollNo+"\n"+"Hindi: "+studentsData[i].hindi+"\n"+"English: "+studentsData[i].english+"\n"+"Maths: "+studentsData[i].maths+"\n"+"Computer: "+studentsData[i].computer+"\n")
}
console.log("---- ---- ----")

console.log("1.2")

const marksForScience = [82,90,88] /*updating object using another array.*/

for(let i = 0; i<studentsData.length; i++){
    studentsData[i].science = marksForScience[i]
    console.log(studentsData[i])
}
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
const kaveriData = {
    name : "Kaveri",
    rollNo: 104,
    hindi: 84,
    english: 88,
    maths: 78,
    computer : 90,
    science : 86
}
console.log("Kaveri's Data:",kaveriData)
console.log("---- ---- ----")

console.log("2.2")
studentsData.push(kaveriData)
console.log("The updated data:",studentsData)
console.log("---- ---- ----")

console.log("2.3")
for(let i = 0; i<studentsData.length; i++){
    let totalMarks = (studentsData[i].hindi+studentsData[i].english+studentsData[i].maths+studentsData[i].computer+studentsData[i].science)

    studentsData[i].totalMarks = totalMarks
}
console.log("Array with total marks:",studentsData)
console.log("---- ---- ----")

console.log("2.4")
for(let i = 0; i<studentsData.length; i++){
    const noOfsubject = 5
    const average = studentsData[i].totalMarks/noOfsubject
    studentsData[i].avgMarks = average
}
console.log("Students Data:",studentsData)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")



for(let i = 0; i<studentsData.length; i++){

    //creating different functions improves scalability and readability.
    getGrade(studentsData[i])
    generateReportCard(studentsData[i])

}

function getGrade(studentsData){
    /*Getting grades of the students. */
    let avg = studentsData.avgMarks
    if(avg >= 90) studentsData.grade = "A"
    else if(avg < 90 && avg >= 80) studentsData.grade = "B"
    else if(avg < 80 && avg >= 70)studentsData.grade = "C"
    else if(avg < 70 && avg >= 60)studentsData.grade = "D"
    else if(avg < 60 && avg >= 50)studentsData.grade = "E"
    else studentsData.grade = "F"
}

function generateReportCard(studentsData){

    /*--formating the report card--*/

    console.log("===== Report card for "+studentsData.name+" =====\n"+"Roll No: "+studentsData.rollNo+"\n-----\nMarks\n-----"+"\n"+"Hindi: "+studentsData.hindi+"\n"+"English: "+studentsData.english+"\n"+"Maths: "+studentsData.maths+"\n"+"Computer: "+studentsData.computer+"\n-----\nTotal: "+studentsData.totalMarks+"\nAverage: "+studentsData.avgMarks+"\nGrade: "+studentsData.grade+"\n----- ----- ----- -----")
}