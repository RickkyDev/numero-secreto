let listaNumerosSort = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumero();
function jogo() {
    numeroSecreto = gerarNumero();
    console.log(`[GAME_INFO] O número secreto é: ${numeroSecreto}.`);
    console.log(`[GAME_INFO] O reset da lista acontece com ${parseInt(numeroLimite/10)} números gerados.`);
    console.log(`[GAME_INFO] O número máximo a ser gerado é ${numeroLimite}.`);
}
jogo();
let tentativas = 1

function exibirTexto(tag, text) {
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = text;
}

function textoInicioJogo() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 100');
}
textoInicioJogo()

function verificarEscolha() {
    let escolha = document.querySelector('input').value;
    if (escolha == numeroSecreto) {
        exibirTexto('h1', 'Você acertou!');
        exibirTexto('p', `Você descobriu o número secreto na ${tentativas}ª tentativa!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (escolha > numeroSecreto) {
            exibirTexto('p', `O número secreto é menor que ${escolha}`);
            escolha.value = ''
        } else {
            exibirTexto('p', `O número secreto é maior que ${escolha}`);
            escolha.value = ''
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let elementosLista = listaNumerosSort.length;

    if (elementosLista == parseInt(numeroLimite/10)) {
        listaNumerosSort = [];
    }

    if (listaNumerosSort.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaNumerosSort.push(numeroEscolhido);
        console.log(listaNumerosSort);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    jogo();
    limparCampo();
    tentativas = 1;
    textoInicioJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}