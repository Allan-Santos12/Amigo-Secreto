//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    console.log('botão clicado!');

    if (amigo == ""){
        alert('Por favor, insira um nome.');
    }
    else {
        if (!isNaN(amigo)){
        alert('Valor digitado é um número, e não é válido!');
        }else{
            amigos.push(amigo);
            console.log('Nome inserido com sucesso.');
        }
        limparCampo();
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function sortearAmigo(params) {
    let amigo = document.querySelector
    
}