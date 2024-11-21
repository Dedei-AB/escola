// 1)
let carro = {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2019
};

// console.log(carro);

// 2)
// console.log(carro["marca"]);
carro["ano"] = 2021;
// console.log(carro);

// 3)
carro["cor"] = "preto";
delete carro["modelo"];
// console.log(carro);

// 4)
let pessoa = {
    nome: "Andrei",
    idade: 16,
    comprimentar: function() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }
};
// pessoa.comprimentar();

// 5)
let produto = {
    nome: "Notbook",
    preco: 2500,
    categoria: "eletrônicos"
};

// for(let categoria in produto){
//     console.log(`${categoria}: ${produto[categoria]}`)
// };

// 6)
let biblioteca = [
    {titulo: "1984", autor: "George Orwell", anoPublicacao: 1949},
    {titulo: "Dom Casmurro", autor: "Machado de Assis", anoPublicacao: 1899},
    {titulo: "A Origem das Espécies", autor: "Charles Darwin", anoPublicacao: 1859}
];

// console.log(biblioteca.map(livro => livro.titulo));

// 7)
let carrinho = {
    itens: [{nome: "Camisa", preco: 50}, {nome: "Calça", preco: 100}],
    calcularTotal: function(){ let total = 0
        for(let produto in this.itens){
            total += this.itens[produto]["preco"]
        }return total}
};
// console.log(carrinho.calcularTotal());

// 8)
let aluno = {
    nome: "Erick",
    curso: "BCC",
    idade: 19
};
const {nome, curso} = aluno;
// console.log(`Nome: ${nome}, Curso: ${curso}`)

// 9)
let estoque = [
    {id: 1, nome: "Caneta", quantidade: 20},
    {id: 2, nome: "Caderno", quantidade: 15},
    {id: 3, nome: "Caneta", quantidade: 20}
]

function atualizarQuantidade(id, quant){
    for(let pos in estoque){
        if(estoque[pos]["id"] == id){
            estoque[pos]["quantidade"] = quant
        }
    }return estoque
}

// console.log(atualizarQuantidade(2,30))

// 10)
let usuarios = [
    {nome: "Andrei", idade: 16, email: "andreiabners@gmail.com"},
    {nome: "Ryan", idade: 16, email: "ryanstomastalavieira@gmail.com"},
    {nome: "Mateus", idade: 16, email: "mateusaugusto@gmail.com"},
]

let pessoas = usuarios.map(usuarios => `${usuarios.nome}, ${usuarios.email}`)
console.log(pessoas)