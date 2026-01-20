# 🎮 Sistema de Classes de Heróis

Sistema de classes para um jogo de aventura desenvolvido em JavaScript, demonstrando conceitos fundamentais de Programação Orientada a Objetos.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Conceitos Utilizados](#-conceitos-utilizados)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Classe Hero](#-classe-hero)
- [Tipos de Heróis e Ataques](#-tipos-de-heróis-e-ataques)
- [Como Executar](#-como-executar)
- [Exemplos de Uso](#-exemplos-de-uso)
- [Saída Esperada](#-saída-esperada)

---

## 📖 Sobre o Projeto

Este projeto implementa uma classe genérica `Hero` que representa um herói de aventura. Cada herói possui características únicas e um método de ataque específico baseado em seu tipo.

---

## 🧠 Conceitos Utilizados

| Conceito | Aplicação no Projeto |
|----------|---------------------|
| **Variáveis** | Armazenamento de nome, idade, tipo e descrições de ataque |
| **Operadores** | Concatenação de strings, comparações e acesso a propriedades |
| **Laços de Repetição** | `for` e `forEach` para iterar sobre array de heróis |
| **Estruturas de Decisão** | Objeto como mapa para determinar tipo de ataque |
| **Funções** | Métodos `atacar()`, `obterAtaque()` e `exibirInfo()` |
| **Classes e Objetos** | Classe `Hero` com construtor e métodos de instância |

---

## 📁 Estrutura do Projeto

```
Escrevendo-as-Classes-de-Um-Jogo/
│
├── src/
│   ├── Hero.js      # Classe Hero com propriedades e métodos
│   └── main.js      # Arquivo principal de demonstração
│
└── README.md        # Documentação do projeto
```

---

## 🦸 Classe Hero

### Propriedades

| Propriedade | Tipo | Descrição |
|-------------|------|-----------|
| `nome` | `string` | Nome do herói |
| `idade` | `number` | Idade do herói |
| `tipo` | `string` | Classe do herói (mago, guerreiro, monge, ninja) |

### Métodos

| Método | Retorno | Descrição |
|--------|---------|-----------|
| `constructor(nome, idade, tipo)` | - | Inicializa o herói com suas propriedades |
| `obterAtaque()` | `string` | Retorna a descrição do ataque baseado no tipo |
| `atacar()` | `void` | Exibe a mensagem de ataque no console |
| `exibirInfo()` | `void` | Exibe informações completas do herói |

---

## ⚔️ Tipos de Heróis e Ataques

| Tipo | Ataque | Mensagem de Saída |
|------|--------|-------------------|
| 🧙 Mago | magia | "o mago atacou usando magia" |
| ⚔️ Guerreiro | espada | "o guerreiro atacou usando espada" |
| 🥋 Monge | artes marciais | "o monge atacou usando artes marciais" |
| 🥷 Ninja | shuriken | "o ninja atacou usando shuriken" |

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 12 ou superior)

### Passos

1. **Clone ou baixe o projeto**

2. **Navegue até a pasta do projeto**
   ```bash
   cd Escrevendo-as-Classes-de-Um-Jogo
   ```

3. **Execute o arquivo principal**
   ```bash
   node src/main.js
   ```

---

## 💻 Exemplos de Uso

### Criando um Herói

```javascript
const Hero = require('./Hero');

// Criar um novo herói
const meuHeroi = new Hero("Merlin", 150, "mago");

// Exibir informações
meuHeroi.exibirInfo();

// Executar ataque
meuHeroi.atacar();
```

### Criando Múltiplos Heróis

```javascript
const herois = [
    new Hero("Merlin", 150, "mago"),
    new Hero("Arthur", 35, "guerreiro"),
    new Hero("Shaolin", 45, "monge"),
    new Hero("Hanzo", 28, "ninja")
];

// Todos atacam
herois.forEach(heroi => heroi.atacar());
```

---

## 📤 Saída Esperada

Ao executar o programa, a saída será semelhante a:

```
╔════════════════════════════════════════╗
║     SISTEMA DE HERÓIS DE AVENTURA      ║
╚════════════════════════════════════════╝

>>> Apresentação dos Heróis <<<

========== HERÓI ==========
Nome: Merlin
Idade: 150 anos
Tipo: mago
===========================

o mago atacou usando magia

========== HERÓI ==========
Nome: Arthur
Idade: 35 anos
Tipo: guerreiro
===========================

o guerreiro atacou usando espada

========== HERÓI ==========
Nome: Shaolin
Idade: 45 anos
Tipo: monge
===========================

o monge atacou usando artes marciais

========== HERÓI ==========
Nome: Hanzo
Idade: 28 anos
Tipo: ninja
===========================

o ninja atacou usando shuriken
```

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

---

## 👨‍💻 Autor

Desenvolvido como exercício prático de Programação Orientada a Objetos.
