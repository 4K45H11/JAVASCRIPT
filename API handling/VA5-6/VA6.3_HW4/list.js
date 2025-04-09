const itemLists = document.querySelector('#itemLists')
const selectedType = document.querySelector('#selectedType')

const loadingContainer = document.querySelector('#loading')
const errorContainer = document.querySelector('#error')

const apiUrl = `https://inventory-management-student-neog-ca.replit.app/inventory`

function fetchItems() {

    loadingContainer.style.display = 'block'
    errorContainer.style.display = 'none'
    

    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if (data) {
                loadingContainer.style.display = 'none'
                errorContainer.style.display = 'none'

                for (let i = 0; i < data.length; i++) {
                    const listItem = document.createElement('li')
                    listItem.className = 'py-3 border rounded col-md-12'
                    listItem.innerHTML = `${data[i].itemName} - Quantity: ${data[i].quantity} - Category: ${data[i].category} <button id ="deleteBtn" data-id="${data[i]._id}" class="btn btn-danger float-end">Delete</button>`

                    itemLists.appendChild(listItem)
                }
            }

            deleteBtnsHandler('all')
        })
        .catch(function (error) {
            errorContainer.style.display = 'block'
            loadingContainer.style.display = 'none'
            errorContainer.textContent = `An error occured while fetching items data.`
        })
}

selectedType.addEventListener('change', function () {
    itemLists.innerHTML = `` // clearing the item list

    const filter = selectedType.value

    filteredFetch(filter)
})

function filteredFetch(filter) {
    loadingContainer.style.display = 'block'
    loadingContainer.innerHTML = 'filtering data....'
    fetch(apiUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {

            loadingContainer.style.display = 'none'

            if (data && filter !== 'all') {
                 

                for (let i = 0; i < data.length; i++) {
                    if (data[i].category === filter) {
                        const listItem = document.createElement('li')
                        listItem.className = 'py-3 border rounded col-md-12'
                        listItem.innerHTML = `${data[i].itemName} - Quantity: ${data[i].quantity} - Category: ${data[i].category} <button id ="deleteBtn" data-id="${data[i]._id}" class="btn btn-danger float-end">Delete</button>`

                        itemLists.appendChild(listItem)
                    }

                }
            }
            else if(data && filter==='all') {
                fetchItems()
            }

            deleteBtnsHandler(filter)


        })
        .catch(function (error) {
            errorContainer.style.display = 'block'
            loadingContainer.style.display = 'none'
            errorContainer.textContent = `An error occured while fetching items data.`
        })
}

function deleteBtnsHandler(type) {
    const deleteBtns = document.querySelectorAll('#deleteBtn')

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function (event) {
            const itemId = event.target.getAttribute('data-id')

            const apiDelUrl = `${apiUrl}/${itemId}`

            fetch(apiDelUrl, {
                method: 'DELETE'
            })
                .then(function (response) {
                    return response.json()
                })
                .then(function(data){
                    if(data){
                        if(type === 'all'){
                            itemLists.innerHTML = ``
                            fetchItems()
                        }
                        else{
                            itemLists.innerHTML = ``
                            filteredFetch(type)
                        }
                    }
                })

        })
    }
}

fetchItems()

// "itemName": "Watermelon",
// "quantity": 4,
// "category": "Perishable",