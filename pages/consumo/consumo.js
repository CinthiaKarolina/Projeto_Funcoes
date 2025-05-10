let calcularConsumo = (distancia, combustivel) => {
  let consumo = distancia / combustivel
  return consumo
}


let distancia = 500
let combustivel = 35.0

let consumoMedio = calcularConsumo(distancia, combustivel)
console.log(`${consumoMedio.toFixed(3)} km/l`)
