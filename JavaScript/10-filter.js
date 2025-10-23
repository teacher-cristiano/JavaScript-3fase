const filmes = [
    {titulo: "Mad Max", diretor:"George Miller", produtor:"Warner Bros"},
    {titulo: "Shrek", diretor:"Andrew Adamson", produtor:"Dreamworks"},
    {titulo: "Gremlins", diretor:"Joe Dante", produtor:"Warner Bros"},
    {titulo: "Hobbit", diretor:"Peter Jackson", produtor:"Warner Bros"}
]

let filmes1 = filmes.filter(
    (x) => x.diretor === "Peter Jackson"
)

let filmes2 = filmes.filter(
    (y) => y.produtor === "Warner Bros"
)

filmes1.forEach(
    filme => {
        console.log(`Título: ${filme.titulo}`)
    }
)

filmes2.forEach(
    filme => {
        console.log(`Título: ${filme.titulo}`)
    }
)