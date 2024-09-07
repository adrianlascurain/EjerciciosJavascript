
// Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir el menor de tres números (No se debe utilizar la función Math.min)

function getMin(){
    let numbers = [];
    let number;
    for(let i = 0; i < 3; i++){
        number = prompt("Ingresa un número: ");
        number = Number(number);
        numbers.push(number);
    }
    
    let min = numbers[0];
    for(let i = 1; i < 3; i++){
        if(min > numbers[i]){
            min = numbers[i];
        }
    }
    return min;
}

console.log(getMin());