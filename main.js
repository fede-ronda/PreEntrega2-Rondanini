
// construccion de productos
class armadoPc {
    constructor(nombre, id, precio) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
}

//productos de la tienda
const ryzen3 = new armadoPc("ryzen3", 1, 50000);
const ryzen5 = new armadoPc("ryzen5", 2, 90000);
const mother1 = new armadoPc("b450", 3, 25000);
const mother2 = new armadoPc("b550", 4, 35000);
const ram1 = new armadoPc("2x16gb", 5, 40000);
const ram2 = new armadoPc("2x32gb", 6, 80000);
const placa1 = new armadoPc("rtx 2060", 7, 85000);
const placa2 = new armadoPc("rtx 3080", 8, 250000);
const placa3 = new armadoPc("rtx 4090", 9, 1000000);
const fuente1 = new armadoPc("850w", 10, 30000);
const fuente2 = new armadoPc("1200w", 11, 70000);
const gabinete1 = new armadoPc("matrexx50", 12, 25000);
const gabinete2 = new armadoPc("matrexx70", 13, 50000);

const componentes = [ryzen3, ryzen5, mother1, mother2, ram1, ram2, placa1, placa2, placa3, fuente1, fuente2, gabinete1, gabinete2]

const carrito = []

let proceDeseado = parseInt(prompt("¿Qué procesador deseas elegir? 1. Ryzen 3 | 2. Ryzen 5"));
let proceElegido = false
let infoProce

while (proceElegido === false) {
    
    if (proceDeseado === ryzen3.id) {
        proceElegido = true
        infoProce = ryzen3.precio
    } else if (proceDeseado === ryzen5.id) {
        proceElegido = true
        infoProce = ryzen5
    } else {
        proceDeseado = parseInt(prompt("Escoja un procesador de la siguiente lista: 1. Ryzen 3 | 2. Ryzen 5"))
    }
}
console.log(infoProce);

let motherDeseada = parseInt(prompt("Ahora elige una motherboard 3. B450 | 4. B550"));
let motherElegida = false
let infoMother

while (motherElegida === false) {
    if (motherDeseada === 3) {
        motherElegida = true
        infoMother = mother1
    } else if (motherDeseada === 4) {
        motherElegida = true
        infoMother = mother2
    } else {
        motherDeseada = parseInt(prompt("Escoja una mothernoard de la siguiente lista: 3. B450 | 4. B550"))
    }
}
console.log(infoMother);

let ramDeseada = parseInt(prompt("Ahora elige la capacidad de la memoria RAM 5. 2x16GB | 6. 2x32GB"));
let ramElegida = false
let infoRam

while (ramElegida === false) {
    if (ramDeseada === 5) {
        ramElegida = true
        infoRam = ram1
    } else if (ramDeseada === 6) {
        ramElegida = true
        infoRam = ram2
    } else {
        ramDeseada = parseInt(prompt("Escoja una memoria RAM de la siguiente lista: 5. 2x16GB | 6. 2x32GB"))
    }
}
console.log(infoRam);

let placaDeseada = parseInt(prompt("Ahora elige la placa de video 7. RTX 2060 | 8. RTX 3080 | 9. RTX 4090"));
let placaElegida = false
let infoPlaca

while (placaElegida === false) {
    placaDeseada
    if (placaDeseada === 7) {
        placaElegida = true
        infoPlaca = placa1
    } else if (placaDeseada === 8) {
        placaElegida = true
        infoPlaca = placa2
    } else if (placaDeseada === 9) {
        placaElegida = true
        infoPlaca = placa3
    } else {
        placaDeseada = parseInt(prompt("Escoja una placa de video de la siguiente lista: 7. RTX 2060 | 8. RTX 3080 | 9. RTX 4090"))
    }
}
console.log(infoPlaca);

let fuenteDeseada = parseInt(prompt("Ahora elige una fuente 10. 850w | 11. 1200w"));
let fuenteElegida = false
let infoFuente

while (fuenteElegida === false) {
    if (fuenteDeseada === 10) {
        fuenteElegida = true
        infoFuente = fuente1
    } else if (fuenteDeseada === 11) {
        fuenteElegida = true
        infoFuente = fuente2
    } else {
        fuenteDeseada = parseInt(prompt("Escoja una fuente de la siguiente lista: 10. 850w | 11. 1200w"))
    }
}
console.log(infoFuente);

let gabineteDeseado = parseInt(prompt("Por último elige el gabinete: 12. Matrexx 50 | 13. Matrexx 70"));
let gabineteElegido = false
let infoGabinete

while (gabineteElegido === false) {
    if (gabineteDeseado === 12) {
        gabineteElegido = true
        infoGabinete = gabinete1
    } else if (gabineteDeseado === 13) {
        gabineteElegido = true
        infoGabinete = gabinete2
    } else {
        gabineteDeseado = parseInt(prompt("Escoja un gabinete de la siguiente lista: 12. Matrexx 50 | 13. Matrexx 70"))
    }
}
console.log(infoGabinete);

console.log(carrito);
let total = 0

carrito.forEach(infoProce=>{
    total = total+infoProce.precio
});

alert("El total de su compra es de: "+total);

