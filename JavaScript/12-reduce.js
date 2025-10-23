const numeros = [10, 20, 30, 40, 50]

const soma = numeros.reduce(
    (ac, num) => ac + num, 0
)

console.log("A soma é " + soma)

// ====================================

const multi = numeros.reduce(
    (ac, num) => ac * num, 1
)

console.log("A multiplicação é " + multi)

// ====================================

const notas = [7, 8, 6, 5]

const media = notas.reduce(
    (ac, nota, index, array) => {
        //ac: acumulador; nota: variável de iteração
        //index: índice da lista, array: nome da lista
        ac += nota;
        if(index === array.length -1){
            return ac / array.length
        }
        return ac;
    }
)

console.log(media)

// ====================================

const palavras = ["Olá", "mundo", "JavaScript"]

const frase = palavras.reduce(
    (ac, p) => `${ac} ${p}`
)

console.log(frase)