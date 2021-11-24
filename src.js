
const calcularPocentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
    //var porcentajes = new Object();
    var porcentajes = {}
    //JSONArray jsonArray = new JSONArray();
    // y retorne un objeto con los porcentajes de tipo
    //{porcentajeCO: x%,porcentajeCO2:y%, porcentajeHC:z%, porcentajeO2:p%}

    if(limiteCO == 0 || limiteCO2 == 0 || limiteHC == 0 || limiteO2 == 0){
        //2. Si el límite de algún indicador es 0 entonces el porcentaje será 0 

        
    }

    porcentajes['porcentajeCO'] = 'x%';
    porcentajes['porcentajeCO2'] = 'y%';
    porcentajes['porcentajeHC'] = 'z%';
    porcentajes['porcentajeO2'] = 'p%';

    return porcentajes;
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

const registrar02 = (value) => {
    let resultado = 'fuera_de_rango';
    global.rangos02.filter(function(element){
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
module.exports.registrar02 = registrar02;
module.exports.calcularPocentajes = calcularPocentajes;
