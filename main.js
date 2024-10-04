console.log('__x')

const buyBtn = document.querySelector('.form-buy-btn')
const form = document.querySelector('.form')
const message = document.querySelector('.message')
const checkbox1 = document.querySelector('#checkbox-1')
const checkbox2 = document.querySelector('#checkbox-2')

console.log(buyBtn)

function onBuyBtnClick() {
  console.log('in handler')
  form.classList.add('hidden')
  message.classList.remove('hidden')
}

function onFormSubmit(e) {
  e.preventDefault()
  console.log('in handler')
  form.classList.add('hidden')
  message.classList.remove('hidden')
  return null
}

form.addEventListener('submit', onFormSubmit)

// buyBtn.addEventListener('click', onBuyBtnClick)
