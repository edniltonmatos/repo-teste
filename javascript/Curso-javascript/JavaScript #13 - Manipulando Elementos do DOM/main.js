// MANIPULANDO ELEMENTOS DO DOM

// .remove() = remove elementosdo dom
// .style.propriedade = seleciona o estilo css do elemento
// .firstElementChild = seleciona o primeiro filho da lista
// .lastElementChild = seleciona o último filho da lista
// .children[] = seleciona o filho que foi específicado dentro da lista

const h1 = document.querySelector("h1")
const header = document.querySelector("header")
const list = document.querySelector(".items")

h1.remove()
header.style.background = "#A9A9A9"
list.firstElementChild.textContent = "Primeiro elemento"
list.lastElementChild.textContent = "último elemento"
list.children[1].textContent = "elemento do meio"


