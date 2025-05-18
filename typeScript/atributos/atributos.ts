class Heroi{
    private vida: number // só a classe heroi acessa
    constructor(){
        this.vida =100
    }

    public tomarDano(dano:number):void{
        this.vida -= dano
    }

}

const link = new Heroi();
// console.log(link.vida) 

