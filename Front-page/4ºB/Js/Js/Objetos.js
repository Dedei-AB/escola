// Fórmula genérica para criar um objeto:
const pessoa1 = {
    nome: "Maria",
    idade: 25,
    profissao: "Engenheira"
}

const pessoa2 = Object.create({
    nome: "Maria",
    idade: 25,
    profissao: "Engenheira"
})


// Tem como um valor do objeto se uma função:
const pessoa = {
    nome: "João",
    cumprimento: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
pessoa.cumprimento();