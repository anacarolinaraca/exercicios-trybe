function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
  }
  
  console.log(cumprimentaCliente('Isaac'))

let conta = 10;
function adicionarSaldo(saldo) {
    if (saldo > 0){
        return saldo + conta;
    } else {
        return "Saldo insuficiente"
    }
}

console.log(adicionarSaldo(5));

function subtrairSaldo(saldo) {
    if (saldo > 0 && saldo <= conta) {
        return conta - saldo;
    } else {
        return 'Valor de saldo insuficiente ou maior que o saldo da conta';
    }
}

console.log(subtrairSaldo(11));

function saldoTaxa (saldo, taxa) {
    if (saldo > 0 && taxa > 0) {
        return saldo * taxa;
    } else {
        return 'Valor de saldo ou valor da taxa insuficiente';
    }
}

console.log(saldoTaxa(11, 1.25));


function saldoParcelado (saldo, parcela) {
    if (saldo > 0 && parcela > 0) {
        return saldo / parcela;
    } else {
        return 'Valor de saldo ou quantidade de parcela insuficiente';
    }
}

console.log(saldoParcelado(0, 3));

