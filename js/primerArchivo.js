/*
let nombreUsuario = prompt("Ingresar nombre");
let apellidoUsuario = prompt("Ingresar apellido");
if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
} else {
    alert("Nombre de usuario ingresado es " + nombreUsuario + " " + apellidoUsuario);
}
console.log(nombreUsuario + " " + apellidoUsuario)

// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
    console.log(resultado)
}


let entrada = prompt("Ingresar un producto");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro producto");
    console.log (entrada)
}


function sumar (a,b) {
    console.log(a+b)
}
sumar(18000,25000)
function restar (a,b) {
    console.log(a-b)
}
restar(50000,25000)

const multiplicar  = (a,b) =>  a * b 
console.log(multiplicar(40000, 3))
const dividir = (a,b) => a / b 
console.log(dividir(40000, 2))


const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 28000
let descuento = 10000
//Calculo el precioSale - descuento
let precioSale = resta(precioProducto, descuento); console.log(precioSale)
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento); console.log(nuevoPrecio)


const articulos = ['Flip', 'Multiprocesador', 'Utensillos', 'Pelador de vegetales', 'Sarten 24', 'Cacerola 28'];

console.log(articulos);
articulos.splice(1, 2);
console.log(articulos);

let a = articulos.join("/");

console.log(a);
console.log(articulos);



const sarten = ["sarten 24", "sarten 28"];
const cacerolas = ["cacerola 20", "cacerola 24", "cacerola 28"];
const ollas = cacerolas.concat(sarten);
console.log(ollas);
console.log(sarten);



const objeto1 = {
    id: 1,
    producto: "Flip"
};
const array = [objeto1, { id: 2, producto: "cacerola 18" }];
array.push({ id: 3, producto: "sarten 24" });
const array2 = [1, 2, 3, 4, 5];
array.unshift(array2);

console.log(array);



const productos = [
    { nombre: 'Cacerola 18', precio: 15000 },
    { nombre: 'Sarten 24', precio: 26500 },
    { nombre: 'Sarten 28', precio: 35800 },
    { nombre: 'Flip', precio: 19000 },
    { nombre: 'Urban Gril', precio: 33000 },
]
const nombres = productos.map( (el) => el.nombre );
// const nombres = productos.map( (el) => el.precio * 1.25 );
console.log(nombres);

const actualizado = productos.map( (el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
} );
console.log(actualizado);



function asignarOperacion(op) {
    if (op == "multiplicar") {
        return (a, b) => a * b;
    } else if (op == "dividir") {
        return (a, b) => a / b;
    }
}
let multi = asignarOperacion("multiplicar");
let div = asignarOperacion("dividir");


console.log( multi (18000, 2) );
console.log( div (32000, 2) );


//Filtro de productos
const producto = [
    { nombre: 'Cacerola 18', precio: 15000 },
    { nombre: 'Cacerola 24', precio: 22000 },
    { nombre: 'Cacerola 28', precio: 34500 },
    { nombre: 'Sarten 18', precio: 16000 },
    { nombre: 'Sarten 24', precio: 26500 },
    { nombre: 'Sarten 28', precio: 35800 },
    { nombre: 'Flip', precio: 19000 },
    { nombre: 'Urban Grill', precio: 33000 },
]
const resultado = producto.filter( (el) => el.nombre.includes('28') );
const resultado2 = producto.filter( (el) => el.precio < 20000 );
console.log(resultado);
console.log(resultado2);


//Carrito con descuento

let cupon = -8500;
const miCompra = [
    { nombre: 'Cacerola 24', precio: 22000 },
    { nombre: 'Sarten 24', precio: 26500 },
    { nombre: 'Savarin 24', precio: 12000 }
]
const total = miCompra.reduce( (acc, el) => acc + el.precio, cupon )
console.log(total) // 52000


//Carrito de compra
const miCompra2 = [
    { nombre: 'Cacerola 18', precio: 15000 },
    { nombre: 'Flip', precio: 19000 },
    { nombre: 'Urban Grill', precio: 33000 },
    { nombre: 'Savarin 18', precio: 10000 },
    { nombre: 'Pelador de vegetales', precio: 4500 },
]

const total2 = miCompra2.reduce((acc, el) => acc + el.precio, 0)
console.log(total2) // 81500
*/

/*
let carrito = document.getElementById("carrito")
console.log( carrito.innerText ) // “0!”
// cambio el contenido del elemento
carrito.innerText = "1"
console.log( carrito.innerText ) // “1”


const productos = [
                    { id: 1 ,  nombre: "Combo 1", precio: 40000 },
                    {  id: 2 ,  nombre: "Combo 2", precio: 18000 },
                    {  id: 3 ,  nombre: "Combo 3"  , precio: 25000},
                    {  id: 4 ,  nombre: "Combo 4" , precio: 40000},
                    {  id: 5 ,  nombre: "Comobo 5" , precio: 25500},
                    {  id: 6 ,  nombre: "Comobo 6" , precio: 17800},
                    {  id: 7 ,  nombre: "Comobo 7" , precio: 16590},
                    {  id: 8 ,  nombre: "Comobo 8" , precio: 40000},
                ];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
console.log(productos)
*/
/*

parrafo = document.querySelector(".stock")
console.log(stock)
*/

/*
//CODIGO JS
let boton = document.getElementById("carrito")
boton.onclick = () => {console.log("Añadir al carrito")}
boton.onmousemove = () => {console.log("Move")}
*/