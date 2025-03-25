const jsTextarea = document.getElementById('jsTextarea')
const displayAnsJsBtn = document.getElementById('displayAnsJsBtn')
const wordCountBtn = document.getElementById('wordCountBtn')
const jsResult = document.getElementById('jsResult')

displayAnsJsBtn.addEventListener('click',function(){
    const js = jsTextarea.value
    jsResult.textContent = `Your Answer: ${js}`
})

wordCountBtn.addEventListener('click',function(){
    const js = jsTextarea.value
    let jsWordArr = js.split(" ")
    if(jsWordArr.length <= 7) {
        jsResult.innerHTML = `Your Answer: ${js}<br><br>Good`
        jsResult.style.color = 'green'
    }
    else{
        jsResult.innerHTML = `Your Answer: ${js}<br><br>Word count exceeding.`
        jsResult.style.color = 'red'
    }
})

const toDoTextarea = document.getElementById('toDoTextarea')
const displayTodoBtn = document.getElementById('displayTodoBtn')
const countTodoBtn = document.getElementById('countTodoBtn')
const todoResult = document.getElementById('todoResult')

displayTodoBtn.addEventListener('click',function(){
    const todo = toDoTextarea.value
    todoResult.textContent = `Your Todo Lists: ${todo}`
})
countTodoBtn.addEventListener('click',function(){
    const todo = toDoTextarea.value
    let todoArr = todo.split(",")
    const noOfTodo = todoArr.length
    todoResult.textContent = `Total numbers of todos: ${noOfTodo}`
    todoResult.style.color = 'green'
})


const inputPassword = document.getElementById('inputPassword')
const displayPassBtn = document.getElementById('displayPassBtn')
const checkPassBtn = document.getElementById('checkPassBtn')
const passWordResult = document.getElementById('passWordResult')

displayPassBtn.addEventListener('click',function(){
    const pass = inputPassword.value
    passWordResult.textContent = `Your Password: ${pass}`
    passWordResult.style.color = 'black'
    
})
checkPassBtn.addEventListener('click',function(){
    const pass = inputPassword.value
    let passlength = pass.length
    if(passlength <= 5 && (pass.indexOf('@')<0 || pass.indexOf('!')<0 || pass.indexOf('$')<0)){
        passWordResult.innerHTML = `Invalid Password.Password should be more than 5 characters and must contain @ or ! or $.`
        passWordResult.style.color = 'red'
    }
    else {
        passWordResult.innerHTML = `Password Accepted.`
        passWordResult.style.color = 'green'
    }
})