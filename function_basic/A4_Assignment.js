console.log("A4_Assignment")
console.log("---- ---- ----")

let product1 = "Laptop"
let product2 = "Running Shoes"
let product3 = "T-shirt"

let price1 = 999
let price2 = 799
let price3 = 199

console.log("Exercise 1")
console.log("---- ---- ----")
let category1 = "Electronics"
let category2 = "Footwear"
let category3 = "Cloths"

function getTotalPrice(){
    return price1+price2+price3
}
let totalPrice = getTotalPrice()

console.log("Total Price: $"+totalPrice)
console.log("---- ---- ----")

console.log("Exercise 2")
console.log("---- ---- ----")
let discount = 0.1

function returnDiscountedPrice(product){
    return product*(1-discount)
}
let discountedPrice = returnDiscountedPrice(price1)
console.log("Discounted Electronics Item Price: $"+discountedPrice)
let finalTotalPrice =  discountedPrice+price2+price3
console.log("---- ---- ----")

console.log("Exercise 3")
console.log("---- ---- ----")

console.log("====== Cart Summary ======\n")

console.log("Product 1: ",product1)
console.log("Price of Product 1: $"+price1)
console.log("Discount: "+discount)
console.log("Final Price of Product 1: $"+discountedPrice+"\n")

console.log("Product 2: ",product2)
console.log("Price of Product 2: $"+price2)
console.log("Discount: 0")
console.log("Final Price of Product 2: $"+price2+"\n")

console.log("Product 3: ",product3)
console.log("Price of Product 3: $"+price3)
console.log("Discount: 0")
console.log("Final Price of Product 3: $"+price3+"\n")

console.log("Total Cart Price: $"+finalTotalPrice)