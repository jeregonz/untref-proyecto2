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
    <li class="list-group-item">${producto.puntuacion}</li>
</ul>
<div class="card-body">
    <p class="card-text">${producto.descripcion2}</p>
</div>
`;

document.title=`${producto.nombre} - Mercado Liebre`;