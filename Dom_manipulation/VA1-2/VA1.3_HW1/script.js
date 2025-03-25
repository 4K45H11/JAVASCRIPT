
/**scope of improvements
 * the instructions can be in different lines,
 * the recipe btn function can be optimised.
 */

// text area elements

const bookTextarea = document.getElementById('bookTextarea')
const recipeTextarea = document.getElementById('recipeTextarea')
const bioTextarea = document.getElementById('bioTextarea')
const goalTextarea = document.getElementById('goalTextarea')
const storyTextarea = document.getElementById('storyTextarea')

// button elements

const bookBtn = document.getElementById('bookBtn')
const recipeBtn = document.getElementById('recipeBtn')
const bioBtn = document.getElementById('bioBtn')
const goalBtn = document.getElementById('goalBtn')
const storyBtn = document.getElementById('storyBtn')

//result elements

const bookResult = document.getElementById('bookResult')
const recipeResult = document.getElementById('recipeResult')
const bioResult = document.getElementById('bioResult')
const goalResult = document.getElementById('goalResult')
const storyResult = document.getElementById('storyResult')


//adding event listeners

bookBtn.addEventListener('click',function(){
    const books = bookTextarea.value
    bookResult.textContent = `Your favourite books: ${books}`
})

recipeBtn.addEventListener('click',function(){
    const recipe = recipeTextarea.value
    const arr = recipe.split("\n")
    //let point = arr.indexOf('')--> it is 1;

    const ingredients = arr[0]
    let instructions = ""
    for(let i = 2; i<arr.length; i++){
        instructions += arr[i]+" "
    }
    recipeResult.innerHTML = `
    <strong>Ingredients:</strong><br>${ingredients}
    <br><br>
    <strong>Instructions:</strong><br>${instructions}
    `
})

bioBtn.addEventListener('click',function(){
    const bio = bioTextarea.value
    bioResult.textContent = `Your personal bio: ${bio}`
})


goalBtn.addEventListener('click',function(){
    const goals = goalTextarea.value
    goalResult.textContent = `Your list of goals:  ${goals}`
})

storyBtn.addEventListener('click',function(){
    const story = storyTextarea.value
    storyResult.textContent = `Your sort story or anecdote is: ${story}`
})
