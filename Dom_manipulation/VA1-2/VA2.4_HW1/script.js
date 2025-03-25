
const evenForm = document.getElementById('eventForm')
const formResult = document.getElementById('formResult')

evenForm.addEventListener('submit', function (event) {
    const userName = document.getElementById('userName')
    const userEmail = document.getElementById('userEmail')
    const selectedEvent = document.querySelector('input[name = "event"]:checked').value
    const dietRestrictions = document.querySelectorAll('input[name="diet"]:checked')
    const size = document.getElementById('size')
    event.preventDefault()
    let dietsOff = []
    for (let i = 0; i < dietRestrictions.length; i++) {
        dietsOff.push(dietRestrictions[i].value)
    }

    const userInput = `
    <h2>Registration Details:</h2>
    <p><strong>Name: </strong>${userName.value}</p>
    <p><strong>Email: </strong>${userEmail.value}</p>
    <p><strong>Event Type: </strong>${selectedEvent}</p>
    <p><strong>Dietary Restrictions: </strong>${dietsOff.join(', ')}</p>
    <p><strong>T-Shirt Size: </strong>${size.value}</p>
    `
    formResult.innerHTML = userInput
})


// note:
// 1.always declare the dom elemets in case form elments inside the event function of formElemet.