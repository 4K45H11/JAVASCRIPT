console.log("A5_Assignment")
console.log("---- ---- ----")

const movieData = [
    {
        name : "Kabhi Khushi Kabhi Gham",
        genre : "Drama",
        box : 500,
        satelight : 120,
        ott : 70,
        music: 20
    },
    {
        name : "Dilwale Dulhania Le Jayenge",
        genre : "Romance",
        box : 550,
        satelight : 130,
        ott : 80,
        music: 25
    },
    {
        name : "3 Idiots",
        genre : "Comedy",
        box : 600,
        satelight : 140,
        ott : 90,
        music: 30
    },
    {
        name : "Bajrangi Bhaijaan",
        genre : "Action",
        box : 700,
        satelight : 160,
        ott : 100,
        music: 40
    },
    {
        name : "Padmaavat",
        genre : "Historical",
        box : 800,
        satelight : 180,
        ott : 110,
        music: 45
    }
]

console.log(movieData)
console.log("---- ---- ----")

console.log("1.2")
console.log("Total coast added")
for(let i = 0; i<movieData.length; i++){
    let totalCost = (movieData[i].box + movieData[i].satelight+movieData[i].ott+movieData[i].music)
    movieData[i].totalCost = totalCost
}
console.log("---- ---- ----")

console.log("1.3")

function generateCostCard(movieData){

    let report = "===== Movie Cost Card =====\n"
    for(let i = 0; i<movieData.length; i++){
        report += "Name: "+movieData[i].name
        report += "\nGenre: "+movieData[i].genre
        report += "\nTotal Cost: "+movieData[i].totalCost
        report += "\n------"
        console.log(report)
        report = ""
    }

}

generateCostCard(movieData)
console.log("---- ---- ----")

console.log("1.4")

function getHighestCostMovie(data){
    let highestCostMovie = data[0]
    for(let i = 0; i<data.length; i++){
        if(data[i].totalCost > highestCostMovie.totalCost) highestCostMovie = data[i]
    }

    return highestCostMovie
}
function getTotalmovieCost(data){
    let total = 0
    for(let i = 0; i<data.length; i++){
        total += data[i].totalCost
    }
    return total
}
function getAverageSectionWise(data,section){
    let total = 0
    for(let i = 0; i<data.length; i++){
        total += data[i][section]
    }
    return total/data.length
}

function generateMovieReport(movieData){

    let highestCostMovie = getHighestCostMovie(movieData)
    let totalMovieCost = getTotalmovieCost(movieData)
    let totalAverageCost = totalMovieCost/movieData.length
    let totalBoxOfficeAverage = getAverageSectionWise(movieData,"box")
    let totalSatelightAverage = getAverageSectionWise(movieData,"satelight")
    let totalOttAverage = getAverageSectionWise(movieData,"ott")
    let totalMusicAverage = getAverageSectionWise(movieData,"music")

    let report = "===== Movie Report ====="
    report += "\nMost Expensive Movie:"
    report += "\n------"
    report += "\nName: "+highestCostMovie.name
    report += "\nGenere: "+highestCostMovie.genre
    report += "\nTotal Cost: "+highestCostMovie.totalCost+"\n"
    report += "\nMovies Average:"
    report += "\n------"
    report += "\nTotal Cost of All Movies: "
    +totalMovieCost
    report += "\nTotal Average Cost of All Movies: "+totalAverageCost
    report += "\n------"
    report += "\nTotal Box Office Average: "+totalBoxOfficeAverage
    report += "\nTotal Satellite Rights Average: "+totalSatelightAverage
    report += "\nTotal OTT Average: "+totalOttAverage
    report += "\nTotal Music Rights Average: "+totalMusicAverage


    return report
}

console.log(generateMovieReport(movieData))

