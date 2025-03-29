const inputTask = document.getElementById('inputTask')
const selectPriority = document.getElementById('selectPriority')
const addTaskBtn = document.getElementById('addTaskBtn')

const unOrderedLow = document.getElementById('lowPriorityTask')
const unOrderMedium = document.getElementById('mediumPriorityTask')
const unOrderHigh = document.getElementById('highPriorityTask')

addTaskBtn.addEventListener('click',function(){
    const listElement = document.createElement('li')
    //console.log(listElement)
    listElement.innerHTML = `<div class="border py-2 px-2 d-flex justify-content-between">${inputTask.value} <button class="btn btn-danger" id="deleteTaskBtn" onClick="deleteTask(this)">Delete</button></div>`
    let priority = selectPriority.value

    if(priority === "lowPriority")
    {
        unOrderedLow.appendChild(listElement)
    }
    else if(priority === "mediumPriority")
    {
        unOrderMedium.appendChild(listElement)
    }
    else unOrderHigh.appendChild(listElement)

    inputTask.value = ``

})

function deleteTask(deleteBtn){
    const listItem = deleteBtn.parentElement.parentElement
    //console.log(listItem)
    listItem.remove()
}