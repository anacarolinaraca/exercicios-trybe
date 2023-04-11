let fruits = [3, 4, 1, 1, 1];

let somar = 0;

for (let i = 0; i < fruits.length; i += 1) {
    somar += fruits[i];
}
if (somar <= 15) {
    console.log('Valor menor que 16');
} else {
    console.log(somar);
}
