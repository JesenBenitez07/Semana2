const fs = require('fs')
const { arrayBuffer } = require('stream/consumers')

var vehiculos = JSON.parse (fs.readFileSync ('data.json'))
console.log(vehiculos)

for (let i=0;i<5; i++){
    console.log(`Vehiculo numero ${i+1}:${vehiculos[i].marca}`)
}

//vehiculos.forEach(item => console.log(item));

console.log(vehiculos)
vehiculos.push({marca: 'BMW', color: 'Blanco', year: 2006})
console.log(vehiculos)

fs.writeFileSync('data.json',JSON.stringify(vehiculos))