console.log("A3.2_CW")
console.log("---- ---- ----")

console.log("1.1")
let number = 10

if(number > 0)
{
  console.log("The number is positive.")
}
else if(number < 0)
{
  console.log("The number is negative.")
}
else
{
  console.log("The number is zero.")
}

console.log("---- ---- ----")

console.log("1.2")
let student1 = "Rahul"
let student2 = "Priya"
let student3 = "Amit"

let marks1 = 85
let marks2 = 92
let marks3 = 78

if(marks1 > marks2 && marks1 > marks3)
{
  console.log(student1,"scored the highest marks")
}
else if(marks2 > marks1 && marks2 > marks3)
{
  console.log(student2,"scored the highest marks")
}
else if(marks3 > marks1 && marks3 > marks2)
{
  console.log(student3,"scored the highest marks")
}
else console.log("Two or more students have the same highest marks.")