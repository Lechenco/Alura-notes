import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Jorge";
cliente1.cpf = 12131232134;

const cc1 = new ContaCorrente();
cc1.agencia = 317;
cc1.cliente  = cliente1;
cc1.depositar(55.00);

console.log(cc1)

