/*
OPERADORES LOGICOS
 E(AND) - &&(java script) - ((x<10) && (x>0))
 OU(OR) - ||(java script) - ((x<10) || (x>0))
 Negação - !(java script) - (!true = false)
*/

/*
  
  igual - (==)
  igual - (===)
  diferente - (!=)
  Menor que - (<)
  Menor ou igual - (<=)
  Maior que - (>)
  Maior ou Igual - (>=)
== (igualdade solta): 
Este operador compara dois valores, 
após fazer algumas coerções de tipo (type coercion) 
se necessário. Isso significa que ele tentará 
converter os operandos em um tipo comum antes de 
fazer a comparação. Por exemplo, 1 == '1' retornará 
true, pois o operador == converte o valor à direita 
para um número antes de fazer a comparação.
=== (igualdade estrita): 
Este operador compara dois valores sem fazer 
coerção de tipo. Isso significa que ele 
verifica se os valores são iguais e se os 
tipos também são iguais. Por exemplo, 1 === '1'
 retornará false, pois os tipos são diferentes.
  
*/

let a = 5;
let b = 7;

if (a === b) {
    console.log("a é igual a b");
} else {
    console.log("a não é igual a b");
}

if (a == b) {
    console.log("a é igual a b");
} else {
    console.log("a não é igual a b");
}

if (a != b) {
    console.log("a é diferente de b");
} else {
    console.log("a não é diferente de b");
}

if (a < b) {
    console.log("a é menor que b");
} else {
    console.log("a não é menor que b");
}

if (a <= b) {
    console.log("a é menor ou igual a b");
} else {
    console.log("a não é menor ou igual a b");
}

if (a > b) {
    console.log("a é maior que b");
} else {
    console.log("a não é maior que b");
}

if (a >= b) {
    console.log("a é maior ou igual a b");
} else {
    console.log("a não é maior ou igual a b");
}
