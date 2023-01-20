// CONDICIONAIS 

// if(boleano){bloco de código} = geralmente utilizado para uma a duas condições.

if (true){
    console.log("Exemplo de true if")
} else {
    console.log("Exemplo de false if")
}


// switch(variavel){case: condição breack} = utilizado geralmente para várias condições

const carro = ['audi','BMW','chevrolet','tesla','Brasil']

switch(carro[2]){
    case 'audi':
        console.log(`com certeza não é um ${carro[1]}`)
        break
    case 'BMW':
        console.log(`com certeza não é um ${carro[2]}`)
        break
    case 'chevrolet':
        console.log(`com certeza não é um ${carro[3]}`)
        break
    case 'tesla':
        console.log(`com certeza não é um ${carro[0]}`)
        break
}

// booleano ? retorno1 : retorno2 = básicamente uma variação de uma linha para o if.

const teste = 1
let resp = ""

resp = teste > 1 ? "teste true" : "teste false"

console.log(resp)
// OPERADORES 

// || = ou

let testeDoisTraços = teste > 1 || teste < 1 ? "variavel é 1, certeza" : "não faço ideia"

console.log(testeDoisTraços)

// && = e

let testeDoisEs = teste > 0 && teste < 2 ? "variavel é 1, certeza" : "não faço ideia"

console.log(testeDoisEs)