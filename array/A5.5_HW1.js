console.log("5.5_HW1")
console.log("---- ---- ----")

console.log("1.1")
const favoriteBooks = ["To Kill a Mockingbird", "Pride and Prejudice", "1984", "The Great Gatsby"]
console.log(favoriteBooks)
console.log("---- ---- ----")

console.log("1.2")
console.log(favoriteBooks[1])
console.log("---- ---- ----")

console.log("1.3")
console.log("Number of books: "+favoriteBooks.length)
console.log("---- ---- ----")

console.log("1.4")
console.log(favoriteBooks[favoriteBooks.length - 1])
console.log("---- ---- ----")

console.log("1.5")
for(let k = 0; k<favoriteBooks.length; k++){
    console.log(favoriteBooks[k])
}
console.log("---- ---- ----")

console.log("1.6")
favoriteBooks.push("Harry Potter and the Sorcerer's Stone")
console.log("element pused ("+favoriteBooks[favoriteBooks.length-1]+")")
console.log(favoriteBooks)
console.log("---- ---- ----")

console.log("1.7")
console.log("Updated number of books:",favoriteBooks.length)
