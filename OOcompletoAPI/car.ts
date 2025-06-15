/********************************
 Crie uma interface chamada Pet com os seguintes métodos abstratos:

comer(): retorna uma string descrevendo como o pet come

emitirSom(): retorna uma string com o som que o pet faz

brincar(): retorna uma string descrevendo como o pet brinca

Implemente três classes que representam tipos diferentes de pets 
(por exemplo: Cachorro, Gato, Passaro) que implementam a interface Pet. 
Cada classe deve ter suas próprias implementações dos métodos, refletindo comportamentos específicos para cada tipo de animal.

Crie uma classe LojaDePets que:

Mantém uma lista de pets (array)

Tem um método adicionarPet() para adicionar novos pets à loja

Tem um método interagirComPets() que percorre todos os pets da loja e executa seus métodos comer(), emitirSom() e brincar(), mostrando os resultados no console

Demonstre o polimorfismo criando instâncias de diferentes pets, adicionando-os à loja e chamando o método interagirComPets().
 *****************************************************************************/

// abstracao 
abstract class Pet {
    constructor(public nome: string) { }
    abstract comer(): void
    abstract emitirSom(): void
    //concreta
    brincar(): string {
        return "feliz"
    }
}
interface dormi {
    dormir(): void
}

class Cachorro extends Pet implements dormi {
    constructor(raca: string, nome: string) {
        super(nome)
    }
    comer(): void {
        console.log("hora de comer carninha")
    }
    emitirSom(): void {
        console.log("au au")
    }
    dormir(): void {
        console.log("soninho")
    }
}
class Gato extends Pet implements dormi {
    constructor(raca: string, nome: string) {
        super(nome)
    }
    comer(): void {
        console.log("hora de comer peixinho")
    }
    emitirSom(): void {
        console.log("miau miuau")
    }
    dormir(): void {
        console.log("soninho")
    }
}

// implementando o polimorfismo

class LojaDePets {
    private pets: Pet[] = [];
    adicionarPet(animal: Pet): void {
        this.pets.push(animal)
        console.log("adicionado com sucesso")
    }
    interacaoComPet(animal: string) {

        for (let i = 0; i < this.pets.length; i++) {
            if (this.pets[i].nome === animal) {
                console.log(this.pets[i].comer())
                console.log(this.pets[i].emitirSom())
                console.log("---")
            }

        }
    }
    interagirComPetsTodos(): void {
        console.log("\n=== Interagindo com todos os pets da loja ===");
        this.pets.forEach(pet => {
            console.log(pet.comer());
            console.log(pet.emitirSom());
            console.log("---");
        });
    }

}

const Loja = new LojaDePets()

Loja.adicionarPet(new Cachorro("vira-lata", "lulu"));
Loja.adicionarPet(new Gato("vira-lata", "mimi"));


Loja.interacaoComPet("lulu")
Loja.interagirComPetsTodos()

