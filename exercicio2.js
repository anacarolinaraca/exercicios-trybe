// let word = 'tryber';
// let invert = '';


// for (let index = 0; index < word.length; index += 1) {
    //     invert += word[word.length - 1 - index];
    // }
    
    // console.log(invert);
    
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorWord = array[0];
// let menorWord = array[0];

// for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > maiorWord.length) {
//         maiorWord = array[i];
//     }
// }

// for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length < menorWord.length) {
//         menorWord = array[i];
//     }
// }

// console.log(maiorWord);
// console.log(menorWord);

let numPrimo;

for (let num = 2; num <= 50; num += 1) {
    let primo = true;
    for (let divisor = 2; divisor < num; divisor += 1) {
        if (num % divisor === 0) {
            primo = false;
        }        
    }
    if (primo) {
        numPrimo = num;
    }
}

console.log(numPrimo);