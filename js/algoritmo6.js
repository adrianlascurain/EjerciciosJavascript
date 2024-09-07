// Elabora una función que reciba un número y determinar si es par o impar

const isEven = number => number % 2 == 0 ? console.log(`${number} es par`): console.log(`${number} es impar`)

isEven(Math.round(Math.random()*1000))
