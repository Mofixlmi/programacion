var btnGreet = document.getElementById("btnsaludo")
var txtName = document.getElementById("txtnombre")
var txtGreet = document.getElementById("txtsaludo")

var lista = [
     "Hello",
     "Bonjour",
     "Hallo",
     "Ciao",
     "Ola",
     "Namaste",
     "Aloha",
     "Konnichiwa",
     "Kerhaba",
     "Que más"
]
function saludar(){
    if(txtName.value =="") {
        alert("Error, ingresa un nombre.")
        txtName.innerHTML=""
    }else{
        var nombre = txtName.value
        var numero = Math.floor(Math.random()* lista.length)
        var Saludo = lista[numero]+" , " + nombre
        txtGreet.innerHTML = Saludo 
    }
    
}

