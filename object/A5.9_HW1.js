console.log("A5.9_HW1")
console.log("---- ---- ----")

console.log("Exercise 1")

const citizen = {
    name:"Ajay",
    age:72,
    city:"Indore"
}

console.log("1.1")
if(citizen.age >= 60) console.log(citizen.name+" is a senior citizen.")
else console.log(citizen.name+" is not a senior citizen.")
console.log("---- ---- ----")

console.log("1.2")
citizen.sugarLevel = "Normal"
console.log("Sugar level of",citizen.name,"is",citizen.sugarLevel)
console.log("---- ---- ----")

console.log("1.3")
if(citizen.age>=60 && citizen.sugarLevel === "Normal") console.log(citizen.name,"is fit to travel.")
else console.log(citizen.name,"is not fit for travel.")
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")

function releaseMovie(movie){
    console.log("2.1")
    console.log(movie)
    console.log("---- ---- ----")

    console.log("2.2")
    const newMovie = {...movie}
    console.log(newMovie === movie)
    console.log("---- ---- ----")

    console.log("2.3")
    if(movie.duration>120) newMovie.isReleased = true
    console.log(newMovie)
    console.log("---- ---- ----")
}

const movie ={
    title : "MI 7",
    duration : 150,
    isReleased : false
}
releaseMovie(movie)

console.log("Exercise 3")
console.log("---- ---- ----")

const movie1 = {
    title : "The Lost City",
    duration: 120
}
const movie2 = {
    title : "Murder Mystery",
    duration : 110
}

console.log("Is",movie1.title,"longer than",movie2.title,"?",(movie1.duration>movie2.duration))
console.log("---- ---- ----")

console.log("Exercise 4")

function printStudentDetails(student){

    console.log("4.1")
    console.log(student)
    console.log("---- ---- ----")

    console.log("4.2")
    if(student.marks < 60) student.isTopPerformer = false
    else student.isTopPerformer = false

    console.log("Is the student a top performer?",student.isTopPerformer)
    console.log("---- ---- ----")

    console.log("4.3")
    if(student.marks >= 40 && student.marks < 60) student.grade = "D"
    console.log(student)
}

const student = {
    name:"Priya",
    age:14,
    marks:45
}

printStudentDetails(student)