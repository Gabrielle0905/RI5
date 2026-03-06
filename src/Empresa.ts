import { Endereco } from "./Endereco"
import { Funcionario } from "./Funcionario"

export class Empresa{
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionarios: Funcionario[]
    constructor(funcionarios: Funcionario[], endereco:Endereco, razaoSocial: string, nomeFantasia: string, cnpj: string){
        this.funcionarios=funcionarios
        this.endereco=endereco
        this.razaoSocial=razaoSocial
        this.nomeFantasia=nomeFantasia
        this.cnpj=cnpj
    }

    listarFuncionarios(){
        let lista = ''
        for (let funcionario of this.funcionarios){
            lista += funcionario.detalhar() + '\n\n'
        }
        return lista
    }

    
    detalhar(){
        return `Razão Social: ${this.razaoSocial}
Nome fantasia: ${this.nomeFantasia}
cnpj: ${this.cnpj}
Endereço:
${this.endereco.detalhar()}

funcionários:
${this.listarFuncionarios()} `
    }

}