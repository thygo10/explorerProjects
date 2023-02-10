//VARIAVEIS
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')
let randomNumber = Math.round(Math.random() * 10)
let numberOfTry = 1;
let hasTried = false;


// Events

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)
document.addEventListener('keypress', function (e) {
  console.log(e.key)
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// funcao callback

function handleTryClick(event) {
  event.preventDefault() // nao faca o padrao desse evento
  if (hasTried) return;
  const insertNumber = document.querySelector('#insertNumber')
  const userNumber = insertNumber.value;
  if (userNumber == '') {
    alert('Insira um numero antes de clicar em Tentar')
  } else if (Number(userNumber) < 0 || Number(userNumber) > 10) {
    alert('Insira um numero entre 0 e 10')
  }
  else {
    if (Number(insertNumber.value) == randomNumber) {
      toggleScreen()
      screen2.querySelector('h2').innerText = `Você acertou em ${numberOfTry} tentativas.`
      //console.log(`'Você acertou em ${numberOfTry} tentativas.`)
    } else {
      numberOfTry++
    }

    insertNumber.value = '';

  }}

  function handleResetClick() {
    toggleScreen();
    numberOfTry = 1
    randomNumber = Math.round(Math.random() * 10)
  }

  function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
  }
