// LOOPS

// for = o loop mais comum e utilizamos geralmente quando queremos criar a várivel responsável pela condição dentro do próprio loop

let teste = ""

for (let i = 0; i <= 10; i++){
    teste += "A"
}

console.log(teste)
// for of = um loop mais visual e simples de utilizar porém ao mesmo tempo pouco flexível

const valor1 = "paralelepipedo"
let teste1 = ""

for( const valor of valor1 ){
    teste1 += "B"
}
console.log(teste1)

// forEach = loop criado exencialmente para ser utilizado em arrays, com eles nós temos acessos a propriedades e formas mais úteis de manipulalo

const array = [10,20,30,40]

array.forEach((item,index,arr) =>{
    arr[index] = item + item
})

console.log(array[3])

// for in = utilizado geralmente para manipular um objeto, mas não é um loop tão itilizado pelos seus problemas de execução

const objeto = {
    id: 123,
    firstName: "pedro",
    lestName: "jorge",
    CPF:00011133325
}

for (const key in objeto) {
    console.log( objeto[key])
}

// while = o loop ainda mias simples de ser utilizado.

let teste2 = 0

while( teste2 <= 10){
    teste2++
}

console.log(teste2)