let main = document.querySelector("main");

let producto = JSON.parse(localStorage.getItem("selected"));
console.log(producto);

let card = document.getElementById("card");

card.innerHTML=
`
<h2>${producto.nombre}</h2>
<img src="${producto.imagen}" class="card-img-top" alt="Smartphone Galaxy S21">
<ul class="list-group list-group-flush">
    <li class="list-group-item">$${producto.precio}</li>
    <li class="list-group-item estrellas"></li>
</ul>
<div class="card-body">
    <p class="card-text">${producto.descripcion2}</p>
</div>
`;

document.title=`${producto.nombre} - Mercado Liebre`;

let nodo = document.querySelector(".estrellas");

function dibujaEstrellas(){

    let cant = producto.puntuacion.length;
    
    if (cant == 5){
        for (let i = 0; i < 5; i++) {
            nodo.innerText+="⭐";
        }
    }
    else{
        for (let i = 0; i < cant; i++) {
            nodo.innerText+="⭐"
        }
        for (let i = 0; i < 5-cant; i++) {
            nodo.innerText+="★"
        }
    }
}

dibujaEstrellas();