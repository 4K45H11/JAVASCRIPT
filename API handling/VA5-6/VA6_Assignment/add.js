const playerDetails = document.getElementById('playerDetails')

const loadingContainer = document.getElementById('loading')
const successContainer = document.getElementById('success')
const errorContainer = document.getElementById('error')

const apiUrl = `https://players-backend-student-neog-ca.replit.app/players`

playerDetails.addEventListener('submit', function (event) {
    event.preventDefault()
    loadingContainer.style.display = 'block'
    successContainer.style.display = 'none'
    errorContainer.style.display = 'none'

    const name = document.getElementById('name').value
    const birthday = document.getElementById('birthday').value
    const nation = document.getElementById('nation').value
    const place = document.getElementById('place').value
    const address = document.getElementById('address').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const role = document.getElementById('role').value
    const battingHand = document.getElementById('battingHand').value
    const bowlingStyle = document.getElementById('bowlingStyle').value

    const newPlayer = {
        fullName: name,
        dateOfBirth: birthday,
        nationality: nation,
        placeOfBirth: place,
        contactAddress: address,
        phoneNumber: phone,
        emailAddress: email,
        playingRole: role,
        battingHand: battingHand,
        bowlingStyle: bowlingStyle
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newPlayer),
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
                successContainer.style.display = 'block'
                errorContainer.style.display = 'none'
            }
            else {
                loadingContainer.style.display = 'none'
                successContainer.style.display = 'none'
                errorContainer.style.display = 'block'
                errorContainer.innerHTML = `Something went wrong.`
            }
        })
        .catch(function (error) {
            loadingContainer.style.display = 'none'
            successContainer.style.display = 'none'
            errorContainer.style.display = 'block'
            errorContainer.innerHTML = `Error occurred while adding player details.`
        })
})