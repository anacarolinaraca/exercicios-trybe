let clientesTrybeBank = ['Ada', 'John', 'Gus'];

let adicionaClientes = (adicionado) => {
    if (typeof adicionado === 'string') {
        clientesTrybeBank.push(adicionado);
        return 'Cliente adicionado!'
    } else {
        return 'Erro de type';
    }
};

console.log(adicionaClientes('Ana'));
console.log(clientesTrybeBank);


let excluiClientes = (excluido) => {
    if (typeof excluido === 'string') {
        let encontrarCliente = false;
        for (let i = 0; i < clientesTrybeBank.length; i += 1) {
            if (excluido === clientesTrybeBank[i]) {
                clientesTrybeBank.splice(i, 1);
                encontrarCliente = true;
                return 'Cliente excluído!';
            };
        };

        if (encontrarCliente === false) {
            return 'Cliente não encontrado!';
        } else {
        return 'Erro de type';
        };
    };
};

console.log(excluiClientes('Ana'));
console.log(excluiClientes('João'));
console.log(clientesTrybeBank);
