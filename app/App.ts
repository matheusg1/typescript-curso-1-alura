import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
const controller = new NegociacaoController;

const form = document.querySelector(".form");

form.addEventListener('submit', e => {
    e.preventDefault();
    controller.adiciona();
});
