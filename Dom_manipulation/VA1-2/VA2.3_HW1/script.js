const selectMovie = document.getElementById('selectMovie')
const movieResult = document.getElementById('movieResult')

selectMovie.addEventListener('change',function(){
    const selectedMovieGenre = selectMovie.value

    movies = {
        Action:"The Dark Knight",
        Comedy:"Superbad",
        Drama:"The Shawshank"
    }
    movieResult.textContent = `Recommended ${selectedMovieGenre} Movie: ${movies[selectedMovieGenre]}`

})

const selectWeather = document.getElementById('selectWeather')
const weatherResult = document.getElementById('weatherResult')

selectWeather.addEventListener('change',function(){
    const selectedWeather = selectWeather.value

    weathers = {
        rainy:"Movie day indoors.",
        snowy:"Build a snowman.",
        sunny:"Picnic in the Park."
    }

    weatherResult.textContent = `Outdoor activity Suggestion: ${weathers[selectedWeather]}`
})

const selectLanguage = document.getElementById('selectLang')
const langResult = document.getElementById('langResult')
const greetBtn = document.getElementById('greetBtn')

selectLanguage.addEventListener('change',function(){
    const selectedLanguage = selectLanguage.value

    greets = {
        english:"Hello",
        spanish:"Hola",
        french:"Bonjour"
    }
    greetBtn.addEventListener('click',function(){
        langResult.textContent = `Commom Greetings: ${greets[selectedLanguage]}!`
    })

    
})

greetBtn.addEventListener('click',function(){
    langResult.textContent = `Please select a language.`
})

const selectInstrument = document.getElementById('selectInstrument')
const instrumentResult = document.getElementById('instrumentResult')
const factBtn = document.getElementById('factBtn')

selectInstrument.addEventListener('change',function(){
    const selectedInstruments = selectInstrument.value
    
    facts = {
        guitar:"The guitar is one of the most popular instrument in the world.",
        violin:"The violin is a string instrument known for it's sweet sound.",
        piano:"The piano has 88 keys."
    }

    factBtn.addEventListener('click',function(){
        instrumentResult.textContent = `Fun Fact: ${facts[selectedInstruments]}`
    })

})

factBtn.addEventListener('click',function(){
    instrumentResult.textContent = `Please select a musical instrument.`
})

const selectPets = document.getElementById('selectPets')
const petResult = document.getElementById('petResult')
const petBtn = document.getElementById('petBtn')

selectPets.addEventListener('change',function(){
    const selectedPet = selectPets.value

    descriptions = {
        cat:"Cats are independent and playful.",
        dog:"Dogs are loyal and freindly companinons.",
        fish:"Fishes are low maintenence pets."
    }

    petBtn.addEventListener('click',function(){
        petResult.textContent = `Pet Description: ${descriptions[selectedPet]}`
    })
})

petBtn.addEventListener('click',function(){
    petResult.textContent = `Please select a pet.`
})