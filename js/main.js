let lista = document.getElementById("lista");

function renderLista(productos){
    for (let i = 0; i < productos.length; i++) {

        lista.innerHTML+=
        `
        <div class="card producto text-center" data-number="${i}" style="width: 18rem;">
            <div class="imagen" data-number="${i}">
                <img src="${productos[i].imagen}"  data-number="${i}" class="card-img-top" alt="${productos[i].nombre}">
            </div>
            <div class="card-body" data-number="${i}">
                <h5 class="card-title" data-number="${i}">${productos[i].nombre}</h5>
                <p class="card-text" data-number="${i}">${productos[i].descripcion1}</p>
            </div>
            <ul class="list-group list-group-flush" data-number="${i}">
                <li class="list-group-item" data-number="${i}">$${productos[i].precio}</li>
                <li class="list-group-item" data-number="${i}">${productos[i].puntuacion}</li>
            </ul>
        </div>
        `;
    }

    crearLista();
}

let productos;

function getProductos() {
    fetch("productos.json")
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            // json.forEach((producto) => console.log(producto?.nombre));

            // localStorage.setItem("productos", JSON.stringify(json));
            productos = json;
            renderLista(productos);
        });
}

function addLocalStorage(num){
    localStorage.setItem("selected", JSON.stringify(productos[num]));
}

getProductos();

function crearLista(){

    let selectProd = [...document.getElementsByClassName("card producto")];
    
    selectProd.forEach(p => p.addEventListener('click', (e) => {
        // let num = e.target.dataset.number;
        addLocalStorage(e.target.dataset.number);
        location.href ="producto.html";
    }));
}
