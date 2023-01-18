// MAP, FILTER E REDUCE

// array.map(função(item){}) = executa uma função para cada item do array e esses items iram receber o valor de retorno da função.

const mapArray = [1,2,3,4,5,6]

const testeMap = mapArray.map( (item)=>{
    return false
})

console.log(mapArray)
console.log(testeMap)

// array.filter(função(item){}) = recebe uma função para cada item do array e cria um novo array. Essa função tem que retornar um valor booleano,
// se o retorno da função for true para o item, esse item sera adicionado no novo array, se for false esse item não será retornado no novo.

const filterArray = [6,5,4,3,2,1]

const testeFilter = filterArray.filter((item) =>{
    return item % 2 === 0
})

console.log(filterArray)
console.log(testeFilter)
// array.reduce(função(accumulator, item), 0) = executa uma função adicionando valores dentro do accumulator de acordo com a quantidade items
// dentro do array. exemplo, se o array tiver 5 nomes o accumulator recebe o valor da função 5 vezes.

const reduceArray = [10,20,30,40,50]

const testeReduce = reduceArray.reduce((accumulator,item) =>{
    return item
},5)

console.log(reduceArray)
console.log(testeReduce)