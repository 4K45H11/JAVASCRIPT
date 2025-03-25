const termCheckbox = document.getElementsByName('termCheckbox')
//console.log(termCheckbox)
const termResult = document.getElementById('termResult')

termCheckbox[0].addEventListener('change',function(){
    const termValue = termCheckbox[0].checked
    if(termValue){
        termResult.textContent = `User Agreed the Terms.`
    }
    else termResult.textContent = ``
})

const allergiesCheckboxes = document.getElementsByName('allergies')
const allergyResult = document.getElementById('allergyResult')
const allergyBtn = document.getElementById('allergyBtn')


for(let i = 0; i<allergiesCheckboxes.length; i++){
    allergiesCheckboxes[i].addEventListener('change',function(){
        const selectedAllergies = []
        for(let j = 0; j<allergiesCheckboxes.length; j++ ){
            if(allergiesCheckboxes[j].checked){
                selectedAllergies.push(allergiesCheckboxes[j].value)
            }
        }
        allergyBtn.addEventListener('click',function(){
            allergyResult.textContent = `Selected Food Allergies: ${selectedAllergies.join(', ')}`
        })

    })
}

allergyBtn.addEventListener('click',function(){
    allergyResult.textContent = `Please select atleast one food allergy.`
})

const destCheckBoxes = document.getElementsByName('dest')
const destBtn = document.getElementById('destBtn')
const destResult = document.getElementById('destResult')

for(let i = 0; i<destCheckBoxes.length; i++){
    destCheckBoxes[i].addEventListener('change',function(){
        const selectedDests = []
        for(let j = 0; j<destCheckBoxes.length; j++){
            if(destCheckBoxes[j].checked){
                selectedDests.push(destCheckBoxes[j].value)
            }
        }
        destBtn.addEventListener('click',function(){
            destResult.textContent =`Selected Destinations: ${selectedDests.join(', ')}`
        })
    })
}

destBtn.addEventListener('click',function(){
    destResult.textContent = `Please select atleast one travel destination.`
})

const sportsCheckboxes = document.getElementsByName('sports')
const sportsBtn = document.getElementById('sportsBtn')
const sposportsResult = document.getElementById('sportsResult')

for(let i = 0; i<sportsCheckboxes.length; i++){
    sportsCheckboxes[i].addEventListener('change',function(){
        let selectedSports = []
        for(let j = 0; j<sportsCheckboxes.length; j++){
            if(sportsCheckboxes[j].checked){
                selectedSports.push(sportsCheckboxes[j].value)
            }
        }
        sportsBtn.addEventListener('click',function(){
            sposportsResult.textContent = `Selected Sports: ${selectedSports.join(', ')}`
        })
    })   
}

sportsBtn.addEventListener('click',function(){
    sposportsResult.textContent = `Please select alteast one sports.`
})

const clothCheckboxes = document.getElementsByName('cloth')
const clothBtn = document.getElementById('clothBtn')
const clothResult = document.getElementById('clothResult')

for(let i = 0; i<clothCheckboxes.length; i++){
    clothCheckboxes[i].addEventListener('change',function(){
        let selectedCloths = []
        for(let j = 0; j<clothCheckboxes.length; j++){
            if(clothCheckboxes[j].checked){
                selectedCloths.push(clothCheckboxes[j].value)
            }
        }
        clothBtn.addEventListener('click',function(){
            clothResult.textContent = `Selected Clothing Colors: ${selectedCloths.join(', ')}`
        })
    })
}

clothBtn.addEventListener('click',function(){
    clothResult.textContent = `Please select atleast one clothing color.`
})

const mediaCheckboxes = document.getElementsByName('media')
const mediaBtn = document.getElementById('mediaBtn')
const mediaResult = document.getElementById('mediaResult')

for(let i = 0; i<mediaCheckboxes.length; i++){
    mediaCheckboxes[i].addEventListener('change',function(){
        const selectedMedia = []
        for(let j = 0; j<mediaCheckboxes.length; j++){
            if(mediaCheckboxes[j].checked){
                selectedMedia.push(mediaCheckboxes[j].value)
            }
        }
        mediaBtn.addEventListener('click',function(){
            mediaResult.textContent = `Selected Media Platforms: ${selectedMedia.join(', ')}`
        })
    })
}
mediaBtn.addEventListener('click',function(){
    mediaResult.textContent = `Please select atleast one social media platform.`
})

