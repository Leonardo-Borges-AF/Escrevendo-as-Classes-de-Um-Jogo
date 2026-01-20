const Hero = require('./Hero');

// ===========================================
// Demonstração do Sistema de Heróis
// ===========================================

console.log("╔════════════════════════════════════════╗");
console.log("║     SISTEMA DE HERÓIS DE AVENTURA      ║");
console.log("╚════════════════════════════════════════╝\n");

// Criando heróis de diferentes tipos
const herois = [
    new Hero("Merlin", 150, "mago"),
    new Hero("Arthur", 35, "guerreiro"),
    new Hero("Shaolin", 45, "monge"),
    new Hero("Hanzo", 28, "ninja")
];

// Utilizando laço de repetição para exibir informações e ataques
console.log(">>> Apresentação dos Heróis <<<\n");

for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    heroi.exibirInfo();
    heroi.atacar();
    console.log("");
}

// Demonstração adicional com forEach
console.log("\n>>> Todos os heróis atacando em sequência <<<\n");

herois.forEach((heroi, index) => {
    console.log(`[${index + 1}] ${heroi.nome}:`);
    heroi.atacar();
});

// Exemplo de criação de herói individual
console.log("\n>>> Criando um novo herói <<<\n");

const novoHeroi = new Hero("Gandalf", 2019, "Mago");
novoHeroi.exibirInfo();
novoHeroi.atacar();

// Verificando tipo inválido
console.log("\n>>> Testando tipo desconhecido <<<\n");

const heroiDesconhecido = new Hero("Desconhecido", 20, "arqueiro");
heroiDesconhecido.exibirInfo();
heroiDesconhecido.atacar();

