"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
    }
    listarFuncionarios() {
        let lista = '';
        for (let funcionario of this.funcionarios) {
            lista += funcionario.detalhar() + '\n\n';
        }
        return lista;
    }
    detalhar() {
        return `Razão Social: ${this.razaoSocial}
Nome fantasia: ${this.nomeFantasia}
cnpj: ${this.cnpj}
Endereço:
${this.endereco.detalhar()}

funcionários:
${this.listarFuncionarios()} `;
    }
}
exports.Empresa = Empresa;
