const minhaImagem = document.querySelector('#minha-imagem');

minhaImagem.addEventListener('click', function() {
  console.log('Imagem clicada!');
  minhaImagem.classList.add('destaque');
});
