/* Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto produto 
eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/

//obs: Valor é uma string aqui apenas para colocar `$`. Senti a necessidade, ja que não haverão sentenças e calculos matematicos. Basicamente, é apenas estetico.

class eletronico {
    private modelo: string;
    private cor: string;
    private tipo: string;
    private valor: string;

    constructor(modelo: string, cor: string, tipo: string, valor: string){
        this.modelo = modelo;
        this.cor = cor;
        this.tipo = tipo;
        this.valor = valor;
    }

    outputObjectInformation():void{
        console.log("Informações do eletrônico: " + "\nModelo...: " + this.modelo + "\nTipo...: " + this.tipo + "\nValor...: "+ this.valor + "\n\n\n\n");
    }
}
var eletronico1: eletronico = new eletronico ("L-MAO", "Soft-Blue", "Cadeira-Gamer", "1200R$");
var eletronico2: eletronico = new eletronico ("Equis-De", "Dark-Red", "Teclado-gamer", "299R$");
var eletronico3: eletronico = new eletronico ("Xis-de", "Brown", "Mouse-gamer", "199R$");

eletronico1.outputObjectInformation();
eletronico2.outputObjectInformation();
eletronico3.outputObjectInformation();