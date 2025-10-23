const numeros = [10, 20, 30, 40, 50]

const soma = numeros.reduce(
    (ac, num) => ac + num, 0
)

console.log("A soma é " + soma)