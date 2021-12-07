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

const nombreGasMin = async () => {
    let response = await fetch('https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters');
    let nombreGas = await response.json();
    let nameGas = '';
    let minValue;

    for (let i in nombreGas) {
        if (nombreGas[i].hasta < minValue && nameGas){
            minValue=nombreGas[i].hasta;
            nameGas = nombreGas[i].etiqueta;
        } else if (nameGas == '') {
            minValue = nombreGas[i].hasta;
            nameGas = nombreGas[i].etiqueta;
        }

    }

    return nameGas;
} 

module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;
module.exports.calcularPorcentajes = calcularPorcentajes;
module.exports. nombreGasMin= nombreGasMin;