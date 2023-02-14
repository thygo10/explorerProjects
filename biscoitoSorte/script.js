
const cookieImg = document.querySelector('#cookieImg')
const luckImg = document.querySelector('#luckImg')
const newLuck = document.querySelector('#newLuck')
const card = document.querySelector('.container.card')

  cookieImg.addEventListener('click', function(){

    card.classList.add('hide') && luckImg.classList.remove('hide')
  })



