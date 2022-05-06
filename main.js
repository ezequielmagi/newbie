const cardContainer = document.querySelector('.card-container')
const modalContainer = document.querySelector('.modal-container')
const numberChoice = document.querySelectorAll('.numberChoice')
const submitButton = document.getElementById('submit-button')
const response = document.getElementById('response')

var userChoice = 0;

numberChoice.forEach( (number) => {
  number.addEventListener('click' , number => {
    userChoice = number.target.innerText
    console.log(number.target.innerText)
  })
})



const goToModal = () => {
  cardContainer.classList.add('hide')
  modalContainer.classList.remove('hide')
  response.innerText = `You selected ${userChoice} of 5`
}

submitButton.addEventListener('click', () => {
  userChoice === 0 ? alert('falta elegir una opcion') : goToModal()
  
})