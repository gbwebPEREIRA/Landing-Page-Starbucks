const circulo = document.querySelector(".circulo");
const imagem = document.getElementById("img");

// Função que muda a cor do círculo e a imagem principal
function mudarCor(cor, novaImagem) {
  circulo.style.backgroundColor = cor;
  imagem.classList.remove("animate"); // remove pra poder reaplicar depois

  setTimeout(() => {
    imagem.src = novaImagem;
    imagem.classList.add("animate"); // reaplica a animação
  }, 50);
}