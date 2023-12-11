/* 1 - à vista débito, receberá 10% de desconto;
   2 - à vista em dinheiro ou pix, será 15% de desconto;
   3 - em 2x no cartão de crédito, preço normal sem juros;
   4 - acima de 2x, preço normal com juros de 10%;
   */

function aplicarDesconto(valor, desconto){
    return (valor - (valor * desconto/100));
}

function aplicarJuros(valor, juros){
    return(valor + (valor * (juros/100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10))
} else if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10))
} else if(formaDePagamento === 3){
    console.log(precoEtiqueta)
} else{
    console.log(aplicarJuros(precoEtiqueta, 10));
}