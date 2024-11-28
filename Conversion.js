import axios, { Axios } from "axios";

export class Conversion{

    _valor;
    _origem;
    _destino
    _key;
    _URL;

    constructor(origem, destino, valor){ 
        this._origem = origem
        this._key = 'fd2a73f00d7cfe74dd454389';
        this._URL = `https://v6.exchangerate-api.com/v6/${this._key}/pair/${origem}/${destino}/${valor}`
        this._destino = destino
        this._valor = valor
    }

    get URL(){
        return this._URL;
    }
    get destino(){
        return this._destino
    }
    get valor(){
        return this._valor;
    }

    async convert_rate(){
        try{
            const response = await axios.get(this.URL)
            return response.data.conversion_rate

        }catch(error){
            const errorType = error.response?.data?.["error-type"]
            if(errorType === "unsupported-code"){
                return 1;
            }
            return false;
        }
    }
    async convert_result(){
        try{
            const response = await axios.get(this.URL)
            return response.data.conversion_result

        }catch(error){
            const errorType = error.response?.data?.["error-type"]         
            if(errorType === "unsupported-code"){
                return 1;
            }
            return false;
        }
    }

}

const test = new Conversion('BRL','USD',200)
console.log(test.URL)



