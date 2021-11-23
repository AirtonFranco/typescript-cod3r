interface user {
    nome: string //atributo obrigatorio
    idade?: number //atributo opcional
    [prop: string]: any //atributo dinamico, quando vc quer passar algum parametro dinamico e não precisa passar na interface
    saudar(sobrenome: string): void //pode-se usar função na interface
}

function saudarComOla(pessoa: user) {
    console.log("Ola " + pessoa.nome)
}

function mudarNome(pessoa: user) {
    return pessoa.nome = "Vane"
}

const pessoa: user = {
    nome: 'Airton',
    idade: 32,
    saudar(sobrenome: string) {
        console.log('Olá meu nome é: ' 
        + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
console.log(mudarNome(pessoa))
//saudarComOla({nome: 'Airton', idade: 32})
//saudarComOla({nome: 'Airton'})
//saudarComOla({nome: 'Airton', idade: 32, altura: 1.75})
pessoa.saudar("franco")