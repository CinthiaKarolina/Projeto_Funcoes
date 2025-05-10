function calcularLitros(tempo, velocidade) {
  let distancia = tempo * velocidade
  let litros = distancia / 12
  return litros
}

let tempo = 10
let velocidade = 85

let litrosGastos = calcularLitros(tempo, velocidade)
console.log(`${litrosGastos.toFixed(3)}`)
