// PROGRAMAÇÃO ORIENTADA A OBJETOS

// class Nome {} = cria uma class 
// constructor(parametros){this.parametros = parametros} = redefinição da class
// metodo(){} = metodo definido dentro da class
// const variavel = new Class(parametros) = adiciona os parametros na class e atribui a essa variavel 

class Person{
    constructor(id,firstName,lastName,idade){
        this.id = id,
        this.firstName = firstName
        this.lastName = lastName
        this.idade = idade
    }

    apresentacao(){
        console.log(`olá eu me chamo ${this.firstName} ${this.lastName} e tenho ${this.idade} anos!`)
    }
}

const person1 = new Person(1 ,"Ednilton", "Matos", 18)

person1.apresentacao()

// class person extends name{constructor(propriedade){super(propriedade)}} = está criando uma nova class com base na class pai

class Person2 extends Person{
    constructor(id,firstName,lastName,idade){
        super(id,firstName,lastName,idade)
    }
    apresentacao(){
        console.log(`olá eu não me chamo ${this.firstName} ${this.lastName} e tenho ${this.idade} anos!`)
    }
}

const person2 = new Person2(2, "Edilene", "Matos", 23)

person2.apresentacao()