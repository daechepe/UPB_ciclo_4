const calcularPocentajes = async (
    valorCO,
    valorCO2,
    valorHC,
    valorO2
) => {

    let response = await fetch( "https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let limits = await response.json();

    let limiteCO = limits['Parametro CO en rango estandar'];
    let limiteCO2 = limits['Parametro CO2 en rango estandar'];
    let limiteHC = limits['Parametro HC en rango estandar'];
    let limiteO2 = limits['Parametro O2 en rango estandar'];

    let porcentajeCO =  limiteCO ? (valorCO*100)/limiteCO : 0;
    let porcentajeCO2 = limiteCO2 ? (valorCO2*100)/limiteCO2 : 0;
    let porcentajeHC = limiteHC ? (valorHC*100)/limiteHC : 0;
    let porcentajeO2 = limiteO2 ? (valorO2*100)/limiteO2 : 0;

    return {
    porcentajeCO,
    porcentajeCO2,
    porcentajeHC,
    porcentajeO2,
    };
};

const registrarCO = async (value) => {
    let response = await fetch( "https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let rangosCO = await response.json();
    let candidate = rangosco[0]
    /*
    let resultado = 'fuera_de_rango';
    global.rangosCO.filter(function(element){
        if(value>=element.de && value<=element.hasta){
            resultado = element.etiqueta
        }
    })
    return resultado; */
};
const registrarCO2 = async (value) => {
    let response = await fetch( "https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    /*  let resultado = 'fuera_de_rango';
    global.rangosCO2.filter(function(element){
        if(value>=element.de && value<=element.hasta){
            resultado = element.etiqueta
        }
    })
    return resultado; */

};
const registrarHC = async (value) => {
    let response = await fetch( "https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    /*  let resultado = 'fuera_de_rango';
    global.rangosHC.filter(function(element){
        if(value>=element.de && value<=element.hasta){
            resultado = element.etiqueta
        }
    })
    return resultado; */

};
const registrarO2 = async (value) => {
    let response = await fetch( "https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters" );
    /* let resultado = 'fuera_de_rango';
    global.rangosO2.filter(function(element){
        if(value>=element.de && value<=element.hasta){
            resultado = element.etiqueta
        }
    })
    return resultado;*/
};

module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;
module.exports.calcularPocentajes = calcularPocentajes;