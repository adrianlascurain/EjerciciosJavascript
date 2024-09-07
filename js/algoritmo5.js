// Elaborar una función que reciba 3 números y determinar sí uno es la suma de los otros dos

let numbers = [];
let number;
for(let i = 0; i < 3; i++){
    number = prompt("Ingresa un número: ");
    number = Number(number);
    numbers.push(number);
}

for(let i = 0; i < 3; i++){
    if(numbers[i] == (numbers[i+1] + numbers[i+2]))
}