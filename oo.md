# 🚀 Apostila Completa de Orientação a Objetos com TypeScript

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
## Instanciando Objetos

Para criar um objeto (uma instância) de uma classe, usamos a palavra-chave new:

```typescript
let meuAnimal = new Animal("Rex");
console.log(meuAnimal.nome); // Saída: Rex
meuAnimal.emitirSom();      // Saída: Som genérico de animal
```
#Encapsulamento em TypeScript

O encapsulamento é implementado através de modificadores de acesso que controlam a visibilidade dos membros de uma classe (propriedades e métodos).

Modificadores de Acesso

-public (padrão): Membros públicos são acessíveis de qualquer lugar.

-private: Membros privados são acessíveis apenas dentro da classe onde são declarados.

-protected: Membros protegidos são acessíveis dentro da classe onde são declarados e em suas subclasses.

```typesript
class ContaBancaria {
    private saldo: number;
    public titular: string;

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            this.exibirSaldo();
        }
    }

    private exibirSaldo(): void {
        console.log(`Saldo atual de ${this.titular}: R$ ${this.saldo.toFixed(2)}`);
    }

    public sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            this.exibirSaldo();
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }
}

let minhaConta = new ContaBancaria("João", 1000);
minhaConta.depositar(500);   // Saída: Saldo atual de João: R$ 1500.00
minhaConta.sacar(200);      // Saída: Saldo atual de João: R$ 1300.00
// minhaConta.saldo = -100; // Erro: A propriedade 'saldo' é privada e só pode ser acessada dentro da classe 'ContaBancaria'.
// minhaConta.exibirSaldo(); // Erro: A propriedade 'exibirSaldo' é privada e só pode ser acessada dentro da classe 'ContaBancaria'.
```

#Abstração em TypeScript

A abstração é alcançada através de classes abstratas e interfaces.

Classes Abstratas

Classes abstratas não podem ser instanciadas diretamente e servem como base para outras classes. Elas podem conter métodos abstratos (sem implementação) que devem ser implementados pelas subclasses.


```typescrip
abstract class FormaGeometrica {
    abstract calcularArea(): number;

    exibirInformacao(): void {
        console.log("Esta é uma forma geométrica.");
    }
}

class Retangulo extends FormaGeometrica {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

class Circulo extends FormaGeometrica {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

// let forma = new FormaGeometrica(); // Erro: Não é possível criar uma instância de uma classe abstrata.

let ret = new Retangulo(5, 10);
console.log(`Área do retângulo: ${ret.calcularArea()}`); // Saída: Área do retângulo: 50
ret.exibirInformacao();                               // Saída: Esta é uma forma geométrica.

let circ = new Circulo(3);
console.log(`Área do círculo: ${circ.calcularArea()}`);   // Saída: Área do círculo: 28.274333882308138
circ.exibirInformacao();                                // Saída: Esta é uma forma geométrica.
```

#Interfaces

Interfaces definem um contrato que as classes podem implementar. Elas especificam quais propriedades e métodos uma classe deve ter.

```typescript
interface Desenhavel {
    desenhar(): void;
}

class Quadrado implements Desenhavel {
    lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    desenhar(): void {
        console.log(`Desenhando um quadrado com lado ${this.lado}.`);
    }
}

class Linha implements Desenhavel {
    comprimento: number;

    constructor(comprimento: number) {
        this.comprimento = comprimento;
    }

    desenhar(): void {
        console.log(`Desenhando uma linha com comprimento ${this.comprimento}.`);
    }
}

function exibirDesenho(objeto: Desenhavel): void {
    objeto.desenhar();
}

let quadrado = new Quadrado(7);
let linha = new Linha(20);

exibirDesenho(quadrado); // Saída: Desenhando um quadrado com lado 7.
exibirDesenho(linha);    // Saída: Desenhando uma linha com comprimento 20.
```

#Herança em TypeScript

A herança permite criar novas classes (subclasses) baseadas em classes existentes (superclasses). A subclasse herda as propriedades e métodos da superclasse e pode adicionar novos membros ou sobrescrever os existentes.

Implementando Herança

Usamos a palavra-chave extends para indicar a herança.

```typescript
class Veiculo {
    marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    acelerar(): void {
        console.log("Veículo acelerando...");
    }
}

class Carro extends Veiculo {
    modelo: string;

    constructor(marca: string, modelo: string) {
        super(marca); // Chama o construtor da superclasse
        this.modelo = modelo;
    }

    acelerar(): void {
        super.acelerar(); // Chama o método acelerar da superclasse
        console.log("Carro acelerando mais rápido!");
    }
}

class Moto extends Veiculo {
    constructor(marca: string) {
        super(marca);
    }

    acelerar(): void {
        console.log("Moto acelerando...");
    }
}

let meuCarro = new Carro("Toyota", "Corolla");
console.log(`Marca: ${meuCarro.marca}, Modelo: ${meuCarro.modelo}`); // Saída: Marca: Toyota, Modelo: Corolla
meuCarro.acelerar(); // Saída: Veículo acelerando... \n Carro acelerando mais rápido!

let minhaMoto = new Moto("Honda");
console.log(`Marca: ${minhaMoto.marca}`); // Saída: Marca: Honda
minhaMoto.acelerar();                  // Saída: Moto acelerando...
```

#Polimorfismo em TypeScript

Polimorfismo significa "muitas formas". Em POO, refere-se à capacidade de objetos de diferentes classes responderem ao mesmo método de maneiras distintas.

Polimorfismo por Herança

No exemplo de herança acima, o método acelerar() é polimórfico porque as classes Carro e Moto fornecem implementações diferentes desse método, embora compartilhem o mesmo nome definido na superclasse Veiculo.

Polimorfismo por Interface

Interfaces também permitem o polimorfismo. Objetos de classes diferentes que implementam a mesma interface podem ser tratados de forma uniforme através dessa interface.

```typescript
interface AnimalSom {
    emitirSom(): string;
}

class Cachorro implements AnimalSom {
    emitirSom(): string {
        return "Au au!";
    }
}

class Gato implements AnimalSom {
    emitirSom(): string {
        return "Miau!";
    }
}

function fazerSom(animal: AnimalSom): void {
    console.log(animal.emitirSom());
}

let meuCachorro = new Cachorro();
let meuGato = new Gato();

fazerSom(meuCachorro); // Saída: Au au!
fazerSom(meuGato);    // Saída: Miau!
```
Classes|Abstratas vs. Interfaces

Característica|	Classe Abstrata	Interface

Instanciação	|Não pode ser instanciada diretamente	|Não pode ser instanciada

Implementação	|Pode conter métodos com implementação	|Geralmente declara apenas a assinatura dos métodos

Herança	|Uma classe pode herdar de apenas uma classe abstrata	|Uma classe pode implementar múltiplas interfaces

Propriedades	|Pode declarar propriedades com qualquer modificador	|Geralmente declara apenas a assinatura das propriedades

Construtor	|Pode ter um construtor	|Não pode ter um construtor

Propósito Principal	|Fornecer uma classe base com algum comportamento	|Definir um contrato para as classes

##Exercícios

#Exercício 1: Sistema de Biblioteca

Crie classes para:

Livro (título, autor)

Usuario (nome, livros emprestados)

Biblioteca (gerenciar empréstimos)

#Exercício 2: Redes Sociais

Implemente:

Post (conteúdo, curtidas)

Usuario (posts, seguir outros usuários)

Feed de notícias com posts ordenados

#Exercício 3: Jogo de Tabuleiro
Desenvolva:

Jogador (nome, peças)

Peça (posição, mover())

Tabuleiro com regras de movimento