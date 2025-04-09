const addItemForm = document.querySelector('#addItemForm')
const item = document.querySelector('#item')
const quantity = document.querySelector('#quantity')
const category = document.querySelector('#category')

const loadingContainer = document.querySelector('#loading')
const successContainer = document.querySelector('#success')
const errorContainer = document.querySelector('#error')

const apiUrl = `https://inventory-management-student-neog-ca.replit.app/inventory`

addItemForm.addEventListener('submit', function (event) {

    event.preventDefault() 
    loadingContainer.style.display = 'block'
    successContainer.style.display = 'none'
    
    const newItem = {
        itemName: item.value,
        quantity: quantity.value,
        category: category.value
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if (data) {
                loadingContainer.style.display = 'none'
                errorContainer.style.display = 'none'
                successContainer.style.display = 'block'
            }
        })
        .catch(function(error){
            loadingContainer.style.display = 'none'
            successContainer.style.display = 'none'
            errorContainer.style.display = 'block'
            errorContainer.innerHTML = `Sorry! item could not be saved due to some error.` 
        })
})

// "itemName": "Watermelon",
// "quantity": 4,
// "category": "Perishable",