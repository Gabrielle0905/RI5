"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, matricula, cpf, endereco, telefone) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    detalhar() {
        return `Nome:${this.nome}
matricula: ${this.matricula}
cpf: ${this.cpf}
${this.endereco.detalhar()} `;
    }
}
exports.Funcionario = Funcionario;
