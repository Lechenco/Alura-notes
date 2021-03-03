import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import {Conta} from './Conta.js'

const cliente1 = new Cliente( "Jorge", 12131232134);

const cc1 = new ContaCorrente(0, cliente1, 10001);
cc1.agencia = 317;
cc1.cliente  = cliente1;
cc1.depositar(55.00);

console.log(cc1)

const cp1 = new ContaPoupanca(50, cliente1, 1001);

console.log(cp1)