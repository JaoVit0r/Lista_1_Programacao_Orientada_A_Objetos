// 3)	Crie um objeto chamado Triangulo, que herde da classe Forma. Objetos criados com Triangulo devem ter três propriedades próprias — a, b, e c, representando os comprimentos dos lados de um triângulo.

class Forma {
    constructor(tipo) {
        this.tipo = tipo;
    }
    obterTipo() {
        return this.tipo
    }
}

class Triangulo extends Forma {
    constructor(tipo,a,b,c) {
        super(tipo)
        this.a = a
        this.b = b
        this.c = c
    }
}

const triangulo = new Triangulo("triangulo",1,2,3)
console.log(triangulo)
console.log(triangulo.obterTipo())