export class Negociacao {
    #quantidade;
    #data;
    #valor;

    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data(){
        return this.#data;
    }

    get quantidade(){
        return this.#quantidade;
    }
    
    get valor(){
        return this.#valor;
    }

    get volume(){
        return this.#quantidade * this.#valor
    }
/*
    set data(data){
        this.#data = data;
    }

    set quantidade(quantidade){
        this.#quantidade = quantidade;
    }
    
    set valor(valor){
        this.#valor = valor;
    }
*/
}