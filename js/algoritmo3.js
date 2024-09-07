// Elaborar una función que reciba un número y adivine un número entre el 1 y el 100 en el menor número de pasos posibles

let numberToGuess = Math.round(Math.random()*100)
console.log(numberToGuess)
function guessNumber(number){
    let numberToGuess = number;
    let numberReceived;
    do{
        numberReceived = prompt("Escribe un número");
        numberReceived = Number(numberReceived);
        if(numberReceived > numberToGuess){
            alert(`El número ${numberReceived} es mayor que el número secreto`)
        }else if(numberReceived < numberToGuess){
            alert(`El número ${numberReceived} es menor que el número secreto`)
        }else{
            alert(`El número ${numberReceived} es el número secreto`)
        }
    }while(numberToGuess !== numberReceived)
}

guessNumber(numberToGuess)