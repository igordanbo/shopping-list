import { criarItemLista } from './js/criarItemLista.js';
import verificarListaVazia from './js/verificarListaVazia.js';

const listaCompras = document.getElementById('lista-de-compras');
const btnAdd = document.getElementById('adicionar-item');

btnAdd.addEventListener('click', (evento) => {
    evento.preventDefault();

    const itemLista = criarItemLista();

    listaCompras.appendChild(itemLista);

    verificarListaVazia(listaCompras);
})

verificarListaVazia(listaCompras)