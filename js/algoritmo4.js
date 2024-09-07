
// Elaborar una función que reciba un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

const isDivisbleBy3 = number => number % 3 == 0 ? console.log(`${number} es múltiplo de 3`): console.log(`${number} no es múltiplo de 3`);

function isMultiple(){
    let randomNumber = Math.round(Math.random()*100) + 100;
    isDivisbleBy3(randomNumber)
}

isMultiple()
