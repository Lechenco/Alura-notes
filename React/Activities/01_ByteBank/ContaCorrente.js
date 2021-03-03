import { Cliente } from "./Cliente.js";

export class ContaCorrente {    
    constructor() {
        this._cliente = null;
        this._saldo = 0;
    }

    set cliente(value) {
        if (value instanceof(Cliente)) {
            this._cliente = value; 
        }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
