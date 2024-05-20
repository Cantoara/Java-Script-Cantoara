/*
TIPOS DE VARIAVEIS:
    VAR - variavel global
    LET - varaivel de escopo ou local
    CONST - varaivel imutavel e local
*/


// Exemplo de erro com var
var nome = "João";
console.log(nome); // Saída: "João"
{
    var nome = "Maria"; // Reatribui o valor da variável global
    console.log(nome); // Saída: "Maria"
}
console.log(nome); // Saída: "Maria" (o valor foi alterado fora do bloco)

// Exemplo de erro com let
let animal = "gato";
console.log(animal); // Saída: "gato"
{
    let animal = "cachorro"; // Declara uma nova variável de bloco com o mesmo nome
    console.log(animal); // Saída: "cachorro"
}
console.log(animal); // Saída: "gato" (o valor não foi alterado fora do bloco)

// Exemplo de erro com const
const COR = "azul";
console.log(COR); // Saída: "azul"
{
    const COR = "vermelho"; // Declara uma nova constante de bloco com o mesmo nome
    console.log(COR); // Saída: "vermelho"
}
console.log(COR); // Saída: "azul" (o valor não foi alterado fora do bloco)

// Erro ao tentar reatribuir uma constante (irá gerar erro)
const IDADE = 30;
IDADE = 40; // Isso irá gerar um erro

// Definir a função mostrarMensagem
function mostrarMensagem() {
    console.log("Mensagem exibida a cada 3 segundos");
}

// Definir o temporizador para chamar a função mostrarMensagem a cada 3 segundos
setInterval(mostrarMensagem, 3000);
