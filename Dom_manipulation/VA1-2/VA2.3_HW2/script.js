const seasonSelect = document.getElementById('season')
const movieSelect = document.getElementById('movie')
const petSelect = document.getElementById('pet')
const musicSelect = document.getElementById('music')
const planetSelect = document.getElementById('planet')

const seasonBtn = document.getElementById('seasonBtn')
const movieBtn = document.getElementById('movieBtn')
const petBtn = document.getElementById('petBtn')
const planetBtn = document.getElementById('planetBtn')

const seasonResult = document.getElementById('seasonResult')
const movieResult = document.getElementById('movieResult')
const petResult = document.getElementById('petResult')
const musicResult = document.getElementById('musicResult')
const planetResult = document.getElementById('planetResult')

seasonSelect.addEventListener('change',function(){
    const selectedSeason = seasonSelect.value
    seasons = {
        summer:"Hot temperature and sunny days.",
        spring:"Mild temperature and blooming flowers.",
        winter:"Cold temperature and snowfall.",
        fall:"Cool temperature and falling leaves."
    }

    seasonBtn.addEventListener('click',function(){
        seasonResult.textContent = `Typical Weather: ${seasons[selectedSeason]}`
    })
})
seasonBtn.addEventListener('click',function(){
    seasonResult.textContent = `select a season first.`
})

movieSelect.addEventListener('change',function(){
    const selectedGenre = movieSelect.value
    movies = {
        sifi:"Dune",
        mystery:"Gone Girl",
        romance:"Pride and Prejudice"
    }

    movieBtn.addEventListener('click',function(){
        movieResult.textContent = `Movie Recommendation: ${movies[selectedGenre]}`
    })
})
movieBtn.addEventListener('click',function(){
    movieResult.textContent = `select a genre first.`
})

petSelect.addEventListener('change',function(){
    const selectedPet = petSelect.value
    pets = {
        dog:"Dogs are known for their loyality and companionship.",
        cat:"Cats are independent and can be very playful.",
        fish:"Fishes are the most diverse vertebrates"
    }

    petBtn.addEventListener('click',function(){
        petResult.textContent = `Fun Fact: ${pets[selectedPet]}`
    })
})

petBtn.addEventListener('click',function(){
    petResult.textContent = `Please select a pet.`
})

musicSelect.addEventListener('change',function(){
    const selectedMusic = musicSelect.value
    musics = {
        guitar:"Guitar produces melodic tones with it's strings.",
        piano:"Piano creates harmonious music through it's keys.",
        violin:"The violin produces sweet and expressive sound."
    }
    musicResult.textContent =`Sound: ${musics[selectedMusic]}` 
})

planetSelect.addEventListener('change',function(){
    const selectedPlanet = planetSelect.value
    planets = {
        earth:"Earth is the only known planet with life.",
        mars:"Mars is often called the 'Red Planet' due to it's color.",
        jupitar: "Jupitar is the largest planet in solar system."
    }

    planetBtn.addEventListener('click',function(){
        planetResult.textContent = `Planet Fact: ${planets[selectedPlanet]}`
    })
    
})