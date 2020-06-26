const numeroDePasajeros = [[7,0],[8,2],[9,5],[3,1]]

// function controlDePasajeros(arr) {
//    return arr.reduce((acumulador, [arr[0], arr[1]]) { return acumulador + b })
// }

const controlDePasajeros = numeroDePasajeros => numeroDePasajeros.reduce((ac, [s,b]) => ac + s + b, 0)
