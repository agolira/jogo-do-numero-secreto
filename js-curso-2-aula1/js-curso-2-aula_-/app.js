let listaDeNUmerosSorteados=[];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
};

function exibirMensagemInicial(){
     exibirTextoNaTela('h1', 'Jogo do número secreto');
     exibirTextoNaTela('p', 'escolha um número entre 1 e 10');
}

     exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','acertou!');
        let palavraTentativa = tentativas > 1 ?  'tentativas' : 'tentativa';
        let mensagemTentativa = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto)
            exibirTextoNaTela('p','o número é menor ');
        else {
            exibirTextoNaTela('p', 'o número é maior');  
        }
        //tentativas = tentativas + 1;
        tentativas ++
        limparCampo()
     }

};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeELementosNaLista = listaDeNUmerosSorteados.length;

if(quantidadeDeELementosNaLista == numeroMaximo){
        listaDeNUmerosSorteados = [];
}

    if(listaDeNUmerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaDeNUmerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
};

function limparCampo(){
    chute = document.querySelector('Input')
    chute.value = '';
} function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
};