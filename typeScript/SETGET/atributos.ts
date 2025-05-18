class Heroi {
    protected _vida: number;
    protected nome: string;
  
    constructor(nome: string) {
      this._vida = 100;
      this.nome = nome;
    }
  
    public get qtVida(): number {
      return this._vida;
    }
  
    public get nomeHeroi(): string { // Corrigi o nome do getter (tinha um "8" no original)
      return this.nome;
    }
  }
  
  class espadaHeroi extends Heroi {
    private _tipo: string;
  
    constructor(nome: string) {
      super(nome);
      this._tipo = "Espada comum";
    }
  
    public set _vida(valor: number) {
      this._vida+=valor
    }
  }
  
const link = new espadaHeroi("Link");
  


console.log(link._vida(10))