import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{

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
}