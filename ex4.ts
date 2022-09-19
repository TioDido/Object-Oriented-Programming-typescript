/* Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe, em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/

class funcionario{
    private nome: string;
    private cpf: string;
    private codigoDoFuncionario: string;
    private empresaContratada: string;

    constructor(nome: string, cpf: string, codigoDoFuncionario: string, empresaContratada: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.codigoDoFuncionario = codigoDoFuncionario;
        this.empresaContratada = empresaContratada;
    }

    outputEmployeeInformation():void {
        console.log("Informações do usuario." + "\nNome...:" + this.nome + "\nCpf...:" + this.cpf + "\nCodigo do Funcionario...:" + this.codigoDoFuncionario + "\nEmpresa contratada...:" + this.empresaContratada + "\n\n\n\n");
    }
}
var generation1: funcionario = new funcionario ("Demetrius", "999-999-999-99", "EZXKOP-001", "Generation");
var generation2: funcionario = new funcionario ("Kelly", "888-888-888-88", "EZXKOP-002", "Generation");
var generation3: funcionario = new funcionario ("Diogo Kratos", "777-777-777-77", "EZXKOP-003", "Generation");

generation1.outputEmployeeInformation();
generation2.outputEmployeeInformation();
generation3.outputEmployeeInformation();