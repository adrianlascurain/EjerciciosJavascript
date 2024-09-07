// Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

function unsort(array){

    // Creating local variables
    let indexArray = [];
    let newArray = []
    let randomIndex;

    // Function to generate random index
    const generateRandomIndex = (len) => Math.round(Math.random()*len) 

    // Creating a new random indices array
    for(let i = 0; i < array.length ; i++){
        randomIndex = generateRandomIndex(array.length);
        while(indexArray.includes(randomIndex)){
            randomIndex = generateRandomIndex(array.length);
        }
        indexArray.push(randomIndex)
    }

    // Unsorting array
    for(let i = 0; i < array.length; i++){
        newArray.splice(indexArray[i],0,array[i]);
    }

    return newArray;
}

console.log(unsort([1,2,3,4,5,6,7,8,9,10,2000]))
