// 2)	Crie um objeto chamado Forma, que tem o atributo tipo e um método chamado obterTipo.
class Forma {
    constructor(tipo) {
        this.tipo = tipo;
    }
    obterTipo() {
        return this.tipo
    }
}

const objeto = new Forma("triângulo")
console.log(objeto.obterTipo())

