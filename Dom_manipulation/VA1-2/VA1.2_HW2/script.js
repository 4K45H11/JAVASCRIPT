//p1
const countryInput = document.getElementById('countryInput')
const countryBtn = document.getElementById('countryBtn')
const countryResult = document.getElementById('countryResult')

countryBtn.addEventListener('click',function(){
    const country = countryInput.value
    countryResult.textContent = `Your country is: ${country}.`
})

//p2
const webInput = document.getElementById('webInput')
const webBtn = document.getElementById('webBtn')
const webResult = document.getElementById('webResult')

webBtn.addEventListener('click',function(){
    const web = webInput.value
    webResult.textContent = `${web}`
})

//p3
const responseInput = document.getElementById('responseInput')
const responseBtn = document.getElementById('responseBtn')
const responseResult = document.getElementById('responseResult')

responseBtn.addEventListener('click',function(){
    const res = responseInput.value
    let statement

    if(res === 'Yes'|| res === 'YES' || res === 'yes') statement = "You are a student."
    else if(res === 'No'|| res === 'NO' || res === 'no') statement = "You are not a student."
    else statement = "Invalid response, Please answer in \"Yes\" or \"No\""

    responseResult.textContent = statement
})

//p4
const ageInput = document.getElementById('ageInput')
const ageBtn = document.getElementById('ageBtn')
const ageResult = document.getElementById('ageResult')

ageBtn.addEventListener('click',function(){
    const age = ageInput.value
    let response
    if(Number(age)>=18) response = "You are an adult."
    else response = "You are a minor."

    ageResult.textContent = response
})
