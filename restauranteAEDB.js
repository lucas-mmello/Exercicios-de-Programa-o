function calcular(){

var buffet = document.getElementById('txtBuffet').value
var consumo = document.getElementById('txtConsumo').value

var valorPagar = ([consumo / 1000] * buffet).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

document.getElementById('outTotal').textContent = 'Valor a Pagar: ' + valorPagar;

}


var btnTotalPagar = document.getElementById('btnTotalPagar');
btnTotalPagar.addEventListener('click', calcular);