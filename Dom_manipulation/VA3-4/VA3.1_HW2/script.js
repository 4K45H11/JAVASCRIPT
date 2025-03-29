const transactionInput =document.getElementById('transactionInput')
const amountInput = document.getElementById('amountInput')
const addExpense = document.getElementById('addExpense')

const unOrderdListOfExpenses=document.getElementById('unOrderdListOfExpenses')
const totalAmount = document.getElementById('totalAmount')

let totalSpent = 0 //(Akash special).

upDateTotalAmountSpending()

addExpense.addEventListener('click',function(){
    const listElement = document.createElement('li')
    
    //console.log(listElement)
    listElement.innerHTML =`<div class=" rounded py-2 px-2 border d-flex justify-content-between"><div>Item: ${transactionInput.value}</div><div> Rs: ${amountInput.value}</div><button onClick="deleteFinanceBtn(this)" class="btn btn-danger">Delete</button></div>`
    
    unOrderdListOfExpenses.appendChild(listElement)

    
    let expense = Number(amountInput.value) 
    totalSpent += expense
    //console.log(totalSpent)
    //console.log(totalAmount)
    upDateTotalAmountSpending()

    transactionInput.value = ``
    amountInput.value = ``

})

function deleteFinanceBtn(deleteBtn){
    const listItem = deleteBtn.parentElement.parentElement

    const totalAmountDiv = listItem.childNodes[0].childNodes[1]

    let value = totalAmountDiv.textContent
    let number = value.replace(/\D/g,"") //removing non-digits.
    let spending = Number(number)

    totalSpent-=spending
    upDateTotalAmountSpending()

    listItem.remove()
}

function upDateTotalAmountSpending(){
    
    totalAmount.innerHTML = `<p class="fs-4 border py-2 px-2">Total Amount Spent: ${totalSpent}</p>`
}


// note:
// 1.don't get the domelement directly first.

//improvement:
// 1.try to get the total amount div element from createElement and remove and apperar automatically