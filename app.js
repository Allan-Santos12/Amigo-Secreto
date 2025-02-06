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
            let regex = /^[A-Za-záéíóúãõçÁÉÍÓÚÃÕÇ\s]+$/;
            if (!regex.test(amigo)) {
                alert('Nome inválido! Por favor, insira apenas letras e espaços.');
            }else{
                amigos.push(amigo);
                console.log('Nome inserido com sucesso.');
                exibirAmigos();
            }
        }
        limparCampo();
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        let amigo = amigos[i];
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    }
}

function sortearAmigo(params) {
    if (amigos.length == 0) {
        alert('A lista de amigos está vazia.');
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        console.log('Amigo Sorteado!');
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    }
}