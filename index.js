 import {Cliente} from "./Cliente.js";
 import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11111123434);

const cliente2 = new Cliente("Alice", 222222222222);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2)

console.log(ContaCorrente.numeroDeContas);

