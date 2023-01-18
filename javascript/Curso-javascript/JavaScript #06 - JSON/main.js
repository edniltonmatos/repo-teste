// JSON

// JSON.stringify(array) = transforma um array para json
// JSON.parse(array) = transforma um jason para array

const array = [
    {
        id: 1,
        nome: "ednilton"
    },
    {
        id: 2,
        nome: "eduardo"
    }
]

const jsonConvertido = JSON.stringify(array)
const arrayConvertido = JSON.parse(jsonConvertido)

console.log(array)
console.log(jsonConvertido)
console.log(arrayConvertido)