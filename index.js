 import {Cliente} from "./Cliente.js";
 import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11111123434;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 222222222222;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Alice"
conta2.cliente.cpf = 222222222222
conta2.agencia = 1002;


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2)

console.log("valor: " + valor);
console.log(conta2);

