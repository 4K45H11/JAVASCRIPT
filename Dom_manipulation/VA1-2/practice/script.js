
const products = [
    { id: 1, name: 'Laptop', price: 1000, wishlist: true },
    { id: 2, name: 'Headphones', price: 200, wishlist: false },
    { id: 3, name: 'Smartphone', price: 800, wishlist: true },
    { id: 4, name: 'Camera', price: 500, wishlist: false },
    { id: 5, name: 'Keyboard', price: 100, wishlist: true },
]

const displayBtn = document.getElementById('displayBtn')
const result = document.getElementById('result')

displayBtn.addEventListener('click',function(){
   // console.log("clicking")
   let totalPrice = 0
   let wish = "<h3>===== Wish List =====</h3>"
   for(let i = 0; i<products.length; i++){
    
    if(products[i].wishlist){
        wish+="\n<p>Name: "+products[i].name
        wish+="\n<br>Price: "+products[i].price
        wish+="\n<br>------"
        totalPrice+=products[i].price
    }
   }
   wish+="\n<br>Total Price: "+totalPrice+"</p>"
   console.log(wish)

   result.innerHTML = wish
})
