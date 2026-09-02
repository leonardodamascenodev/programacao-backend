const TAMANHO_MIN_NOME = 3;
const TAMANHO_MIN_DESCRICAO = 5;

class Categoria {
    #nome;
    #descricao;

    constructor(nome, descricao) {
        this.#nome = nome;
        this.#descricao = descricao;
    }

    // ... getters omitidos para brevidade ...

    set nome(novoNome) {
        if (novoNome.length < TAMANHO_MIN_NOME) {
            console.log(`ERRO: o nome da categoria precisa de pelo menos ${TAMANHO_MIN_NOME} letras.`);
            return;
        }
        this.#nome = novoNome;
    }

    set descricao(novaDescricao) {
        if(novaDescricao.length < TAMANHO_MIN_DESCRICAO) {
            console.log(`ERRO: a descrição precisa de pelo menos ${TAMANHO_MIN_DESCRICAO} letras.`);
            return;
        }
        this.#descricao = novaDescricao;
    }

    descrever() {
        console.log("Categoria: " + this.#nome);
        console.log("Descrição: " + this.#descricao);
    }
}
module.exports = Categoria;