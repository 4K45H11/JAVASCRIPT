const userDetailsFrom = document.getElementById('userDetailsFrom')
const formResult = document.getElementById('formResult')

userDetailsFrom.addEventListener('submit',function(event){
    event.preventDefault()
    const userName = document.getElementById('userName').value

    const userPh = document.getElementById('userPh').value

    const userEmail = document.getElementById('userEmail').value
    let email = ``
    if(userEmail.indexOf('@')>0 && userEmail.indexOf('.')>0){
        email = userEmail
    }
    else email = `Please enter valid Email.`

    const selectedGender = document.querySelector('input[name = "gender"]:checked').value

    const graduation = document.querySelector('input[name = "graduate"]:checked').value

    const workStatus = document.getElementById('workStatus').value

    const reason = document.getElementById('reason').value

    const selectedMedia = document.querySelectorAll('input[name = "media"]:checked')
    let medias = []
    for(let i = 0; i<selectedMedia.length; i++){
        medias.push(selectedMedia[i].value)
    }

    const declaration = document.getElementById('declaration').checked

    const userInput = `
    <h2>Details Submitted:</h2>
    <p><strong>Name: </strong>${userName}</p>
    <p><strong>Phone Number: </strong>${userPh}</p>
    <p><strong>Email ID: </strong>${email}</p>
    <p><strong>Gender: </strong>${selectedGender}</p>
    <p><strong>Are you a college graduate?: </strong>${graduation}</p>
    <p><strong>Are you working anywhere parttime or full time?: </strong>${workStatus}</p>
    <p><strong>Why do you want to learn web development?: </strong>${reason}</p>
    <p><strong>How did you come to know about us?: </strong>${medias.join(', ')}</p>
    <p><strong>Declaration made: </strong>${declaration}</p>
    `
    formResult.innerHTML = userInput

})