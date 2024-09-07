// Ejercicio #3
// Escribir una función que permita saber si un número se repite dentro de un arreglo.

// Casos de prueba:

// Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]

// Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]

// Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

// Algoritmo
// Tomar el elemento actual
// recorrer los elementos
// Evitar el índice del elemento actual
// Comparar el elemento actual con los demás
// Si el elemento actual es igual al elemento siguiente  
// Incrementar el contador de repeticiones
// Eliminar la coincidencia


numberArray = [1, 22, 5,1,24, 14, 24, 31, 27, 15, 105,1,1,2,1,1,3,1,1,1,1,1,1,1,1,1,1,1];

function isRepeated(array){
    let repetitions = []
    for(let i = 0; i < array.length; i++){
        let repetitionsCounter = 0;
        let currentElement = array[i];
        for(let j = 0; j < array.length; j++){
            if(i == j){
                continue;
            }else{
                if(currentElement == array[j]){
                    repetitionsCounter++;
                }
            }
            console.log(array);
        }
        console.log(repetitionsCounter);
        data = {"number": currentElement, "repetitions": repetitionsCounter}
        repetitions.push(data)
    }
    return repetitions;
}

function isRepeatedV2(array){

    let repetitions = [];
    let repetitionsCounter;
    let indexToSplice = [];
    let i = 0;
    let j;
    while(!(array[i] == null)){
        j = 0;
        repetitionsCounter = 0;
        indexToSplice = [];
        currentElement = array[i];
        while(!(array[j] == null)){
            if(i === j){
                j++;
                continue;
            }else{
                if(currentElement === array[j]){
                    repetitionsCounter++;
                    indexToSplice.push(j);
                }
                j++;
            }
        }
        indexToSplice.reverse()
        
        indexToSplice.forEach(index => {
            array.splice(index,1)
        })
        
        data = {"numer": array[i], "repetitions": repetitionsCounter};
        repetitions.push(data);
        i++;
    }
    return repetitions;

}

console.log(isRepeatedV2(numberArray));

// console.log(isRepeated(numberArray));