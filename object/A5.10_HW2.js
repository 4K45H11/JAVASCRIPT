console.log("A5.10_HW2")
console.log("---- ---- ----")

console.log("Exercise 1")
console.log("1.1")
const foodTracker = [
    {
        Day : "Monday",
        Breakfast : 300,
        Lunch : 300,
        Snacks : 150,
        Dinner : 500
    },
    {
        Day : "Tuesday",
        Breakfast : 250,
        Lunch : 450,
        Snacks : 200,
        Dinner : 550
    },
    {
        Day : "Wednesday",
        Breakfast : 350,
        Lunch : 550,
        Snacks : 100,
        Dinner : 700
    },
    {
        Day : "Thursday",
        Breakfast : 400,
        Lunch : 600,
        Snacks : 180,
        Dinner : 650
    },
    {
        Day : "Friday",
        Breakfast : 280,
        Lunch : 480,
        Snacks : 120,
        Dinner : 580
    },
    {
        Day : "Saturday",
        Breakfast : 320,
        Lunch : 520,
        Snacks : 160,
        Dinner : 620
    }
]

for(let i = 0; i<foodTracker.length; i++){
    printFormat(foodTracker[i])
    console.log("")
}

function printFormat(data){
    for(p in data){
        console.log(p+" : "+data[p])
    }
}

console.log("---- ---- ----")

console.log("1.2")
const midAfternoonCalories = [100, 120, 105, 110, 100, 130]
for(let i = 0; i<midAfternoonCalories.length; i++){
    foodTracker[i].midSnack = midAfternoonCalories[i]
}
console.log(foodTracker)
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
const sunday = {
    Day : "Sunday",
    Breakfast : 370,
    Lunch : 430,
    Snacks : 140,
    Dinner : 530,
    midSnack : 150
}
console.log("Sunday's Data:",sunday)
console.log("---- ---- ----")

console.log("2.2")
foodTracker.push(sunday)
console.log(foodTracker)
console.log("---- ---- ----")

console.log("2.3")
for(let i = 0; i<foodTracker.length; i++){
    let totalCalorie = foodTracker[i].Breakfast+foodTracker[i].Lunch+foodTracker[i].Snacks+foodTracker[i].Dinner+foodTracker[i].midSnack
    
    foodTracker[i].totalCalorie = totalCalorie
}
console.log("Updated Array:",foodTracker)
console.log("---- ---- ----")

console.log("2.4")
for(let i = 0; i<foodTracker.length; i++){
    let avg = foodTracker[i].totalCalorie/5

    foodTracker[i].avgCalorieIntake = avg
}
console.log("Updated array: ",foodTracker)
console.log("---- ---- ----")

console.log("Exercise 3")
console.log("---- ---- ----")

function getComment (data){
    if(data.totalCalorie > 1500) return "Your calorie intake was higher than recommended"
    else return "Your calorie intake was within limits"
}

for(let i = 0; i<foodTracker.length; i++){
    let report = "===== Calorie Card for "+foodTracker[i].Day+ " ====="
    report += "\nBreakfast: "+foodTracker[i].Breakfast
    report += "\nLunch: "+foodTracker[i].Lunch
    report += "\nSnacks: "+foodTracker[i].Snacks
    report += "\nDinner: "+foodTracker[i].Dinner
    report += "\nMid Afternoon: "+foodTracker[i].midSnack
    report += "\n------"
    report += "\nTotal: "+foodTracker[i].totalCalorie
    report += "\nAverage: "+foodTracker[i].avgCalorieIntake
    report += "\nComment: "+getComment(foodTracker[i])
    report += "\n----- ----- ----- -----"
    console.log(report)
    report =""
}
