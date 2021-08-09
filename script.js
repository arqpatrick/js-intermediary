
// GLOBAL - OBJETO WINDOW


// OBJETO DOCUMENT
console.log(document)

//Exemplo de JS para alertar sobre uma mensagem no título, em um chat por exemplo
document.title = '(1) Mensagem nova'

//---------------------------------------------------------

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

//---------------------------------------------------------

//CLASSLIST

// MENU HAMBURGUER

let menuMobile = document.querySelector('.menuMobile') // coloca a class menuMobile do HTMl dentro da variável menuMobile no javascript
let botaoMenu = document.querySelector('.botaoMenu') // coloca a class notaoMenu do HTMl dentro da variável botaoMenu no javascript

let aberto = false // FLAG - define o estado de algum função

function abrirOuFecharMenu() {

  if (aberto === true) { // confere se aberto = verdadeira, então fecha o menu
    aberto = false
    menuMobile.classList.remove('aberto') //remove uma classe no menuMobile
    botaoMenu.innerText = 'Abrir Menu' // modificando o texto do menu no HTML

  } else if (aberto === false) { // confere se aberto = falso, então abre o menu
    aberto = true
    menuMobile.classList.add('aberto') //adiciona uma classe no menuMobile
    botaoMenu.innerText = 'Fechar Menu' // modificando o texto do menu no HTML
  }
}

// MENU HAMBURGUER FIM

//---------------------------------------------------------

// EVENTOS

let botaoTeste = document.querySelector('#botaoTeste')

botaoTeste.onclick = function () {
  console.log('Quando onclick só executa uma função no botão')
}

// addEventListener
let botaoTeste2 = document.querySelector('#botaoTeste2')

botaoTeste2.addEventListener ('click', function () {
  console.log('Já, quando utilizado addEventListener...')
})

botaoTeste2.addEventListener ('click', function () {
  console.log('..posso executar quantas funções desejar em apenas um botão!')
})

//---------------------------------------------------------

// função "por fora"
function cliqueBotao () {
  console.log('inclusive, posso deixar a função "por fora", e chamar só quando quiser. Assim posso reutilizar uma função em outras coisas!')
}

botaoTeste2.addEventListener ('click', cliqueBotao)

//---------------------------------------------------------

// função "por fora" em onclick

let botaoTeste3 = document.querySelector('#botaoTeste3')

function cliqueBotao2 () {
  console.log('Aqui está o evento onClick com função externa')
}

botaoTeste3.onclick = cliqueBotao2

//---------------------------------------------------------

// removeEventListener
// remover o evento, exemplo, um contador que a cada clica soma + 1 até chegar a 5, depois remove

let botaoTeste4 = document.querySelector('#botaoContador')

let contador = 0

function cliqueContador () {
  contador++

  console.log(contador)

  if (contador >= 5) {
    botaoTeste4.removeEventListener('click', cliqueContador)
  }
}

botaoTeste4.addEventListener('click', cliqueContador)

//---------------------------------------------------------

// TIPOS DE EVENTOS

let quadrado = document.querySelector('.quadrado')

//-------------
function minhaFuncao (evento) {
  console.log(evento)
}

//onclick - clicar
quadrado.onclick = minhaFuncao

// onmousemove - movimentar o mouse dentro do elemento
//quadrado.onmousemove = minhaFuncao

// onmouseenter - quando o mouse entra no elemento
//quadrado.onmouseenter = minhaFuncao

// onmouseout - quando o mouse sai do elemento
//quadrado.onmouseout = minhaFuncao

//-------------
//tamanho da janela
// function minhaFuncao (evento) {
//   console.log(evento.target.innerWidth)
// }
// window.addEventListener('resize', minhaFuncao)

//-------------
//exibir a tecla que é pressionada
// function minhaFuncao (evento) {
//   console.log(evento.key)
// }

// window.addEventListener('keypress', minhaFuncao)

// buscar JS EVENTS

//---------------------------------------------------------

// TIMEOUT

// Exemplo - um cadastro que quando ativado o botão, aparece um toast com aviso

let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

let campo = document.querySelector('#dado')

botaoCadastrar.onclick = function () {
  toast.classList.add('visible')

  toast.innerHTML = `Tarefa <b>${campo}</b> cadastrada com sucesso!`

  setTimeout(function () {
    toast.classList.remove('visible')
  }, 5000)
}

