const botao = document.getElementById("btn");

botao.addEventListener('click', function(){
    alert('Externo')
})

const mostrar = document.getElementById("mostrar")

mostrar.addEventListener('click', function(){
    document.getElementById('texto').style.display='block'
})

const ocultar = document.getElementById("ocultar")

ocultar.addEventListener('click', function(){
    document.getElementById('texto').style.display='none'
})

const altera = document.getElementById("altera")

altera.addEventListener('click', function(){
    document.getElementById('texto2').innerText = "Texto Alterado"
})