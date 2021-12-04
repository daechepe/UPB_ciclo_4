const express = require( "express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("tu ruta aquí ", (req, res) => {
  ///api/emissionmeasurement/ranges_parameters
  //manejador paa retornar los rangos
});
app.post("tu ruta aquí", (req, res) => {
  //api/emissionmeasurement/ranges_parameters
  //range creation
});
app.get(
  "tu ruta aquí",
  //api/emission-measurement/limits
  //retornar los límites
);
module.exports = app;

/* Sprint 3
const calcularPorcentajes = async (valorCO, valorCO2, valorHC, valorO2) => {

    let response = await fetch('https://misiontic2022upb.vercel.app/api/emission-measurement/limits');
    let limits = await response.json();

    let limiteCO = limits['Parametro CO en rango estandar'];
    let limiteCO2 = limits['Parametro CO2 en rango estandar'];
    let limiteHC = limits['Parametro HC en rango estandar'];
    let limiteO2 = limits['Parametro O2 en rango estandar'];

    let porcentajeCO =  limiteCO ? (valorCO*100)/limiteCO : 0;
    let porcentajeCO2 = limiteCO2 ? (valorCO2*100)/limiteCO2 : 0;
    let porcentajeHC = limiteHC ? (valorHC*100)/limiteHC : 0;
    let porcentajeO2 = limiteO2 ? (valorO2*100)/limiteO2 : 0;

    return {porcentajeCO, porcentajeCO2, porcentajeHC, porcentajeO2};
}

const registrarCO = async (value) => {
    let response = await fetch('https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters');
    let rangosCO = await response.json();
    let candidate = rangosCO[0];
    let resultado = 'fuera_de_rango';

    if(value>=candidate.de && value<=candidate.hasta){
        resultado = 'Parametro CO en rango estandar'//candidate.etiqueta
    }
    
    return resultado;
    }

const registrarCO2 = async (value) => {
    let response = await fetch('https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters');
    let rangosCO2 = await response.json();
    let candidate = rangosCO2[1];
    let resultado = 'fuera_de_rango';

    if(value>=candidate.de && value<=candidate.hasta){
        resultado = 'Parametro CO2 en rango estandar'//candidate.etiqueta
    }

    return resultado;
    }

const registrarHC = async (value) => {
    let response = await fetch('https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters');
    let rangosHC = await response.json();
    let candidate = rangosHC[2];
    let resultado = 'fuera_de_rango';

    if(value>=candidate.de && value<=candidate.hasta){
        resultado = 'Parametro HC en rango estandar' //candidate.etiqueta
    }

    return resultado;
    }

const registrarO2 = async (value) => {
    let response = await fetch('https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters');
    let rangosO2 = await response.json();
    let candidate = rangosO2[3];
    let resultado = 'fuera_de_rango';

    if(value>=candidate.de && value<=candidate.hasta){
        resultado = 'Parametro O2 en rango estandar'//candidate.etiqueta
    }

    return resultado;
    }

*/
//global {}
/* Sprint 2
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
*/
/*
module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;
module.exports.calcularPorcentajes = calcularPorcentajes;
*/
