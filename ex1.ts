/*Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto no console. */

class cliente {
    private  idade: number;
    private nome: string;
    private cpf:string;

    constructor(idade : number,nome : string, cpf: string){
        this.idade = idade;
        this.nome = nome;
        this.cpf = cpf;
    }

    mainOutputUserInformation():void{
        console.log("Suas informações...: " + "\nIdade...: " + this.idade + "\nNome...: " + this.nome + "\nCpf...: " + this.cpf);
    }
}
//obs: Numeros também são strings. Damos uma variavel numeros inteiros apenas para contas matematicas.
var go: cliente = new cliente(24 , "Dido", "222.222.222-22" );
go.mainOutputUserInformation();