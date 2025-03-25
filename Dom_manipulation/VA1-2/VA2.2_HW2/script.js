const moodCheckboxes = document.getElementsByName('mood')
const bookCheckboxes = document.getElementsByName('book')
const styleCheckboxes = document.getElementsByName('style')
const weatherCheckboxes = document.getElementsByName('weather')
const travelCheckboxes = document.getElementsByName('travel')


const moodResult =document.getElementById('moodResult')
const bookResult = document.getElementById('bookResult')
const clothResult = document.getElementById('clothResult')
const weatherResult = document.getElementById('weatherResult')
const travelResult = document.getElementById('travelResult')

const bookBtn = document.getElementById('bookBtn')
const styleBtn = document.getElementById('styleBtn')
const weatherBtn = document.getElementById('weatherBtn')

for(let i = 0; i<moodCheckboxes.length; i++){
    moodCheckboxes[i].addEventListener('change',function(){
        const selectedMood = document.querySelector('input[name = "mood"]:checked').value

        moodResult.textContent = `Selected Mood: ${selectedMood}`
    })
}

for(let i = 0; i<bookCheckboxes.length; i++){
    bookCheckboxes[i].addEventListener('change',function(){
        const selectedBook = document.querySelector('input[name = "book"]:checked').value

        bookBtn.addEventListener('click',function(){
            bookResult.textContent = `Book recommendation for ${selectedBook} genre.`
        })

    })
}
bookBtn.addEventListener('click',function(){
    bookResult.textContent = `Please select a book.`
})

for(let i = 0; i<styleCheckboxes.length; i++){
    styleCheckboxes[i].addEventListener('change',function(){
        const selectedStyle = document.querySelector('input[name = "style"]:checked').value
        styleBtn.addEventListener('click',function(){
            clothResult.textContent = `Selcted Clothing style: ${selectedStyle}`
        })
    })
}
styleBtn.addEventListener('click',function(){
    clothResult.textContent = `Please select a clothing style.`
})

for(let i = 0; i<weatherCheckboxes.length; i++){
    weatherCheckboxes[i].addEventListener('change',function(){
        const selectedWeather = document.querySelector('input[name = "weather"]:checked').value

        weatherBtn.addEventListener('click',function(){
            weatherResult.textContent = `Selected weather preference: ${selectedWeather}`
        })
        
    })
}
weatherBtn.addEventListener('click',function(){
    weatherResult.textContent = `Please select a weather.`
})

for(let i = 0; i<travelCheckboxes.length; i++){
    travelCheckboxes[i].addEventListener('change',function(){
        const selectedTravel = document.querySelector('input[name ="travel"]:checked').value

        travelResult.textContent = `Selected Travel Mode: ${selectedTravel}`
    })

   
}
