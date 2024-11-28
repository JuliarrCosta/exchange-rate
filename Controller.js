
export function validatorMoeda(moeda){
    if(moeda !== null && moeda.length === 3){
        return true
    }
    return false;
}

export function validatorValor(valor){
    if(valor > 0){
        return true;
    }
    return false;
}

export function validatorOrigemDestino(origem, destino){
    if(origem === destino){
        return true;
    }
    return false;
}

export function formatCasasDecimais(rate){
    const rateFormated = parseFloat(rate).toFixed(6)
    return rateFormated;
}

export function formatValor(valor){
    const newValue = parseFloat(valor).toFixed(2);
    return newValue;
}