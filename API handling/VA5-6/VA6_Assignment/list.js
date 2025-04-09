const playerList = document.getElementById('playerList')
const roleFilter = document.getElementById('roleFilter')

const loadingContainer = document.getElementById('loading')
const errorContainer = document.getElementById('error')

const apiUrl = `https://players-backend-student-neog-ca.replit.app/players`

function fetchPlayers() {
    loadingContainer.style.display = 'block'
    errorContainer.style.display = 'none'
    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            playerList.innerHTML = `` //emptying the list.
            loadingContainer.style.display = 'none'

            if (data) {
                for (let i = 0; i < data.length; i++) {
                    const listItem = document.createElement('li')
                    listItem.className = 'col-md-12 py-3 border rounded'
                    listItem.innerHTML = `${data[i].fullName} - Playing Role: ${data[i].playingRole} - Nationality: ${data[i].nationality} <button id="deleteBtn" data-id="${data[i]._id}" class="btn btn-danger float-end">Delete</button>`

                    playerList.appendChild(listItem)
                }
            }
            else {
                loadingContainer.style.display = 'none'
                errorContainer.style.display = 'block'
                errorContainer.innerHTML = `Something went wrong.`
            }
            deleteBtnHandler('all')
        })
        .catch(function (error) {
            loadingContainer.style.display = 'none'
            errorContainer.style.display = 'block'
            errorContainer.innerHTML = `Error occured while fetching players details.`
        })
}

roleFilter.addEventListener('change', function () {
    const selectedRole = roleFilter.value
    filteredFetch(selectedRole)
})

function filteredFetch(filter) {
    loadingContainer.style.display = 'block'
    loadingContainer.innerHTML = `Filtering data...`
    errorContainer.style.display = 'none'
    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            loadingContainer.style.display = 'none'
            if (data && filter !== 'all') {
                playerList.innerHTML = ``
                for (let i = 0; i < data.length; i++) {
                    if (data[i].playingRole === filter) {
                        const listItem = document.createElement('li')
                        listItem.className = 'col-md-12 py-3 border rounded'
                        listItem.innerHTML = `${data[i].fullName} - Playing Role: ${data[i].playingRole} - Nationality: ${data[i].nationality} <button id="deleteBtn" data-id ="${data[i]._id}" class="btn btn-danger float-end">Delete</button>`

                        playerList.appendChild(listItem)

                    }
                }

                deleteBtnHandler(filter)
            }
            else if (data && filter === 'all') {
                fetchPlayers()
                deleteBtnHandler('all')
            }
            else {
                loadingContainer.style.display = 'none'
                errorContainer.style.display = 'block'
                errorContainer.innerHTML = `Something went wrong.`
            }
        })
        .catch(function (error) {
            loadingContainer.style.display = 'none'
            errorContainer.style.display = 'block'
            errorContainer.innerHTML = `Error occured while fetching players details.`
        })
}

function deleteBtnHandler(type) {

    const deleteBtns = document.querySelectorAll('#deleteBtn')

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function (event) {
            loadingContainer.style.display = 'none'
            errorContainer.style.display = 'block'
            errorContainer.innerHTML = `Deleting data...`
            const playerId = event.target.getAttribute('data-id')

            const apiDelUrl = `${apiUrl}/${playerId}`

            fetch(apiDelUrl, {
                method: 'DELETE'
            })
                .then(function (response) {

                    return response.json()
                })
                .then(function (data) {

                    if (data) {
                        //handling notifications.

                        if (type !== 'all') {
                            errorContainer.innerHTML = ``
                            errorContainer.style.display = 'none'
                            filteredFetch(type)
                        }
                        else {
                            fetchPlayers()
                        }
                    }
                    else {
                        loadingContainer.style.display = 'none'
                        errorContainer.style.display = 'block'
                        errorContainer.innerHTML = `Could not delete the player data.`
                    }
                })
                .catch(function (error) {
                    loadingContainer.style.display = 'none'
                    errorContainer.style.display = 'block'
                    errorContainer.innerHTML = `Could not delete the player data.`
                })

        })
    }
}

fetchPlayers()


// battingHand
// :
// "Right Handed"
// bowlingStyle
// :
// "Right-Arm Fast"
// createdAt
// :
// "2025-03-27T10:36:24.970Z"
// dateOfBirth
// :
// "1978-02-03"
// fullName
// :
// "peter parker"
// nationality
// :
// "Australian"
// placeOfBirth
// :
// "karachi"
// playingRole
// :
// "Bowler"
