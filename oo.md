# 🚀 Apostila Completa de Orientação a Objetos com TypeScript

# Apostila de Orientação a Objetos em TypeScript

## Introdução à Orientação a Objetos (OO)

A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o software em torno de "objetos", que podem conter dados, na forma de campos (atributos ou propriedades), e código, na forma de procedimentos (métodos). A POO se baseia em alguns princípios fundamentais que visam aumentar a modularidade, a reutilização de código e a facilidade de manutenção.

# Apostila de Orientação a Objetos em TypeScript

## Introdução à Orientação a Objetos (OO)

A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o software em torno de "objetos", que podem conter dados, na forma de campos (atributos ou propriedades), e código, na forma de procedimentos (métodos). A POO se baseia em alguns princípios fundamentais que visam aumentar a modularidade, a reutilização de código e a facilidade de manutenção.

### Princípios Fundamentais da POO

1.  **Encapsulamento:** Agrupa dados (atributos) e os métodos que operam sobre esses dados dentro de uma unidade (objeto), restringindo o acesso direto aos dados e protegendo a integridade do objeto.
2.  **Abstração:** Foca nos aspectos essenciais de um objeto, ignorando detalhes irrelevantes. Permite modelar o mundo real de forma mais intuitiva.
3.  **Herança:** Permite que uma classe (subclasse ou classe derivada) herde propriedades e métodos de outra classe (superclasse ou classe base). Promove a reutilização de código e a criação de hierarquias de classes.
4.  **Polimorfismo:** Permite que objetos de diferentes classes respondam ao mesmo método de maneiras diferentes. Aumenta a flexibilidade e a extensibilidade do código.

## Introdução ao TypeScript

TypeScript é um superset sintático de JavaScript que adiciona tipagem estática opcional à linguagem. Ele é projetado para desenvolvimento de aplicações grandes e torna o JavaScript mais robusto e fácil de manter. O TypeScript oferece recursos de orientação a objetos como classes, interfaces, herança e modificadores de acesso.

### Configurando o Ambiente TypeScript

Antes de começar, certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

1.  **Instalação do TypeScript:**
    ```bash
    npm install -g typescript
    ```

2.  **Compilando um arquivo TypeScript:**
    Crie um arquivo com a extensão `.ts` (por exemplo, `meuArquivo.ts`) e compile-o para JavaScript usando o compilador `tsc`:
    ```bash
    tsc meuArquivo.ts
    ```
    Isso gerará um arquivo `meuArquivo.js`.

## Classes em TypeScript

Classes são modelos para criar objetos. Elas definem a estrutura e o comportamento dos objetos que serão instanciados a partir delas.

### Definição de Classes

```typescript
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(): void {
        console.log("Som genérico de animal");
    }
}
```






