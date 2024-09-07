// Elaborar una función que reciba 3 números y determinar sí uno es la suma de los otros dos

let numbers = [];
let number;
for(let i = 0; i < 3; i++){
    number = prompt("Ingresa un número: ");
    number = Number(number);
    numbers.push(number);
}

function checkSum(numbers){

    if(numbers[0] == (numbers[1] + numbers[2])){
        console.log(`${numbers[1]} + ${numbers[2]} = ${numbers[0]}`);
    }else if(numbers[1] == (numbers[0] + numbers[2])){
        console.log(`${numbers[0]} + ${numbers[2]} = ${numbers[1]}`);
    }else if(numbers[2] == (numbers[0] + numbers[1])){
        console.log(`${numbers[1]} + ${numbers[0]} = ${numbers[2]}`);
    }else{
        console.log("Ningún número es la suma de los otros dos elementos");
    }
    
}

checkSum(numbers);