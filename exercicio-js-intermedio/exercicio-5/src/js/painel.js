const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {

    if (imagemAtual === imagens.length - 1) {
        return
    }



    imagemAtual++;

    esconderImageAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();

});

setaVoltar.addEventListener("click", function () {

    if(imagemAtual === 0){
        return;
    }

   
    imagemAtual--;

   
    esconderImageAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();

});


function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function esconderImageAberta() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
    const naoEhPrimeiraImagem = imagemAtual !== 0;
    if(naoEhPrimeiraImagem){
        setaVoltar.classList.remove("opacidade");
    }else{
        setaVoltar.classList.add("opacidade");
    }
    const chegouNaultimaImagem =imagemAtual !== 0 && imagemAtual === imagens.length -1;
    if(chegouNaultimaImagem){
        setaAvancar.classList.add("opacidade")
    }else{
        setaAvancar.classList.remove("opacidade")
    }
}