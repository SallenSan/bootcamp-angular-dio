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
        const imc = this.calcularIMC();
        if(imc < 18.5){
          console.log('Abaixo do peso');
        }else if(imc >= 18.5 && imc < 25){
          console.log('Peso normal');
        } else if(imc >= 25 && imc < 30){
          console.log('Acima do peso');
        }else if(imc >= 30 && imc < 40){
          console.log('obeso');
        }else{
          console.log('obesidade grave');
        }
    }

}

const p1 = new Pessoa("joao", 70, 1.75);

console.log(p1);
console.log(p1.classificarImc());