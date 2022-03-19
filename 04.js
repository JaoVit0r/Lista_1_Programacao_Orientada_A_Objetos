// 4)	Adicione um novo método ao Triangulo, chamado obterPerimetro e faça sua implementação. Lembrando que o perímetro de um triângulo é obtido através da soma dos seus lados.

// class Forma {
//     constructor(lado1,lado2,lado3) {
//         this.lado1 = lado1;
//         this.lado2 = lado2;
//         this.lado3 = lado3;
//     }
// }

class Forma {
    constructor(tipo) {
        this.tipo = tipo;
    }
    obterTipo() {
        return this.tipo
    }
}

class Triangulo extends Forma {
    constructor(lado1,lado2,lado3) {
        super(lado1,lado2,lado3)
    }

    obterPerimetro() {
        return this.lado1 + this.lado2 + this.lado3
    }
}


const triangulo = new Triangulo(1,2,3)
console.log(triangulo.obterPerimetro())

