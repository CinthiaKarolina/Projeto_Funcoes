function calcularVolumeEsfera(raio) {
  let pi = 3.14159
  let volume = (4.0 / 3) * pi * raio * raio * raio
  return volume
}


let raio = 3.0
let volume = calcularVolumeEsfera(raio)
console.log(`VOLUME = ${volume.toFixed(3)}`)
