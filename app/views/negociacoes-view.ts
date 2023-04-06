import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
    private elemento : HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor) //div com id="negociacoesView"
    }

    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(x => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(x.data)}</td>
                            <td>${x.data}</td>
                            <td>${x._quantidade}</td>
                            <td>${x._valor}</td>
                        </tr>`
                }).join('')}
            </tbody>
        </table>
        `
    }//join coloca todos <tr> mapeados numa sequência, um array de string

    update(model: Negociacoes): void{
        const template = this.template(model);        
        this.elemento.innerHTML = template; //adiciona a tabela dentro da div
    }
}