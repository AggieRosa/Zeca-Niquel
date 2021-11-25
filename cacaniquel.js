//armazena a source de todas as imagens utilizadas
const imagens = [
  ["assets/3cb55ae101e6049451958e0da469435c.jpg"],
  ["assets/2124164--e-qual-a-diferenca-insistiu-o-menino-950x0-4.jpg"],
  ["assets/2164827-zeca-pagodinho-ja-esta-em-casa-acompanha-950x0-2.jpg"],
  [
    "assets/24527907_REExclusivo-Rio-de-Janeiro-RJ-04-03-2009-Zeca-Pagodinho-toma-chopp-Skol-na-praia-da-barra.jpg",
  ],
  ["assets/bar-do-pisca.jpg"],
  ["assets/Bar-do-Zeca-Pagodinho.jpg"],
  ["assets/coxinha-e-cerveja.jpg"],
  ["assets/unnamed.jpg"],
  ["assets/zeca-pagodinho (1).jpg"],
  ["assets/zeca-pagodinho.jpg"],
];

function slot() {
  let contagem = 0;
  //setInterval: *repete chamadas de funções ou executam
  //trechos de código, com um tempo de espera fixo entre cada chamada*
  let aleatorio = setInterval(
    function () {
      contagem++;

      //setta numeros aleatorios pra cada posição
      let esquerda = Math.floor(Math.random() * 10);
      let meio = Math.floor(Math.random() * 10);
      let direita = Math.floor(Math.random() * 10);

      //pega os 3 elementos criados em HTML
      let imgEsquerda = document.getElementById("esquerda");
      let imgMeio = document.getElementById("meio");
      let imgDireita = document.getElementById("direita");

      //define a origem desses elementos como o indice dos numeros aleatorios de cada posição
      imgEsquerda.src = imagens[esquerda];
      imgMeio.src = imagens[meio];
      imgDireita.src = imagens[direita];

      //condição que determina quantas vezes cada posição vai rodar
      if (contagem > 12) {
        let esquerdaFinal = imagens[esquerda];
        let meioFinal = imagens[meio];
        let direitaFinal = imagens[direita];

        //condições de vitótia
        if (
          esquerdaFinal == meioFinal ||
          meioFinal == direitaFinal ||
          esquerdaFinal == direitaFinal
        ) {
          document.getElementById("all").innerHTML =
            "Eita, cê quase ganhou! Toma uma coxinha com catupiry";
        } else if (
          esquerdaFinal == meioFinal &&
          direitaFinal == esquerdaFinal
        ) {
          document.getElementById("all").innerHTML =
            "Oloco, tu ganhou maluco! Uma cervejinha gelada pra você!";
        } else {
          document.getElementById("all").innerHTML =
            "ih, perdeu! Toma um derby do fundo do bolso e tenta de novo!";
        }
        contagem = 0;
        //clearInterval: limpa o setInterval
        clearInterval(aleatorio);
      }
    },
    //velocidade do setInterval
    150
  );
}

//Efeitos sonoros

let title = document.getElementById("titulo");
let som = document.getElementById("audio");
title.addEventListener("mouseenter", function () {
  som.play();
  som.loop = true;
});
title.addEventListener("mouseleave", function () {
  som.pause();
});

let botao = document.getElementById("botao");
let somBotao = document.getElementById("somBotao");

botao.addEventListener("click", function () {
  somBotao.play();
  setTimeout(function () {
    somBotao.pause();
    somBotao.currentTime = 1000;
  }, 2000);
});
