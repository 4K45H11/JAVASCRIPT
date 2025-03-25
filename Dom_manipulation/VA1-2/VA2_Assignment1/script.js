const feedBackForm = document.getElementById('feedBackForm')
feedBackForm.addEventListener('submit',function(event){
    event.preventDefault()

    const userName = document.getElementById('userName').value
    const feedbackText = document.getElementById('feedbackText').value
    const service = document.querySelector('input[name="service"]:checked').value
    const interest = document.querySelectorAll('input[name = "interest"]:checked')


    //console.log(interest)
    let selectedInterests = []
    for(let i = 0; i<interest.length; i++){
        selectedInterests.push(interest[i].value)
    }
    //console.log(selectedInterests)
    const overallExperience = document.getElementById('overallExperience').value

    const formResult = document.getElementById('formResult')

    const userFeedback = `<h2>Feedback Submitted</h2>
    <p><strong>Name: </strong>${userName}</p>
    <p><strong>Feedback: </strong>${feedbackText}</p>
    <p><strong>Service Rating: </strong>${service}</p>
    <p><strong>Selected Interest: </strong>${selectedInterests.join(', ')}</p>
    <p><strong>Overall Experience: </strong>${overallExperience}</p>
    `
    formResult.innerHTML = userFeedback
})