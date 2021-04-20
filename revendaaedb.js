function revender(){

    var veiculo = document.getElementById('txtVeiculo').value;
    var precoTotal = document.getElementById('txtPreco').value;

    var entrada = (precoTotal / 2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var prestacoes = ([precoTotal / 2]/12).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('outVeiculo').textContent =`Veiculo: ` +veiculo;
    document.getElementById('outPreco').textContent = `Entrada de ${entrada} + 12x de ${prestacoes}`;

}

var btnRevender = document.getElementById('btnRevender');
btnRevender.addEventListener('click', revender);