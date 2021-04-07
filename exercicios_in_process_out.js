//Exercícios Entrada Processamento Saida JS

/*

    1 - Elaborar um programa que leia o valor de um jantar. 
    Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

    Ex:
        Valor do Jantar: R$ 80.00
        Taxa do Garçom: R$ 8.00
        Total a pagar: R$ 88.00

*/

  alert("Vamos calcular o valor do seu jantar")

var valorjantar = Number(prompt("Valor do Jantar: "));
var taxaGarcom = valorjantar * 0.1;
var valorTotal = valorjantar + taxaGarcom;

alert(`Valor do Jantar: R$ ${valorjantar.toFixed(2)}`)
alert(`Taxa do Garçom: R$ ${taxaGarcom.toFixed(2)}`)
alert(`Valor Total: R$ ${valorTotal.toFixed(2)}`)



/*

    2 - Elaborar um programa que leia a duração de uma viagem em dias e horas.
    Calcule e informe a duraão total da viagem em número de horas.


    Ex:
        Nº Dias: 2
        Nº Horas: 5
        Total de Horas: 53

*/    

alert("Vamos calcular a duração da sua viagem")

var dias = Number(prompt("Número de Dias: "));
var horas = Number(prompt("Número de Horas: "));
var totalHora = (dias * 24) + horas;


alert(`Tempo Total: ${totalHora} hrs`);


/*
    3 - Elaborar um programa que leia um número.
    Calcule e informe os seus vizinhos, ou seja, o número anterior e o número posterior  

    Exemplo:
        Número: 15
        Vizinhos: 14 e 16

*/
 
var numero = Number(prompt("Digite um numero: "));

alert(`Anterior: ${numero -1}\n Numero Posterior: ${numero + 1}`);


/*
    4 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la.
    Calcule e informe o valor a ser pago por cliente.

    Exemplo:
        Valor da conta: R$ 90.00
        Número de clientes: 3
        Valor por cliente: 30.00
*/
  
var valorConta = Number(prompt("Digite o valor da conta"));
var clientesPagar = Number(prompt("Digite o número de clientes que vão pagar"));
var contaPorCliente = (valorConta / clientesPagar);
alert(`Valor a ser pago por cliente: ${contaPorCliente}`);




/*
    5 - Elaborar um programa para uma loja, o qual leia o preço de um prouto e informe as opções de pagamento.
    Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

    Exemplo:
        Preço: R$ 60.00
        À vista: R$ 54.00
        Ou 3x de R$: 20.00
*/

alert("Vamos calcular os valores do produto");

   var precoProduto = Number(prompt("Informe o preço do produto"));
   var precoVista = (precoProduto * 0.9);
   var preco3Vezes = (precoProduto / 3);

   alert(`Opções de Pagamento: ${precoProduto} \n  ${precoVista}  \n  ${preco3Vezes}`);







/*
    6 - Elaborar um programa que leia 3 notas de um aluno em uma determinada disciplina.
    Calcule e informe a média das notas.

    Exemplo:
        1ª Nota: 7.5
        2ª Nota: 8.0
        3ª Nota: 6.4
        Média: 7.3
*/
 alert("Vamos calcular sua média em alguma disciplina");

var nota1 = Number(prompt("Informe a primeira nota"));
var nota2 = Number(prompt("Informe a segunda nota"));
var nota3 = Number(prompt("Informe a terceira nota"));
var media = (nota1 + nota2 + nota3) / 3

alert(`A sua média nessa disciplina é: ${media}`);








