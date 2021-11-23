let nome = "Airton"
console.log(nome)
//nome = 28

let idade = 32
//idade = "Airton"
idade = 32.5
console.log(idade)

let verificaBolean = false
//verificaBolean = 1
console.log(verificaBolean)


//Tipos explicitos

//Aqui no caso pode se usar qualquer tipo
let minhaIdade
minhaIdade = 27
console.log(typeof minhaIdade)

//Aqui tambem pode se usar qualquer tipo
let minhaIdade2: any
minhaIdade2 = 'Airton'
console.log(typeof minhaIdade2)

//Aqui pode se usar apenas o tipo que foi definido
let minhaIdade3: number
minhaIdade3 = 32
console.log(typeof minhaIdade3)

let nome2: string = "Airton"
console.log(typeof nome2)

//Arrays

//Array do tipo any, aceita todos os tipos na araay
let hobbies: any[] = ["Rua neliese", 3202, 90.5]
console.log(hobbies[0]) //posição zero do array
console.log(typeof hobbies)

//array do tipo number, aceita apnas tipo number
let newArray: number[] = [1, 2, 5, 6]
console.log(newArray[0])

//Tuplas

let user: [string, number] = ["Airton", 32]

//enums

enum Cor {
    Cinza = 100,
    Azul = 10,
    Verde
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Cinza)

//any
//O tipo any volta ao modelo de tipagem dinamica
let carro: any = 'BMW'
console.log(carro)

carro = {
    marca: 'BMW', 
    ano: 1999
}

console.log(carro)
