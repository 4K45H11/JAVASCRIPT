const studentDetails = document.querySelector('#studentDetails')

const apiUrl = `https://student-data-student-neog-ca.replit.app/students`

const loadingContainer = document.getElementById('loading')
const successContainer = document.getElementById('success')
const errorContainer = document.getElementById('error')

// "name": "jsdf",
//     "age": 12,
//     "gender": "male",
//     "marks": 99,
//     "attendance": 90,
//     "grade": "A+",

studentDetails.addEventListener('submit', function (event) {
    event.preventDefault()
    loadingContainer.style.display = 'block'
    successContainer.style.display = 'none'

    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const gender = document.getElementById('gender').value
    const grade = document.getElementById('grade').value
    const marks = document.getElementById('marks').value
    const attendence = document.getElementById('attendence').value

    const newStudent = {
        name: name,
        age: age,
        gender: gender,
        marks: marks,
        attendence: attendence,
        grade: grade
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newStudent),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if (data) {
                console.log(data)
                loadingContainer.style.display = 'none'
                successContainer.style.display = 'block'
            }
            else {
                loadingContainer.style.display = 'none'
                errorContainer.style.display = 'block'
                errorContainer.textContent = 'Something went wrong while adding student data.'
            }
        })
        .catch(function (error) {
            if(error){
                loadingContainer.style.display = 'none'
                errorContainer.style.display = 'block'
                errorContainer.textContent = 'An error occuerd while adding student data.'
            }
            
        })
})