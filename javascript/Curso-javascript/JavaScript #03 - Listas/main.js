// ARRAYS

const names = ["felipe", "eduardo", "pedro"]
console.log(names[0])

// METODOS DE ARRAYS

// array.push() = adicionar um item no final do array
// array.unshift() = adicionar um item no início do array
// array.pop() = remove o último item do array
// array[] = acessa o item localizado nessa posição
// array.indexOF("item") = consulta a posição desse item
// array.sort() = cria um novo array dentro dessa variável com os itens em ordem alfabetica.
// array.length = lista a quantidade de items dentro do array
// Array.isArray(array) = retorna um valor booleano informando se essa variável é ou não um array

const array = ["thais","thiago","felipe"]

array.push("ednilton")
array.push("ednilton")
array.unshift("alguém")
array[0] = "não é alguém"
array.pop()
const sortedArray = array.sort()

console.log(array)
console.log(sortedArray)
console.log(array)
console.log(array.indexOf("ednilton"))
console.log(array.length)
console.log(Array.isArray(array))


// OBJETOS