const imagemProcedimento = document.querySelectorAll('.imagem-procedimento');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens(){
    imagemProcedimento.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagens(){
    imagemProcedimento[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function(){
    const totalDeImagens = imagemProcedimento.length - 1;
    if(imagemAtual === totalDeImagens){
        return;
    }

    imagemAtual++;
    
    esconderImagens()
    mostrarImagens()
});

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;
    esconderImagens()
    mostrarImagens()
});