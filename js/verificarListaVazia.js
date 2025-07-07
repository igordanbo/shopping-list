const mensagem = document.getElementById('mensagem');

function verificarListaVazia(listaCompras){
    const itensLista = listaCompras.querySelectorAll('li');

    if (itensLista.length === 0) {
        mensagem.style.display = 'block';
    } else {
        mensagem.style.display = 'none';
    }
}

export default verificarListaVazia;