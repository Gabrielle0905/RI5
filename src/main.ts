import { Empresa } from "./Empresa";
import { Endereco } from "./Endereco";
import { Funcionario } from "./Funcionario";
import { Telefone } from "./Telefone";

let endereco1 = new Endereco(115, 'Av. Andrômeda', 'Jardim Satélite', 'São José dos Campos')
let endereco2 = new Endereco(54, 'R. Breno de Moura', 'Jardim Estoril', 'São José dos Campos')
let endereco3 = new Endereco(18, 'R. Florencio Bernardes', 'Parque do sol', 'Guaratingueta')
let endereco4 = new Endereco(24, 'Av. Cidade Jardim', 'Bosque dos Eucaliptos', 'São José dos Campos')

let tel1 = new Telefone('12', '963258741')
let tel2 = new Telefone('12', '987654123')
let tel3 = new Telefone('12', '963210458')
let tel4 = new Telefone('12', '985214706')

let telefones = [tel1, tel2, tel3, tel4]

let funcionario1 = new Funcionario('Joao', '123456', '111.111.111-11', endereco1, tel1)
let funcionario2 = new Funcionario('Maria', '987456', '222.222.222-22', endereco2, tel2)
let funcionario3 = new Funcionario('Fernando', '5641230', '333.333.333-33', endereco3, tel3)

let funcionarios = [funcionario1, funcionario2, funcionario3]

let empresa = new Empresa(funcionarios, endereco4, 'ABC Ltda', 'Happybee', '18.125.865/0001-25')

console.log(empresa.detalhar())