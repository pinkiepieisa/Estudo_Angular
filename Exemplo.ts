//declaração de tipo
let idade: number = 22;

//inferencia de tipo
let cpf = 11111111111;

//Tipo void -> para funções
//Parâmetro msg
function logarMensagem(msg: string): void {
    console.log(`4.[LOG] Mensagem registrada: ${msg}`);
}

let idProduto: number | string;

idProduto = 12;
idProduto = "Ana";