const usuarios = [
    {
        nome: "Adelmo",
        idade: 60
    },
    {
        nome: "Maria",
        idade: 40
    },
    {
        nome: "Joaquim",
        idade: 32
    }
]

const nomesUsuarios = usuarios.map(
    usuario => {
        return `${usuario.nome} tem ${usuario.idade} anos`
    }
)

console.log("Nova lista:", nomesUsuarios)