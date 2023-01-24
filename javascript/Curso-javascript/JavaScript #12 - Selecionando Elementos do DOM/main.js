// SELECIONANDO ELEMENTOS DO DOM

// selecionando elementos

// document.querySelector("elemento") = retorna o elemento em si

let header = document.querySelector("header")

header.style.background = "#696969"

// document.querySelectorAll("elemento") = retorna uma nodeList de qualquer coisa

let h1 = document.querySelectorAll("h1") 

h1.forEach((item) =>{
    item.textContent = "alguma coisa está errada"
})

// document.getElementById("elemento") = Retorna uma referencia ao elemento

let myForm = document.getElementById("my-form")

console.log(myForm)

// document.getElementByClassName("elemento") = retorna um htmlCollection de uma class

let container = document.getElementsByClassName("container")

console.log(container)

// document.getElementTagName("elemento") = retorna um htmlCollection de uma tag html

const p = document.getElementsByTagName("p")

console.log(p)

// .innerText = acessa o texto do elemento
// .textContent = acessa o texto do elemento
