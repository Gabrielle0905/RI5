"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(numero, rua, bairro, cidade) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    detalhar() {
        return `Rua ${this.rua} Bairro: ${this.bairro} Cidade: ${this.cidade} numero:${this.numero}`;
    }
}
exports.Endereco = Endereco;
