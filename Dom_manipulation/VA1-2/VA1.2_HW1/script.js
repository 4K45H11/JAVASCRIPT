//q1
const ageInput = document.getElementById('ageInput')
const validateAgeButton = document.getElementById('validateAgeButton')
const ageResult = document.getElementById('ageResult')

validateAgeButton.addEventListener('click',function(){
    const age = ageInput.value
    if(age>=18 && age<=100){
        ageResult.textContent = `Entered age is "Valid".`
    }
    else ageResult.textContent = `Entered age is "Not Valid".`
    
})

//q2
const animalInput = document.getElementById('animalInput')
const animalButton = document.getElementById('animalButton')
const animalResult = document.getElementById('animalResult')

animalButton.addEventListener('click',function(){
    const animal = animalInput.value
    animalResult.textContent = `Your favourite animal is ${animal}.`
})

//q3
const colorInput = document.getElementById('colorInput')
const colorButton = document.getElementById('colorButton')
const colorResult = document.getElementById('colorResult')

colorButton.addEventListener('click', function(){
    const color = colorInput.value
    colorResult.textContent = `Your favourite color is "${color}".`
})

//q4
const questionInput = document.getElementById('questionInput')
const questionButton = document.getElementById('questionButton')
const questionResult = document.getElementById('questionResult')

questionButton.addEventListener('click',function(){
    const ans = questionInput.value
    questionResult.textContent = `You answered "${ans}".`
})

//q5
const numberInput = document.getElementById('numberInput')
const numberButton = document.getElementById('numberButton')
const numberResult = document.getElementById('numberResult')

numberButton.addEventListener('click', function(){
    const num = numberInput.value

    //console.log(typeof(num))

     //converting string to int
    const numInt = Number(num)

   // console.log(typeof(numInt))

    let type
    if(numInt % 2 == 0){
        type = "Even"
    }
    else type = "Odd"

    numberResult.innerHTML = `The no ${num} is <strong>${type}</strong>`;
})


