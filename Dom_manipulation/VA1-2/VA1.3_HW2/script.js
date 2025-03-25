const bookReviewTextarea = document.getElementById('bookReviewTextarea')
const displayReviewBtn = document.getElementById('displayReviewBtn')
const bookReviewResult = document.getElementById('bookReviewResult')

displayReviewBtn.addEventListener('click',function(){
    const review = bookReviewTextarea.value
    bookReviewResult.textContent = `Your book review: ${review}`
})

const personalBioTextarea = document.querySelector('#personalBioTextarea')
const displayBioBtn = document.querySelector('#displayBioBtn')
const personalBioResult = document.querySelector('#personalBioResult')

displayBioBtn.addEventListener('click',function(){
    const bio = personalBioTextarea.value
    personalBioResult.textContent = bio
    personalBioResult.style.fontStyle = 'italic'
})

const diaryTextarea = document.getElementById('diaryTextarea')
const displayDiaryEntryBtn = document.getElementById('displayDiaryEntryBtn')
const personalDiaryResult = document.getElementById('personalDiaryResult')

displayDiaryEntryBtn.addEventListener('click',function(){
    const diary = diaryTextarea.value
    let currentDateTime = new Date().toLocaleString()
    personalDiaryResult.innerHTML = `<strong>${currentDateTime}</strong><br><br>${diary}`
})