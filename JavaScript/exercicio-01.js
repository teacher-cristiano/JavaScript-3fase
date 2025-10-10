const p1 = {
    nome: "Vinicius",
    idade: 16,
    altura: 1.70
}

const p2 = {
    nome: "Tiago",
    idade: 18,
    altura: 1.85
}

const somaIdade = p1.idade + p2.idade
const media = (p1.idade + p2.idade) / 2

console.log("A soma das idade é: " + somaIdade)
console.log(`A média é ${media}`)

const resultadoP1 = p1.idade>=15 && p1.altura>=1.8
const resultadoP2 = p2.idade>=15 && p2.altura>=1.8

console.log(`P1: ${resultadoP1 ? "Goleiro" : "Jogador"} 
P2: ${resultadoP2 ? "Goleiro" : "Jogador"}`)