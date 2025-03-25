const musicRadioBtns = document.getElementsByName('music')
const musicResult = document.getElementById('musicResult')

for(let i = 0; i<musicRadioBtns.length; i++){
    musicRadioBtns[i].addEventListener('change',function(){
        const selectedRadioBtn = document.querySelector('input[name = "music"]:checked').value

        musicResult.textContent = `Selected Genre: ${selectedRadioBtn}`
    })
}

const languageRadioBtns = document.getElementsByName('language')
const languageResult = document.getElementById('languageResult')

for(let i = 0; i<languageRadioBtns.length; i++){
    languageRadioBtns[i].addEventListener('change',function(){
        const selectedLanguage = document.querySelector('input[name="language"]:checked').value
        languageResult.textContent = `Selected Language: ${selectedLanguage}`
    })
}

const jobRadioBtns = document.getElementsByName('job')
const jobResult = document.getElementById('jobResult')
const displayJobBtn = document.getElementById('displayJobBtn')

for(let i = 0; i<jobRadioBtns.length; i++){
    jobRadioBtns[i].addEventListener('change',function(){
        const selectedJob = document.querySelector('input[name = "job"]:checked').value

        console.log(selectedJob)

        displayJobBtn.addEventListener('click',function(){
            jobResult.textContent = `Selected Job Role: ${selectedJob}`  
        })
    })
}
displayJobBtn.addEventListener('click',function(){

    jobResult.textContent = `Please select a job role.`
})

const hobbyRadioBtns = document.getElementsByName('hobby')
const displayHobbyBtn = document.getElementById('disPlayHobbyBtn')
const hobbyResult = document.getElementById('hobbyResult')

for(let i = 0; i<hobbyRadioBtns.length; i++){
    hobbyRadioBtns[i].addEventListener('change',function(){
        const selectedHobby = document.querySelector('input[name = "hobby"]:checked').value

        displayHobbyBtn.addEventListener('click',function(){
            hobbyResult.textContent = `Selected hobby: ${selectedHobby}`
        })
    })
}
displayHobbyBtn.addEventListener('click',function(){
    hobbyResult.textContent = `Please select a hobby.`
})

const styleRadioBtns = document.getElementsByName('cloth')
const clothResult = document.getElementById('clothResult')
const displayClothBtn = document.getElementById('displayClothBtn')

for(let i = 0; i<styleRadioBtns.length; i++){
    styleRadioBtns[i].addEventListener('change',function(){
        const selectedCloth = document.querySelector('input[name = "cloth"]:checked').value

        displayClothBtn.addEventListener('click',function(){
            clothResult.textContent = `Selected Style: ${selectedCloth}`
        })
    })
}

displayClothBtn.addEventListener('click',function(){
    clothResult.textContent = `Please select a style.`
})