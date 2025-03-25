const selectedSports = document.getElementsByName('sports')
const selectedDestinations = document.getElementsByName('destination')
const selectedMovies = document.getElementsByName('movies')
const selectedMenus = document.getElementsByName('menus')
const selectedFruits = document.getElementsByName('fruits')

const sportsResult = document.getElementById('sportsResult')
const destResult = document.getElementById('destResult')
const movieResult = document.getElementById('movieResult')
const menuResult = document.getElementById('menuResult')
const fruitsResult = document.getElementById('fruitsResult')

const selectedSportBtn = document.getElementById('selectedSportBtn')
const selectedDestBtn = document.getElementById('selectedDestBtn')
const selectedMovieBtn = document.getElementById('selectedMovieBtn')
const selectedMenuBtn = document.getElementById('selectedMenuBtn')
const selectedFruitBtn = document.getElementById('selectedFruitBtn')


for(let i = 0; i<selectedSports.length; i++){
    
    selectedSports[i].addEventListener('change',function(){
        const selectedArr = []
        for(let j = 0; j<selectedSports.length; j++){
            if(selectedSports[j].checked){
                selectedArr.push(selectedSports[j].value)
            }
            
        } 

        selectedSportBtn.addEventListener('click',function(){
            sportsResult.textContent = `Selected sports: ${selectedArr.join(', ')}`
        })

    })
    
}

for(let i = 0; i<selectedDestinations.length; i++){
    selectedDestinations[i].addEventListener('change',function(){
        const destinations = []
        for(let j = 0; j<selectedDestinations.length; j++){
            if(selectedDestinations[j].checked){
                destinations.push(selectedDestinations[j].value)
            }
        }

        selectedDestBtn.addEventListener('click',function(){
            destResult.textContent = `Selected destinations: ${destinations.join(', ')}`
        })
    })
}

for(let i = 0; i<selectedMovies.length; i++){
    selectedMovies[i].addEventListener('change',function(){
        const moviesArr = []
        for(let j = 0; j<selectedMovies.length; j++){
            if(selectedMovies[j].checked){
                moviesArr.push(selectedMovies[j].value)
            }
        }

        selectedMovieBtn.addEventListener('click', function(){
            movieResult.textContent = `Selected movie genres: ${moviesArr.join(', ')}`
        })
    })
}


for(let i = 0; i<selectedMenus.length; i++){
    selectedMenus[i].addEventListener('change',function(){
        let menuArr = []
        for(let j = 0; j<selectedMenus.length; j++){
            if(selectedMenus[j].checked){
                menuArr.push(selectedMenus[j].value)
            }
        }

        selectedMenuBtn.addEventListener('click',function(){
            menuResult.textContent = `Selected menus: ${menuArr.join(", ")}`
        })
    })
}


for(let i = 0; i<selectedFruits.length; i++){
    selectedFruits[i].addEventListener('change',function(){
        const fruitArr = []
        for(let j = 0; j<selectedFruits.length; j++){
            if(selectedFruits[j].checked){
                fruitArr.push(selectedFruits[j].value)
            }
        }
        selectedFruitBtn.addEventListener('click',function(){
            fruitsResult.textContent = `Selected fruits: ${fruitArr.join(', ')}`
        })
    })
}


