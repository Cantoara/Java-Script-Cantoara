/*

    1-Crie uma função chamada soma que aceita dois parâmetros e retorna a 
    soma deles.
    
    2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e 
    não tem nenhum parâmetro nem retorno.

    3-Escreva uma função chamada verificarPar que recebe um número como parâmetro 
    e retorna verdadeiro se o número for par e falso caso contrário.

    4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo
     como parâmetro e retorna a área do círculo.

    5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro 
    e retorna a data atual.

    6-Escreva uma função chamada calcularMedia que recebe um array de números 
    como parâmetro e retorna a média desses números.

    7-Crie uma função chamada adicionarDois que aceita um número como parâmetro
     e retorna esse número adicionado a 2.

    8-Defina uma função chamada concatenarStrings que recebe duas strings como
     parâmetros e retorna uma nova string que é a concatenação das duas strings 
     fornecidas.

    9-Escreva uma função chamada verificarNegativo que recebe um número como
     parâmetro e retorna verdadeiro se o número for negativo e falso caso
     contrário.

    10-Crie uma função chamada removerEspacos que recebe uma string como 
    parâmetro e retorna a mesma string sem espaços em branco.

*/

function soma(a, b) 
{
    return a + b
}
let resultado = soma (8, 12);
console.log("A soma de a + b é:", resultado);

function saudacao() 
{
    console.log("Olá Mundo")
}
saudacao()



function verificarPar(numero)
{
    if(numero % 2 == 0) 
    {
        return true
    }
    else 
    {
        return false
    }
}
let r = verificarPar(8)
console.log(r)


function calcularAreaCirculo(raio)
{
    if (raio < 0) 
    {
        return "O raio não pode ser negativo.";
    }
    else 
    {
        return Math.PI * raio*2;
    }
}
 let rr = calcularAreaCirculo(6)
 console.log(rr)

 //5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro e retorna a data atual.

 function retornarDataAtual() 
 {
     return Date();
 }

let data = retornarDataAtual();
console.log(data)

//6-Escreva uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números.

function calcularMedia(numeros)
{
    let soma = 0
    for (let i = 0; i < numeros.length; i++)
    {
        soma = soma + numeros [i];
    }
    const media = soma / numeros.length;
    return media;
}
// Exemplo de uso:

const meuArray = [10, 20, 30, 40, 50];
const mediaDoArray = calcularMedia(meuArray);
console.log(`A média do array é ${mediaDoArray.toFixed(2)}.`);
console.log(meuArray.length)

//7-Crie uma função chamada adicionarDois que aceita um número como parâmetroe retorna esse número adicionado a 2.

function adicionarDois (numero)
{
    return numero = 2;
}
let retorn0 = adicionar (7)
console.log(retorno)


//8-Defina uma função chamada concatenarStrings que recebe duas strings como
//parâmetros e retorna uma nova string que é a concatenação das duas strings 
//fornecidas.

function concatenarStrings(texto, texto1)
{
    console.log(texto + texto1)
}
concatenarStrings("Olá", "mundo!")

//9-Escreva uma função chamada verificarNegativo que recebe um número comoparâmetro e retorna verdadeiro se o número for negativo e falso casocontrário.

function verificarNegativo (numero)
{
    if (numero < 0)
    {
        return true
    }
    else
    {
        return false
    }
}
let ng = verificarNegativo(4)
console.log(ng);

//10-Crie uma função chamada removerEspacos que recebe uma string como parâmetro e retorna a mesma string sem espaços em branco.

function removerEspacos (texto)
{
    return texto.replace(/\s/g,"")
}
const rm = removerEspacos("jesus rodrigo")
console.log(rm);

