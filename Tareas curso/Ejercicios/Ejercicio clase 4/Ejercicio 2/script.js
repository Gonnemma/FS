
//CAMBIAR TEXTO DESDE JS
let contenedor = document.getElementById("contenedor");
contenedor.innerHTML = "<h1>Vengo desde js</h1>"
let elemento = document.createElement("h2");
let texto = document.createTextNode("Texto a ingresar en el elemento");
elemento.appendChild(texto);
contenedor.appendChild(elemento);  

/* 
//CREAR FUNCION CON LISTA
let lista = document.getElementById("lista")
const precios = [2000, 1500, 8000]
const productos = ["Pan", "Leche", "Carne"]

function pintarProductos(arrayProductos, arrayPrecios) {
    for (let i = 0; i < arrayProductos.length; i++){
        let li = document.createElement("li");
        let texto = document.createTextNode(`Nombre: ${arrayProductos[i]} -
        Precios: $${arrayPrecios[i]}`);
        li.appendChild(texto);
        lista.appendChild(li);
    }
}

// Forma mas corta de hacerlo
function pintarProductos2 (arrayProductos, arrayPrecios){
    for (let i = 0; i < arrayProductos.length; i++)
        lista.innerHTML += `<li> prod: ${arrayProductos[i]} - Precios: $${arrayPrecios[i]}</li>`
}
//pintarProductos(productos, precios)
//pintarProductos2 (productos, precios)


//CREAR IMAGENES DESDE JS

function crearImagen(url, textoAlternativo){
    let img = document.createElement("img");
    img.setAttribute("src", url);
    img.setAttribute("alt", textoAlternativo);
    contenedor.appendChild(img)
}

crearImagen("./images.png", "Imagen js")
crearImagen("https://img.freepik.com/vector-gratis/personaje-dibujos-animados-gatito-ojos-dulces_1308-135596.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=sph", "Imagen desde internet")
*/