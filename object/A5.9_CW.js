console.log("A5.9_CW")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")
const citizen = {
    name:"Sandip",
    age: 65
}

console.log("1.1")
if(citizen.age >= 60) console.log(citizen.name,"is a senior citizen")
else console.log(citizen.name,"is not a senior citizen")
console.log("---- ---- ----")

console.log("1.2")
citizen.bp = "Normal"
console.log("---- ---- ----")

console.log("1.3")
if(citizen.age>=60 && citizen.bp === "Normal") console.log("Fit to travel.")
else console.log("Not fit to travel.")   
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")

const person = {
    name:"Rajesh",
    age:36,
    isBirthDay:true
}

function incrementAge(people){ //can keep the passing name anything.
    console.log("2.1")
    console.log(people)
    console.log("---- ---- ----")

    console.log("2.2")

    const newPerson = {...people} //spread operator
    console.log("Is new person same as person",newPerson === people)/*-> false because they are two different objects which have different memory locations. */
    console.log("---- ---- ----")

    console.log("2.3") /*Before making changes in the object you should make a copy of original object and do changes in that.*/
    if(newPerson.isBirthDay) newPerson.age+=1
    console.log(newPerson)
}
incrementAge(person)
console.log("---- ---- ----")

console.log("Exercise 3")
console.log("---- ---- ----")

function employeeRecords(employee1,employee2){
    if(employee1.hoursWorked > employee2.hoursWorked){
        return true
    }
    else return false
}

const employee1 = {
    name: "Amit",
    hoursWorked:160
}
const employee2 = {
    name:"Suresh",
    hoursWorked:180
}

console.log("Has "+employee1.name+" worked more than "+employee2.name+" ? "+employeeRecords(employee1,employee2))
