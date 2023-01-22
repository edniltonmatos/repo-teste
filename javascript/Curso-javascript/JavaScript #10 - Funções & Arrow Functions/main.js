// FUNÇÕES E ARROW FUNCTIONS

// função com return = adiciona o valor da função em uma variavel

function testeFunction(a, b){
    return a + b
}

const teste = testeFunction(2, 5)

console.log(teste)

// função com "=" = caso uma das propriedades não seja definida podesse deixar um valor com essa condição

function testeIgual(a,b = 10){
    console.log( a + b)
}

testeIgual(1)

// arrow function = o mesmo que uma função mas abreviada

const arrowFunction = (a,b) =>{
    return a - b
}

console.log(arrowFunction(10,1))