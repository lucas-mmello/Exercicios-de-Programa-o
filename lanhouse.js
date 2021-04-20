function calcular(){

var minutosValor = document.getElementById('txtMinuto').value
var tempoUso = document.getElementById('txtUso').value

var Total = (Math.ceil(tempoUso / 15)*minutosValor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

document.getElementById('outValor').textContent = 'Valor a pagar: ' + Total;

}

var btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);