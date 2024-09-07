
// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. (No se debe utilizar la función Math.max) Ejemplo del arreglo : [3, 5, 7, 1, 6]
let numberArray = [1000,3, 5, 45,99,1001, 7, 1, 6,101];

function max(array){
    let max = array[0];

    for(let i = 0; i < array.length - 1; i++){
        if(array[i+1] > max){
            max = array[i+1];
        }
    }
    return max;
}

console.log(max(numberArray))
