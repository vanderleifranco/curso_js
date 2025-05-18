class Heroi{
    protected energia: number
    constructor(){
        this.energia = 60
    }
    protected renovarEnergia(): void{
        this.energia = 60
    }
}

class Arqueiro extends Heroi{
    public usarFlecha():void{
        this.energia -= 10
        console.log(this.energia)
    }
}

const arqueiroLink = new Arqueiro();

arqueiroLink.usarFlecha();

