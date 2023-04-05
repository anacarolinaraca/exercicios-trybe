let statusCandidata = "reprovada";

switch(statusCandidata) {
    case 'aprovada':
        statusCandidata = 'Parabéns, você está no grupo de pessoas aprovadas!';
        break;
    case 'lista':
        statusCandidata = 'Você está na nossa lista de espera.';
        break;
    case 'reprovada':
        statusCandidata = 'Infelizmente, você reprovou.';
        break;
    
    default:
        statusCandidata = 'Informação incorreta.';
}

console.log(statusCandidata);