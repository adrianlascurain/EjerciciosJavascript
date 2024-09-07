// Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir cual es el mayor (No se debe utilizar la función Math.max)


function getMax(){
    let numbers = [];
    let number;
    for(let i = 0; i < 3; i++){
        number = prompt("Ingresa un número: ");
        number = Number(number);
        numbers.push(number);
    }
    
    let max = numbers[0];
    for(let i = 1; i < 3    ; i++){
        if(max < numbers[i]){
            max = numbers[i];
        }
    }
    return max;
}

console.log(getMax());
