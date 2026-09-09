// Array de imagens
let imagens =
    ["src/assets/Carro1.jpeg",
     "src/assets/Carro2.jpeg",
     "src/assets/Carro3.jpeg"];

// posicao que vai iniciar as imagens
let index=0;
// tempo para trocar imagens
let tempo=3000; // 3 segundos 

// funcao do slideshow
function SlideShow(){
    // DOM - pega id e passa caminho das imagens
    document.getElementById("imgBanner").src=imagens[index];
    // incremento
    index++;

    // estrutura condicional
    if(index == imagens.length){
        index=0;
    }
    // metodo set time out para executar a funcao e chamar tempo
    setTimeout('SlideShow()', tempo)
}
// executando a funcao
SlideShow();

const menuIcone = document.getElementById("menu-icone")
const navMenu = document.getElementById("nav-menu")
menuIcone.addEventListener('click', ()=>{
    navMenu.classList.toggle("active")
    menuIcone.classList.toggle("open")
})