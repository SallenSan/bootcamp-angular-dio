class Carro{
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calculoDeGastoEmKm(distanciaEmKm, precoGasolina){
        return distanciaEmKm * this.gastoPorKm * precoGasolina;
    }
}

const fiesta = new Carro("Ford", "prata", 1/12 );
console.log(fiesta);
console.log(fiesta.calculoDeGastoEmKm(70,5));
