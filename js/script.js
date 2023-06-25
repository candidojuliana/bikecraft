//ativar links do menu

const links = document.querySelectorAll('.header-menu a');


function ativarLink(link) {
   const url = location.href;
   const href = link.href;

   if (url.includes(href)) {
    link.classList.add('ativo');
   }
   
}

links.forEach(ativarLink) ; 

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {

    const elemento = document.getElementById(parametro);
    if(elemento) {
    elemento.checked = true;
}
    console.log(parametro);
}

parametros.forEach(ativarProduto);

//perguntas frequentes 

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    pergunta.setAttribute("aria-expanded", "true");
    const ativa = resposta.classList.contains("ativa");
    resposta.classList.toggle("ativa");
    console.log(resposta);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

console.log(perguntas);

// galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    matchMedia('(min-width: 1000px)').matches;
    console.log(media)
    if (media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);


// animação
if(window.SimpleAnime) {
    new SimpleAnime();
}