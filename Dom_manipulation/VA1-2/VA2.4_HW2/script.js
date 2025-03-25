const orderForm = document.getElementById('orderForm')
const formResult = document.getElementById('formResult')

orderForm.addEventListener('submit',function(event){

    event.preventDefault()

    const product = document.getElementById('product').value
    const quantity = document.getElementById('quantity').value
    const adress = document.getElementById('adress').value

    const payment = document.querySelector('input[name="payment"]:checked').value
    const speed = document.getElementById('speed').value
    
    const userInput = `
    <h2>Order Details:</h2>
    <p><strong>Product Name: </strong>${product}</p>
    <p><strong>Quantity: </strong>${quantity}</p>
    <p><strong>Shipping Adress: </strong>${adress}</p>
    <p><strong>Payment Method: </strong>${payment}</p>
    <p><strong>Delivery Speed: </strong>${speed}</p>
    `
    formResult.innerHTML = userInput
})