/*
Exercício 1: Criação de Classe
Crie uma classe Pessoa com as propriedades nome e idade. Em seguida, crie dois objetos pessoa1 e pessoa2 dessa classe e imprima suas informações no console.


Exercício 2: Adição de Método
Adicione um método cumprimentar() à classe Pessoa, que imprime uma saudação usando o nome da pessoa. Chame o método cumprimentar() para os objetos pessoa1 e pessoa2 criados no exercício anterior.

Exercício 3: Herança
Crie uma classe Aluno que herda da classe Pessoa e adiciona uma propriedade curso. Crie um objeto aluno1 dessa classe e imprima suas informações no console.

Exercício 4: Sobrescrita de Método
Na classe Aluno, sobrescreva o método cumprimentar() para incluir uma mensagem específica para alunos. Chame o método cumprimentar() para o objeto aluno1.

Exercício 5: 

Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma 
mensagem com o nome e a idade da pessoa.

Exercício 6:

Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o 
perímetro do retângulo.

Exercício 7:

Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e
verificar o saldo.

Exercício 8:

Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular
o valor total do produto (preço * quantidade).

Exercício 9:

Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as
informações do carro.

Exercício 10:

Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para
calcular a média das notas.
*/


class Pessoa 
{
    constructor(nome, idade)
    {
        this.nome = nome;
        this.idade = idade;
        
    }
    Cumprimentar()
    {
        console.log("Olá, Tudo bem")
    }
    Apresentar() {
        console.log("meu nome é:",this.nome)
        console.log("minha idade é:",this.idade)
    }
}

const pessoa1 = new Pessoa("cantoara", 50) 
const pessoa2 = new Pessoa("Atila", 22)
console.log("Eu sou:", pessoa1.nome,"e minha idade é:", pessoa1.idade)
console.log("Eu sou:", pessoa2.nome,"e minha idade é:", pessoa2.idade)

pessoa1.Cumprimentar();
pessoa2.Cumprimentar();
pessoa1.Apresentar();

class Aluno extends Pessoa

{
    constructor(nome, idade, curso)
    {
        super(nome, idade)
        this.curso = curso
    }
    cumprimentar() 
    {
        console.log("Boas Provas")
    }
}

const aluno1 = new Aluno("Cantoara", 50, "Medicina")
console.log(aluno1)

aluno1.cumprimentar();


class Retangulo 
{
    constructor(largura, altura)
    {
        this.altura = altura;
        this.largura = largura;
    }
    get area() 
    {
        return this.largura * this.altura;
    }  
    
    get perimetro() 
    {
        return 2 * (this.largura + this.altura);    
    } 
}
const rtl = new Retangulo(5, 7)
console.log("A area do retangulo e:",rtl.area)
console.log("P perímetro do retangulo e:",rtl.perimetro) 


class ContaBancaria 
{
    constructor(saldo, titular) 
    {
        this.saldo = saldo
        this.titular = titular
    }
    depositar(valor) 
    {
        this.saldo = this.saldo + valor
    }
    sacar(valor)
    {
        this.saldo = this.saldo - valor
    }
    verificar() 
    {
        console.log("meu saldo é:", this.saldo)
    }
}

const cb = new ContaBancaria(1000,"Átila")
cb.verificar()
cb.depositar(500)
cb.verificar()
cb.sacar(800)
cb.verificar()

//Exercício 8:
//Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular
//o valor total do produto (preço * quantidade).

class Produto 
{
    constructor(nome, preço, quantidade)
    {
        this.nome = nome
        this.preço = preço
        this.quantidade = quantidade
    }
    get valortotal() 
    {
        return this.preço * this.quantidade
    }
}
const produto = new Produto("nome",750, 1500)
console.log("o valor total é:", produto.valortotal)