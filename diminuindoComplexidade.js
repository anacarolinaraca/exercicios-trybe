let clientesTrybeBank = ['Ada', 'John', 'Gus'];

let validarCliente = (cliente) => {
    if (typeof cliente !== 'string') {
        return 'Tipo de parâmetro errado.';
    } else {
        return true;
    }
};

console.log(validarCliente(''));

let verificaCliente = (cliente) => {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {
          return clientesTrybeBank[index];
        }
    }
    return false;
};

console.log(verificaCliente('Gus'));

let removeCliente = (cliente) => {
    let valido = validarCliente(cliente);
    if (valido !== true) {
        return valido;
    }
    
    let clienteLista = verificaCliente(cliente);
    if (clienteLista === false) {
        return 'Cliente não existe no banco de dados';
    }

    clientesTrybeBank.splice(clienteLista, 1);
    return 'Cliente excluído'
};

console.log(removeCliente('Ana'));
