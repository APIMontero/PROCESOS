function repetidos(nombre) {
    let nuevoNombre = nombre.toString().trim().toUpperCase();
    let reps = [];
    let resultado = [];
    let contaRepet = 0;
    let indiceBorrar = -1;
    for (var i = 0; i <= nuevoNombre.length; i++) {
        contaRepet = 1;
        indiceBorrar = -1;
        for (var j = i + 1; j <= nuevoNombre.length; j++) {
            if (nuevoNombre[j] === nuevoNombre[i]) {
                contaRepet++;
                indiceBorrar = j;
            }
        }
        //Add element to end of array
        reps.push({
            letra: nombre[i],
            cantidad: contaRepet,
            borrarAlfinal: indiceBorrar
        });

    }

    //Poner en el nuevo arreglo 
    for (let i = 0; i < reps.length; i++) {
        /*Aquellos elementos que no sean por letra con valor undefined y aque -
          llos que sean de indice borrar al final*/
        if (i !== reps[i].borrarAlfinal && reps[i].letra !== undefined) {
            resultado.push(reps[i]);
        }
    }
    // Retornar resultado con sus propiedades para ser usado más adelante.
    return resultado;
}

function extremosYMedios(repetidos) {
    let extAndMid = [];
    extAndMid.push(repetidos[0]); //Inicial
    extAndMid.push(repetidos[repetidos.length - 2]); //Final
    return extAndMid;
}

function sumaExtrYMedios(repetidos) {
    let extAndMidSUM = [];
    let resultado = [];

    extAndMidSUM.push(repetidos[0].cantidad); //Inicio
    extAndMidSUM.push(repetidos[repetidos.length - 2].cantidad); //Fin

    let sumaExtremos = extAndMidSUM[0] + extAndMidSUM[1];

    let sumaMedios = 0;

    for (let i = 1; i < repetidos.length - 2; i++) {
        sumaMedios += repetidos[i].cantidad;
    }

    extAndMidSUM.push(sumaMedios); //Medios

    resultado.push(sumaExtremos); //index = 0
    resultado.push(sumaMedios); //index = 1

    return resultado;
}

function aBase10(extremos_y_medios) {
    return [2 * ((extremos_y_medios[0] * 10) + extremosYMedios[1])];
}

function convertirAPorcentaje(numBase10) {
    return [parseFloat(numBase10.toString())];
}

function convertirAPorcentaje(porcentaje) {
    return `Porcentaje de inteligencia y es de ${porcentaje} %`;
}
//Pruebas unitarias
let nombre = "David";
let extremosMedios = sumaExtrYMedios(repetidos(nombre));
let numeroBase = 2 * (extremosMedios[0] * 10 + extremosMedios[1]);
let aPorcentaje = convertirAPorcentaje(numeroBase);

//Mostrar resultado Prueba unitaria:
console.log(`OJO: ${nombre.toUpperCase()} tiene un ${aPorcentaje}`);

//Pruebas para grupos:
let nombres = ["MARIA", "david", "PamelA", "Sebastian", "Marcelo", "Joaquin", "Gustavo"];
//Saca los porcentajes grupales
let porcentajesNombres = nombres.map(losNombres => {
    let nombre = losNombres;
    let extremosMedios = sumaExtrYMedios(repetidos(nombre));
    let numeroBase = 2 * (extremosMedios[0] * 10 + extremosMedios[1]);
    let aPorcentaje = convertirAPorcentaje(numeroBase);
    return `${nombre.toUpperCase()} tiene un ${aPorcentaje}.`;
});

//Mostrar resultado Prueba grupal de la data:
console.table(porcentajesNombres);
console.log('*************** FIN DEL PROGRAMA ***************');