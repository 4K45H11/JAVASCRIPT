console.log("A5.11_HW2")
console.log("---- ---- ----")

const productsData = [
    {
      id: 1,
      productName: "Laptop",
      price2021: 19999,
      price2022: 18999,
      price2023: 15090,
      brand: "Dell",
      productRating: 5
    },
    {
      id: 2,
      productName: "Smartphone",
      price2021: 18999,
      price2022: 17999,
      price2023: 16999,
      brand: "Samsung",
      productRating: 4
    },
    {
      id: 3,
      productName: "Smartwatch",
      price2021: 36999,
      price2022: 32999,
      price2023: 29999,
      brand: "Apple",
      productRating: 4
    }
]


console.log("1.1")

function getProductDetails(id){
    for(let i = 0; i<productsData.length; i++){
        if(productsData[i].id == id) return productsData[i]
    }
}

function generateProductDetails(id) {
    let product = getProductDetails(id)

    let report = "===== Details Card for "+product.productName+" ====="
    report += "\nID: "+id
    report += "\n------"
    report += "\nDetails:"
    report += "\n------"
    report += "\nProduct Name: "+product.productName
    report += "\nPrice in 2021: "+product.price2021
    report += "\nPrice in 2022: "+product.price2022
    report += "\nPrice in 2023: "+product.price2023
    report += "\nBrand: "+product.brand
    report += "\nRating: "+product.productRating
    report += "\n------ ------ ------"
    console.log(report)
}

generateProductDetails(3)
generateProductDetails(1)
generateProductDetails(2)
console.log("---- ---- ----")

console.log("1.2")

function getYearlyPriceProduct(yearlyPrice,minPrice){
  let res = []
  for(let i = 0; i<productsData.length; i++){
    if(productsData[i][yearlyPrice]>=minPrice) res.push(productsData[i])
  }
  return res
}

console.log("Products with price in 2021 >= 25000",getYearlyPriceProduct("price2021",25000))

console.log("Products with price in 2023 >= 16000",getYearlyPriceProduct("price2023",16000))
console.log("---- ---- ----")

console.log("1.3")
function getAveragePriceOvercutOff(cutoff){
  for(let i = 0; i<productsData.length; i++){
    let avg = (productsData[i].price2021 + productsData[i].price2022 + productsData[i].price2023)/3
    productsData[i].avgPrice = avg
    if(avg >= cutoff) console.log("Average price of 3 years for "+productsData[i].productName+ " is "+ avg)
  }
}

getAveragePriceOvercutOff(12000)
console.log("---- ---- ----")

console.log("1.4")
function getHighestAvg(productsData){
  let highest = productsData[0]
  for(let i = 0; i<productsData.length; i++){
    if(productsData[i].avgPrice> highest.avgPrice)highest = productsData[i]
  }
  return highest
}

console.log(getHighestAvg(productsData))
