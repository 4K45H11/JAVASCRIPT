console.log("A5.5_HW2")
console.log("---- ---- ----")

const topIndianArtists = ["Arijit Singh", "Neha Kakkar", "Badshah", "Shreya Ghoshal"]
console.log("1.1")
console.log(topIndianArtists)
console.log("---- ---- ----")

console.log("1.2")
console.log(topIndianArtists[2])
console.log("---- ---- ----")

console.log("1.3")
console.log("Number of artists:",topIndianArtists.length)
console.log("---- ---- ----")

console.log("1.4")
console.log(topIndianArtists[topIndianArtists.length - 1])
console.log("---- ---- ----")

console.log("1.5")
for(let i = 0; i<topIndianArtists.length; i++){
    console.log(topIndianArtists[i])
}
console.log("---- ---- ----")

console.log("1.6")
topIndianArtists.push("Amit Trivedi")
console.log(topIndianArtists)
console.log("---- ---- ----")

console.log("1.7")
console.log("Updated total numbers of artist:",topIndianArtists.length)