import PromptSync from "prompt-sync";
import axios from "axios";
import { Conversion } from "./Conversion.js";
import * as Controller from "./Controller.js"

const prompt = new PromptSync();
const error = []

do{
    console.log("Para sair do programa pressione enter na moeda de origem!")

    const origem = prompt('Digite a moeda que você deseja de origem converter:  Ex:. BRL, EUR, USD ')

    if(origem === ""){
        break
    }
    
    const destino = prompt('Digite a moeda que você deseja de destino converter:  Ex:. BRL, EUR, USD ')
    const valor = prompt('Digite o valor a ser convertido: ')

    if(Controller.validatorOrigemDestino(origem, destino)){
        error.push("As duas moedas são iguais! Elas devem ser diferentes.")
    }
    if(!Controller.validatorMoeda(origem) || !Controller.validatorMoeda(destino)){
        error.push("As moedas devem ser escritas com apenas três letras")
    }
    if(!Controller.validatorValor(valor)){
        error.push("Insira um valor maior que zero!")
    }
    
    if(!Controller.validatorOrigemDestino(origem, destino) && !Controller.validatorMoeda(origem) && !Controller.validatorMoeda(destino) && Controller.validatorValor(valor)){

        const conversion = new Conversion(origem ,destino, parseFloat(valor))
        const rate = await conversion.convert_rate()
        const result = await conversion.convert_result()

        if( rate === false || result === false){
            error.push("Erro de conexão! Tente novamente mais tarde.")
            break;
        
        }else{
            console.log(`${origem} ${valor} => ${destino} ${result} `)
            console.log(`Taxa: ${rate}`)
        }
    }else{
        console.log(error)
        error.splice(0, error.length)
    }
    
}while(true)