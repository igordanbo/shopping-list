import gerarData from "./gerarData.js";

const inputItem = document.getElementById('input-item');

let cont_checkbox = 0;

export function criarItemLista(){
    if(inputItem.value === ""){
        alert("Por favor, preencha o campo!");
        return 
    }

    const itemLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.classList.add('checkbox-item-lista');
    inputCheckbox.id = "checkbox-" + cont_checkbox++ ;

    const nomeItem = document.createElement('p');
    nomeItem.classList.add('nome-item-lista');
    nomeItem.textContent = inputItem.value;

    inputCheckbox.addEventListener('click', function(){
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = 'line-through';
            nomeItem.style.opacity = '0.5';
        } else {
            nomeItem.style.textDecoration = 'none';
            nomeItem.style.opacity = '1';
        }
    })

    const dataAtual = document.createElement('p');
    dataAtual.classList.add('texto-data');

    dataAtual.textContent = gerarData();

    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(nomeItem);
   
    itemLista.appendChild(containerItemLista);
    itemLista.appendChild(dataAtual);

    return itemLista;
}
