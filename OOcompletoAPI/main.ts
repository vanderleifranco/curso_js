//Polimorfismo Abstração Interfaces 
// ABSTRACAO

abstract class FormaGeometrica{
    abstract calcularArea(): number; //abstrata

    descricao():string{ //concreta
        return "Forma Geometrica"
    }
    
}
// INTERFACE
interface Desenhavel{
    desenhar():void
}
interface Rotacionar{
    rotacionar(graus:number):void
}

class Circulo extends FormaGeometrica implements Desenhavel, Rotacionar{
    constructor (private raio:number){
        super()
    }
    public calcularArea(): number {
        return Math.PI * this.raio**2;
    }
    desenhar(): void {
        console.log("desenhando um circulo !")
    }
    rotacionar(graus: number): void {
        console.log(`rotacionar ${graus}`)
    }
}
class Quadrado extends FormaGeometrica implements Desenhavel{
    private lado : number
    constructor(lado:number) {
        super()
        this.lado = lado
    }
    desenhar(): void {
        console.log(" desenhando um quadrado")
    }
    calcularArea(): number {
        return this.lado**2
    }

}

const formas : FormaGeometrica[] = [
    new Circulo(5),
    new Quadrado(10)
]

formas.forEach(form => {
    console.log("area"+form.calcularArea())
})
