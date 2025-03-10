console.log("A5.9_HW2")
console.log("---- ---- ----")

console.log("Exercise 1")
console.log("---- ---- ----")
const book = {
    title : "The Great Gatsby",
    author : "F. Scott Fitzgerald",
    genre : "Fiction, Classic",
    pages : 650
}


function printBookDetails(book){
    console.log("1.1")
    if(book.pages >= 500) console.log(book.title,"is a long book.")
    else console.log(book.title,"is not a long book") 
    console.log("---- ---- ----")
    
    console.log("1.2")
    book.cover = "Hard Cover"
    console.log(book.title,"has",book.cover)
    console.log("---- ---- ----")

    console.log("1.3")
    if(book.pages > 300 && book.cover === "Hard Cover") console.log(book.title,"is heavy.")
    else console.log(book.cover,"is not heavy.")
    console.log("---- ---- ----")

}

printBookDetails(book)

console.log("Exercise 2")
console.log("---- ---- ----")

let weatherData = {
    city : "Tokyo",
    temperature : "28°C",
    humidity : 70,
    weatherCondition : "Partly Cloudy"
}

function printWeatherData(weatherData){
    console.log("2.1")
    console.log(weatherData)
    console.log("---- ---- ----")

    console.log("2.2")
    const newWeatherData = {...weatherData}
    console.log("Are newWeatherData and weatherData same object?",newWeatherData === weatherData)
    console.log("---- ---- ----")

    console.log("2.3")
    if(newWeatherData.humidity > 65) newWeatherData.weatherCondition = "Cloudy"
    console.log(newWeatherData)
    console.log("---- ---- ----")
}

printWeatherData(weatherData)

console.log("Exercise 3")
console.log("---- ---- ----")

const book1 = {
    title : "To Kill a Mockingbird",
    pages: 281
}
const book2 = {
    title : "1984",
    pages : 328
}

console.log("Is",book1.title,"greater than",book2.title,"?",(book1.pages>book2.pages))
console.log("---- ---- ----")

console.log("Exercise 4")
console.log("---- ---- ----")

function compareBooks(book1,book2){

    console.log("4.1")
    console.log(book1,book2)
    console.log("---- ---- ----")

    console.log("4.2")
    if(book1.pages>book2)console.log(book1.title,"is thicker than",book2.title)
    else console.log(book2.title,"is thicker than",book1.title)   
    console.log("---- ---- ----")

    console.log("4.3")
    if(book1.author === book2.author) console.log("Both books written by same author,",book2.author)
    else console.log("The books are written by different authors.")    

}

const book_1 = {
    title : "Animal Farm",
    author : "George Orwell",
    numberOfPages : 140
}
const book_2 = {
    title : "Coming Up for Air",
    author : "George Orwell",
    numberOfPages : 210
}

compareBooks(book_1,book_2)