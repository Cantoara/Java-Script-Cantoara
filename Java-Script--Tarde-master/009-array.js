/*
O que é um Array em JavaScript?
Um array em JavaScript é um tipo de estrutura 
de dados que permite armazenar múltiplos valores 
em uma única variável. Os elementos de um array 
são indexados numericamente, começando do índice 0,
 o que significa que cada elemento tem uma posição 
 específica no array.
*/
// Usando Colchetes []
let array1 = new Array(1, 2, 3, 4, 5);

// Usando o construtor Array()
let array2 = new Array(1, 2, 3, 4, 5);

// Criando um array vazio
let array3 = [];

// Arrays podem conter diferentes tipos de dados
let array4 = ["Hello", 42, true];



let array =[10, 20, 30, 40, 50]
console.log(array[0]); //Saída: 10
console.log(array[2]); //Saída: 30

//Verificando o tamanho do array
let arraylength = [1, 2, 3]
console.log(arraylength.length); //Saída: 3

//inserindo um item no array
arraylength. push(4)
console.log(arraylength); //Saída: [1, 2, 3, 4]

// removendo um item no array
let removedElement = arraylength.pop();
console.log(removedElement); Saída: 4
console.log(arraylength); Saída: [1, 2, 3]

