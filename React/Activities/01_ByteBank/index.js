import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

const cliente1 = new Cliente( "Jorge", 12131232134);

const cc1 = new ContaCorrente(10001, cliente1);
cc1.depositar(55.00);
cc1.sacar(5)

console.log(cc1)

const cp1 = new ContaPoupanca(50, cliente1, 1001);

console.log(cp1)