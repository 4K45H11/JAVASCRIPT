console.log("A5.12_HW2")
console.log("---- ---- ----")

const productsData = [
    { id: 101, name: "Laptop", price: 999.99, brand: "Dell", category: "Electronics", rating: 4.5 },
    { id: 102, name: "Smartphone", price: 599.99, brand: "Samsung", category: "Electronics", rating: 4.0 },
    { id: 103, name: "Running Shoes", price: 79.99, brand: "Nike", category: "Footwear", rating: 4.8 },
    { id: 104, name: "T-shirt", price: 19.99, brand: "Adidas", category: "Apparel", rating: 4.2 },
    { id: 105, name: "Coffee Maker", price: 49.99, brand: "Hamilton", category: "Kitchen Appliances", rating: 4.6 }
]

function getExpensiveProduct(data){
    let highest = data[0]
    for(let i = 0; i<data.length; i++){
        if(data[i].price > highest.price) highest = data[i]
    }
    return highest
}
function getHighestRatingProduct(data){
    let highest = data[0]
    for(let i = 0; i<data.length; i++){
        if(data[i].rating > highest.rating) highest = data[i]
    }
    return highest
}
function getTotalCategoryProduct(data,category){
    let ans = {}
    let totalNo = 0
    let totalPrice = 0
    let totalRating = 0
    for(let i = 0; i<data.length; i++){
        if(data[i].category === category){
            totalNo++
        }
        totalPrice+=data[i].price
        totalRating += data[i].rating

    }
    ans.totalNo = totalNo
    ans.totalPrice = totalPrice
    ans.avgRating = (totalRating/data.length)
    return ans
}

function generateProductAnalysis(productsData){

    let expensiveProduct = getExpensiveProduct(productsData)
    let totalElectronicProduct = getTotalCategoryProduct(productsData,"Electronics")
    let highestRatingProduct = getHighestRatingProduct(productsData)

    let report = "======= Product Analysis ======="
    report += "\nMost Expensive Product Details"
    report += "\n-------"
    report += "\nName: "+expensiveProduct.name
    report += "\nPrice: $"+expensiveProduct.price
    report += "\nBrand: "+expensiveProduct.brand
    report += "\nCategory: "+expensiveProduct.category
    report += "\nRating :"+expensiveProduct.rating
    report += "\n---- ---- ----"

    report += "\nTotals and Averages:"
    report += "\n-------"
    report += "\nTotal Electronics Products: "+totalElectronicProduct.totalNo
    report += "\nAverage Price: $"+(totalElectronicProduct.totalPrice/productsData.length)
    report += "\nAverage Rating: "+totalElectronicProduct.avgRating
    report += "\n---- ---- ----\n"

    report += "\nProduct with Highest Rating"
    report += "\n-------"
    report += "\nName: "+highestRatingProduct.name
    report += "\nPrice: $"+highestRatingProduct.price
    report += "\nBrand: "+highestRatingProduct.brand
    report += "\nCategory: "+highestRatingProduct.category
    report += "\nRating: "+highestRatingProduct.rating
    report += "\n---- ---- ----\n"

    report += "\nProducts with Price Less Than $50"
    report += "\n-------"

    for(let i = 0; i<productsData.length; i++){
        if(productsData[i].price < 50){
            report += "\nName: "+productsData[i].name
            report += "\nPrice: $"+productsData[i].price
            report += "\nBrand: "+productsData[i].brand
            report += "\nCategory: "+productsData[i].category
            report += "\nRating: "+productsData[i].rating
            report += "\n---" 
        }
    }

    return report
}
console.log(generateProductAnalysis(productsData))
