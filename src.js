
const calcularPocentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
    let porcentajeCO = limiteCO ? valorCO * 100 / limiteCO : 0;
    let porcentajeCO2 = limiteCO2 ? valorCO2 * 100 / limiteCO2 : 0;
    let porcentajeHC = limiteHC ? valorHC * 100 / limiteHC : 0;
    let porcentajeO2 = limiteO2 ? valorO2 * 100 / limiteO2 : 0;

    return {porcentajeCO, porcentajeCO2, porcentajeHC, porcentajeO2}
}

const registrarCO = (value) => {
    let resultado = 'fuera_de_rango';
    global.rangosCO.filter(function(element){
        if(value>=element.de && value<=element.hasta){
            resultado = element.etiqueta
        }
    })
    console.log(resultado)
    }

const registrarCO2 = (value) => {
    let resultado = 'fuera_de_rango';
    global.rangosCO2.filter(function(element){
        if(value>=element.de && value<=element.hasta){
            resultado = element.etiqueta
        }
    })
    console.log(resultado)
    }

const registrarHC = (value) => {
    let resultado = 'fuera_de_rango';
    global.rangosHC.filter(function(element){
        if(value>=element.de && value<=element.hasta){
            resultado = element.etiqueta
        }
    })
    console.log(resultado)
    }

const registrarO2 = (value) => {
    let resultado = 'fuera_de_rango';
    global.rangosO2.filter(function(element){
        if(value>=element.de && value<=element.hasta){
            resultado = element.etiqueta
        }
    })
    console.log(resultado)
    }

let global = {}

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

module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;
module.exports.calcularPocentajes = calcularPocentajes;
