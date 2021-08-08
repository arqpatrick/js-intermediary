
// GLOBAL - OBJETO WINDOW


// OBJETO DOCUMENT
console.log(document)

//Exemplo de JS para alertar sobre uma mensagem no título, em um chat por exemplo
document.title = '(1) Mensagem nova'

// SELETORES

//querySelector seleciona apenas o primeiro elemento
// trocar o conteúdo da ID titulo
document.querySelector('#titulo').innerHTML = '<i>Exemplo</i>'

// trocar o conteúdo da TAG a
document.querySelector('a').innerText = '<b>teste ancora</b>'

//querySelectorAll seleciona todos os elementos

//forEach - percorre cada elemento - MÉTODO PARA ARRAY
let teste = ['a', 'b', 'c']

// FUNÇÃO ANÔNIMA / CALLBACK
teste.forEach(function (item) {
  console.log(item)
})

// SELECIONANDO MAIS DE UM ITEM POR TAG
let ancoras = document.querySelectorAll('a')

//listando os elementos
ancoras.forEach(function (elemento) {
  console.log(elemento)
})

//trocando os elementos
ancoras.forEach(function (elemento) { // FUNÇÃO ANÔNIMA / CALLBACK
  elemento.innerHTML = 'teste'
})

// SELECIONANDO MAIS DE UM ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

boxes.forEach(function (elementoBox, index) {
  elementoBox.innerHTML = 'box ' + (index + 1)
})