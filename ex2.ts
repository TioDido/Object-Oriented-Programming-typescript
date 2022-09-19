/*Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto 
avião, defina as instâncias deste objeto e apresente as informações deste objeto no console. */

class Avioes {
    private modelo: string;
    private cor: string;
    private numeroDePassageiros: number;
    private voa: boolean = true;

    constructor(modelo: string, cor: string, numeroDePassageiros: number, voa: boolean = true) {
        this.modelo = modelo;
        this.cor = cor;
        this.numeroDePassageiros = numeroDePassageiros;
        this.voa = voa;
    }

    outputInformation(): void {
        console.log("Informações do veículo: " + "\nModelo...: " + this.modelo + "\nCor...: " + this.cor + "\nNumero de passageiros suportados: " + this.numeroDePassageiros +
        "\nO veículo esta apto para voar...? " + `>[${this.voa}]<` + ", se a mensagem `true` for sentenciada, então quer dizer que o veículo está apto.");
    }
}
var fly: Avioes = new Avioes("XAEA-19", "Blue", 60, true)
fly.outputInformation();