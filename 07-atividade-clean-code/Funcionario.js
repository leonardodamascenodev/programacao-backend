const Pessoa = require("./Pessoa");

const TAXA_BONUS_PADRAO = 0.1;

class Funcionario extends Pessoa {
    #salario;

    constructor(nome, email, salario) {
        super(nome, email);
        this.#salario = salario;
    }

    get salario() {
        return this.#salario;
    }

    calcularBonus() {
        return this.#salario * TAXA_BONUS_PADRAO;
    }

    apresentar() {
        super.apresentar();
        console.log("Tipo:  Funcionário");
        console.log("Bonus: R$ " + this.calcularBonus().toFixed(2));
    }
}
module.exports = Funcionario;