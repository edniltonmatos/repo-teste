// VARIAVEIS

// const = variavel constante, ou seja, não é possível alterar os dados dessa variavel depois que ela foi definida
// var = variavel alteravel, ou seja, mesmo definida ela pode ser redefinida em algum momento do código. Tem um escopo global, então mesmo sendo
// definida ou alterado dentro de uma função ele pode ser acessado fora dela.
// let = variavel alteravel, ou seja, mesmo definida ela pode ser redefinida em algum momento do código. Tem um escopo não global, então 
// se ele for definido dentro de uma função, ele não pode ser acessado fora dele.

const testeConst = "teste"
var testeVar = "teste"
let testeLet = "teste"

// MÉTODOS DE STRING

// variável.length = número de caracteres dentro dessa string
// `string ${variavel}` = forma de adicionar uma variavel dentro de uma string sem precisar concatenar 
// variavel.toUpperCase() = deixa toda a string em maiusculo
// variavel.toLowerCase() = deixa toda a string em minusculo
// variavel.split("") = retorna uma lista dividida pelo caractere escolhido, caso você não adicionei nenhum caractere dentro das aspas ele ira retornar um array com cada caractere da string, enclusive os espaços

const firstName = "Ednilton"
const lestName = "Matos"

const names = "Felipe,Fatima,doidona"
const namesArr = names.split(",")

console.log(firstName.length)
console.log("Meu nome é " + firstName + " " + lestName)
console.log(`Meu nome é ${firstName.toUpperCase()} ${lestName.toLocaleLowerCase()}`)
console.log( namesArr[0])

// TIPOS DE DADOS

// Number = são números
// String = caracteres, ou seja, letras, números, sinais, etc. (a principal diferença entre tipo number e string é que 
//não é possível concatenar uma variavel do tipo number)
// booleanos = true or false, mais conhecido como verdadeiro ou falso.
// null = valor primitivo que representa a ausencia intencional de um valor objeto.
// undefined = valor primitivo que representa uma variavel vazia sem valor.

const testeNumber = 1
const testeString = "String"
const testeBooleano = true
const testeNull = null
const testeUndefined = undefined

// MÉTODO PARA TIPOS DE DADOS

// number.toString() = converte um número para string

let testeToString = 1

console.log(testeToString.toString())

// OPERADEDAOR PARA TIPOS DE DADOS

// typeof variavel = verifica o tipo da variavel

const testeTypeof = "variavel"

console.log(typeof testeTypeof)