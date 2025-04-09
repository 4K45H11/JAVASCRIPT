
const genderSelect = document.querySelector('#gender')
const sucessMsg = document.querySelector('#sucessMsg')
const studentList = document.querySelector('#studentList')

const apiUrl = `https://student-data-student-neog-ca.replit.app/students`

function fetchStudents() {
    studentList.innerHTML = ``
    sucessMsg.innerHTML = ``
    sucessMsg.innerHTML = `loading student data...`
    sucessMsg.style.color = 'black'
    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //console.log(data)
            if (data) {

                sucessMsg.innerHTML = ''

                for (let i = 0; i < data.length; i++) {
                    const listElement = document.createElement('li')
                    listElement.className = 'py-3 border rounded col-md-12'
                    listElement.innerHTML = `${data[i].name}, Age: ${data[i].age}, Gender: ${data[i].gender}, Marks: ${data[i].marks} <button id="deleteBtn" data-id="${data[i]._id}" class="btn btn-danger float-end">Delete</button>`
                    studentList.appendChild(listElement)
                }

                if(studentList.childNodes.length === 0) studentList.innerHTML = `<h2>Sorry! no student availabe.</h2>`

            }
            else{
                sucessMsg.innerHTML = `Sorry! no data available.`
                sucessMsg.style.color = 'blue'
            }
            deleteBtnsHandler('all')
        })
        .catch(function (error) {
            sucessMsg.innerHTML = `Some error occured while fetching student list.`
            sucessMsg.style.color = 'red'
        })
}

genderSelect.addEventListener('change',function(){
    
    let filter = genderSelect.value

   // console.log(filter)

    filteredFetch(filter)

})


function filteredFetch(filter){
    sucessMsg.style.color = 'black'
    sucessMsg.innerHTML = 'filtering data...'
    
    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            // console.log(data)
            if (data) {

                sucessMsg.innerHTML = ''

                if(filter !== 'all'){
                    studentList.innerHTML = ``
                    sucessMsg.innerHTML = ``
                    for (let i = 0; i < data.length; i++) {

                        if(data[i].gender.toLowerCase() === filter){
                            const listElement = document.createElement('li')
                            listElement.className = 'py-3 border rounded col-md-12'
                            listElement.innerHTML = `${data[i].name}, Age: ${data[i].age}, Gender: ${data[i].gender}, Marks: ${data[i].marks} <button id="deleteBtn" data-id="${data[i]._id}" class="btn btn-danger float-end">Delete</button>`
                            studentList.appendChild(listElement)
                        }
                        
                    }
                    if(studentList.childNodes.length === 0) studentList.innerHTML = `<h2>Sorry! no student availabe.</h2>`
                }
                else fetchStudents()

            }
            else{
                sucessMsg.innerHTML = `Sorry! no data available.`
                sucessMsg.style.color = 'blue'
            }
            deleteBtnsHandler(filter)
        })
        .catch(function (error) {
            sucessMsg.innerHTML = `Some error occured while fetching filtered student list.`
            sucessMsg.style.color = 'red'
        })
}

function deleteBtnsHandler(type) {
    const deleteBtns = document.querySelectorAll('#deleteBtn')
    
    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function (event) {
            const itemId = event.target.getAttribute('data-id')
            sucessMsg.innerHTML = `deleting data...`
            const apiDelUrl = `${apiUrl}/${itemId}`

            fetch(apiDelUrl, {
                method: 'DELETE'
            })
                .then(function (response) {
                    return response.json()
                })
                .then(function(data){
                    sucessMsg.innerHTML = `` 
                    if(data){
                        if(type === 'all'){
                            studentList.innerHTML = ``
                            fetchStudents()
                        }
                        else{
                            studentList.innerHTML = ``
                            filteredFetch(type)
                        }
                    }
                })

        })
    }
}


fetchStudents()

// age
// :
// 32
// gender
// :
// "male"
// grade
// :
// "AA"
// marks
// :
// 100
// name
// :
// "Sheldon Cooper"