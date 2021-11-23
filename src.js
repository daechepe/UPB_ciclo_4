const calcularPocentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {

    var porcentajes = new Object();
    //JSONArray jsonArray = new JSONArray();
    // y retorne un objeto con los porcentajes de tipo
    //{porcentajeCO: x%,porcentajeCO2:y%, porcentajeHC:z%, porcentajeO2:p%}

    if(limiteCO == 0 || limiteCO2 == 0 || limiteHC == 0 || limiteO2 == 0){
        //2. Si el límite de algún indicador es 0 entonces el porcentaje será 0 
        
    }

    porcentajes = {porcentajeCO: x%,porcentajeCO2:y%, porcentajeHC:z%, porcentajeO2:p%}
}

//Crear una función que se llame registrarCO,
const registrarCO (value) => {
// que reciba un parámetro valor, y retorne el valor cualitativo según el rango en el que esté.
//Recorrer el arreglo rangosCO
$.each(rangosCO, function(i, item) {
    console.log(item); }
    // verificar el rango en el que se encuentra la variable valor,
    if (value >= 0.001 && value <= 0.009) {
        //4. Devolver la propiedad etiqueta (valor equitativo). DEL RANGO “Parámetro CO en rango estandar”,
    } else
        //“Parametro CO fuera de rango”
}

module.exports.registrarCO = registrarCO;
module.exports.calcularPocentajes = calcularPocentajes;

const registrarCO2 = (value) => {
    //LO MISMO DE CO
}
module.exports.registrarCO2 = registrarCO2;
module.exports.calcularPocentajes = calcularPocentajes;

global.rangosCO = [
    { etiqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10 },
    { etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15 },
]
global.rangosCO2 = [
    { etiqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20 },
    { etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30 },
]
global.rangosHC = [
    { etiqueta: 'Parametro HC en rango estandar', de: 0, hasta: 10000 },
    { etiqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000 },
]
global.rangosO2 = [
    { etiqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22 },
    { etiqueta: 'Parametro O2 fuera de rango', de: 23, hasta: 30 },
]