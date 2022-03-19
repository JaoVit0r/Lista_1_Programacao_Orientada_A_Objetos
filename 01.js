// 1)	Crie uma classe chamada Pessoa que aceita o nome de uma pessoa como uma string e sua data de nascimento, no formato “ano-mes-dia” (“2000-04-25”, por exemplo).
// A classe Pessoa deve ter um método chamado calcularIdade, que receberá a data de nascimento de Pessoa e retornará a idade e um outro método, chamado  detalharPessoa, que retorne uma string com a seguinte sintaxe: "nome, idade anos". Por exemplo, se John tiver 19 anos, a função detalharPessoa de seu objeto retornará "John, 19 anos".
class Pessoa {
    constructor(nome,dataNascimento){
        this.nome = nome;
        this.dataNascimento = dataNascimento
    }
    calcularIdade(){
        let dataAtual = new Date()
        const ano = dataAtual.getFullYear()
        let idade = ano-(Number(this.dataNascimento.substring(0,4)))
        return this.idade = idade
    }
    detalharPessoa(){
        return `${this.nome}, ${this.idade} anos`
    }
}

let data = new Date()
const pessoa1 = new Pessoa("João","2003-02-13")
pessoa1.calcularIdade();
console.log(pessoa1.detalharPessoa());
