// María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño. (No se debe utilizar la función Math.min)
let numberArray = [-1, 3, 4,-21, 2, 6]

function min(array){
    let min = array[0];

    for(let i = 0; i < array.length - 1; i++){
        if(array[i+1] < min){
            min = array[i+1];
        }
    }
    return min;
}

console.log(min(numberArray));