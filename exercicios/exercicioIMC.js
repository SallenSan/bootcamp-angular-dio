class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calcularIMC(){
      return this.peso / (this.altura*this.altura);
    }

    classificarImc(){
        
    }

}

const p1 = new Pessoa("joao", 70, 1.75);

console.log(p1);
console.log(p1.calcularIMC());