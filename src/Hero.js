/**
 * Classe que representa um Herói de aventura
 */
class Hero {
    /**
     * Construtor do Herói
     * @param {string} nome - Nome do herói
     * @param {number} idade - Idade do herói
     * @param {string} tipo - Tipo do herói (mago, guerreiro, monge, ninja)
     */
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    /**
     * Retorna o tipo de ataque baseado no tipo do herói
     * @returns {string} - Descrição do ataque
     */
    obterAtaque() {
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        return ataques[this.tipo] || "ataque desconhecido";
    }

    /**
     * Método que executa o ataque do herói
     * Exibe a mensagem no formato: "o {tipo} atacou usando {ataque}"
     */
    atacar() {
        const ataque = this.obterAtaque();
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }

    /**
     * Exibe informações completas do herói
     */
    exibirInfo() {
        console.log(`\n========== HERÓI ==========`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade} anos`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`===========================\n`);
    }
}

module.exports = Hero;

