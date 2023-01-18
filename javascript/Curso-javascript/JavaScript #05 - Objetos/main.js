// OBJETOS

// Objetos são combinações de propriedades e valores. Em um objeto nós temos o objeto, a propriedade e o valor dessa propriedade.

const objeto = {
    firstPropriedade: "valor",
    secondPropriedade: "valor2",
    terceiraPropriedade: "valor3"
}

console.log(objeto.secondPropriedade)

// os valores das propriedades podem ser alteradas depois de definidas.

objeto.firstPropriedade = "novo valor"

console.log(objeto.firstPropriedade)

// depois de definido um objeto pode receber novar propriedades

objeto.novaProprieda = "valor da nova propriedade"

console.log(objeto.novaProprieda)

// Um objeto pode ter outro objeto como valor de uma das suas propriedades

objeto.objeto = {
    fistName: "ednilton",
    secundName: "matos"
}

console.log(objeto.objeto)

// Um objeto pode ser um dos valores de um array ou ter um array como valor de propriedade.

objeto.array = [1,2,3,4]

const array = [objeto, 1,2,3,4]

console.log(objeto.array)
// console.log(array)

// É possível consultar o valor de um objeto dentro de uma propriedade de objeto

console.log(objeto.objeto.fistName)

// é possível consultar o current valor de um array dentro de uma propriedade de objeto

console.log(objeto.array[0])