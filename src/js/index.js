const imagemProcedimento = document.querySelectorAll('.imagem-procedimento')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

setaAvancar.addEventListener("click", () => {
    if (imagemAtual === imagemProcedimento.length - 1){
        return
    }

    imagemAtual++

    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()
})

setaVoltar.addEventListener("click", () => {
    if (imagemAtual === 0){
        return
    }

    imagemAtual--

    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()
})

function mostrarImagem(){
    imagemProcedimento[imagemAtual].classList.add("mostrar")
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
}

function mostrarOuEsconderSetas(){
    const naoEhAhPrimeiraImagem = imagemAtual !== 0
    if (naoEhAhPrimeiraImagem){
        setaVoltar.classList.remove("opacidade")
    } else {
        setaVoltar.classList.add("opacidade")
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagemProcedimento.length - 1
    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add("opacidade")
    } else {
        setaAvancar.classList.remove("opacidade")
    }
}

// function esconderImagens(){
//     imagemProcedimento.forEach(imagem => {
//         imagem.classList.remove('mostrar')
//     });
// }

// function mostrarImagens(){
//     imagemProcedimento[imagemAtual].classList.add('mostrar');
// }

// setaAvancar.addEventListener('click', function(){
//     const totalDeImagens = imagemProcedimento.length - 1;
//     if(imagemAtual === totalDeImagens){
//         return;
//     }

//     imagemAtual++;
    
//     esconderImagens()
//     mostrarImagens()
// });

// setaVoltar.addEventListener('click', function(){
//     if(imagemAtual === 0){
//         return;
//     }

//     imagemAtual--;
//     esconderImagens()
//     mostrarImagens()
// });