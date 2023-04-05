export class Negociacao {

    private _data: Date
    public readonly _quantidade: number;
    public readonly _valor: number;

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date{
        const data = new Date(this._data.getTime())
        return data
    }

    get volume(): number{
        return this._quantidade * this._valor
    }
/*
    set data(data){
        this._data = data;
    }

    set quantidade(quantidade){
        this._quantidade = quantidade;
    }
    
    set valor(valor){
        this._valor = valor;
    }
*/
}