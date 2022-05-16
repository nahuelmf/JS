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






    const baseDeDatos = [
    { id: 1 ,  nombre: "Combo 1", precio: 75000 , imagen: 'assets/juego1.jpeg', descripcion: "Cacerola de 18, Cacerola Cuadrada 24 y Bowls de acero."},
    {  id: 2 ,  nombre: "Combo 2", precio: 60000 , imagen: 'assets/juego2.jpeg', descripcion:"Cacerola Cuadrada de 29, Cacerola Cuadrada de 24 y Utensillos de cocina."},
    {  id: 3 ,  nombre: "Combo 3"  , precio: 34000 , imagen: 'assets/juego3.jpeg', descripcion:"Paellera 28 y Utensillos de cocina."},
    {  id: 4 ,  nombre: "Combo 4" , precio: 31000, imagen: 'assets/juego4.jpeg', descripcion: "Sarten de 24 y Sarten de 28"},
    {  id: 5 ,  nombre: "Combo 5" , precio: 55000, imagen: 'assets/juego5.jpeg', descripcion: "Sartén 24cm, Cacerola 24cm y Savarin"},
    {  id: 6 ,  nombre: "Combo 6" , precio: 60000, imagen: 'assets/juego6.jpeg', descripcion: "Paellera y Flip"},
    {  id: 7 ,  nombre: "Combo 7" , precio: 33000, imagen: 'assets/juego7.jpeg', descripcion: "Sarten sensor 24cm y wok sensor 30cm"},
    {  id: 8 ,  nombre: "Combo 8" , precio: 49000 , imagen: 'assets/juego8.jpeg', descripcion: "Cacerola cuadrada 29cm y Budineras."},
    {  id: 9 ,  nombre: "Combo 9" , precio: 46450 , imagen: 'assets/juego9.jpeg', descripcion: "Cacerola Marsala 24cm y Savarin 24cm."},
    {  id: 10 ,  nombre: "Combo 10" , precio: 57000 , imagen: 'assets/juego10.jpeg', descripcion: "Cacerola rectangular y Cacerola 18cm."},
    {  id: 11 ,  nombre: "Flip" , precio: 43900 , imagen: 'assets/juego11.jpeg', descripcion: "Flip"},
    {  id: 12 ,  nombre: "Combo 11" , precio: 85200 , imagen: 'assets/juego12.jpeg', descripcion: "Sarten C/ASAS 31cm, Flip y aros de Silicona."},
    {  id: 13 ,  nombre: "Cacerola Cuadrada" , precio: 58700 , imagen: 'assets/juego13.jpeg', descripcion: "Cacerola cuadrada 29cm."},
    {  id: 14 ,  nombre: "Combo 12" , precio: 96300 , imagen: 'assets/juego14.jpeg', descripcion: "Cacerola 18cm, Carrola 20cm y Cacerola 24cm."},
    {  id: 15 ,  nombre: "Sarten Marsala" , precio: 33300 , imagen: 'assets/juego15.jpeg', descripcion: "Sarten Marsala 24cm."},
    {  id: 16 ,  nombre: "Urban Grill" , precio: 38000 , imagen: 'assets/juego16.jpg', descripcion: "Urban Grill."},
    {  id: 17 ,  nombre: "Sarten Chef" , precio: 19300 , imagen: 'assets/juego17.jpg', descripcion: "Sarten Chef."},
    {  id: 18 ,  nombre: "Cacerola 18" , precio: 27600 , imagen: 'assets/juego18.jpg', descripcion: "Cacerola 18cm."},
    {  id: 19 ,  nombre: "Sarten 24" , precio: 36200 , imagen: 'assets/juego19.jpg', descripcion: "Sarten 24cm."},
                        ];

        let carrito = [];
        const divisa = '$';
        const DOMitems = document.querySelector('#items');
        const DOMcarrito = document.querySelector('#carrito');
        const DOMtotal = document.querySelector('#total');
        const DOMbotonVaciar = document.querySelector('#boton-vaciar');

          // Funciones

        /**
          * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
          */
        function renderizarProductos() {
            baseDeDatos.forEach((info) => {
                  // Estructura
                const miNodo = document.createElement('div');
                miNodo.classList.add('col', 'mb-5');
                  // Body
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card', 'h-100');
                  // Titulo
                const miNodoTitle = document.createElement('h5');
                miNodoTitle.classList.add('fw-bolde', 'text-center');
                miNodoTitle.textContent = info.nombre;
                  // Imagen
                const miNodoImagen = document.createElement('img');
                miNodoImagen.classList.add('card-img-top');
                miNodoImagen.setAttribute('src', info.imagen);
                  // Precio
                const miNodoPrecio = document.createElement('p');
                miNodoPrecio.classList.add('card-text', 'text-center');
                miNodoPrecio.textContent = `${info.precio}${divisa}`;
                  // Descripcion
                const miNodoInfo = document.createElement('p');
                miNodoInfo.classList.add( 'text-center', 'fw-bolder');
                miNodoInfo.textContent = info.descripcion;
                  // Boton 
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn', 'btn-outline-dark', 'mt-auto');
                miNodoBoton.textContent = 'Añadir al carrito';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                  // Insertamos
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoPrecio);
                miNodoCardBody.appendChild(miNodoInfo);
                miNodoCardBody.appendChild(miNodoBoton);
                miNodo.appendChild(miNodoCardBody);
                DOMitems.appendChild(miNodo);
            });
        }

        /**
          * Evento para añadir un producto al carrito de la compra
          */
        function anyadirProductoAlCarrito(evento) {
              // Anyadimos el Nodo a nuestro carrito
            carrito.push(evento.target.getAttribute('marcador'))
              // Actualizamos el carrito 
            renderizarCarrito();

        }

        /**
          * Dibuja todos los productos guardados en el carrito
          */
        function renderizarCarrito() {
              // Vaciamos todo el html
            DOMcarrito.textContent = '';
              // Quitamos los duplicados
            const carritoSinDuplicados = [...new Set(carrito)];
              // Generamos los Nodos a partir de carrito
            carritoSinDuplicados.forEach((item) => {
                  // Obtenemos el item que necesitamos de la variable base de datos
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                      // ¿Coincide las id? Solo puede existir un caso
                    return itemBaseDatos.id === parseInt(item);
                });
                  // Cuenta el número de veces que se repite el producto
                const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                      // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                    return itemId === item ? total += 1 : total;
                }, 0);
                  // Creamos el nodo del item del carrito
                const miNodo = document.createElement('li');
                miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
                  // Boton de borrar
                const miBoton = document.createElement('button');
                miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                miBoton.textContent = 'X';
                miBoton.style.marginLeft = '1rem';
                miBoton.dataset.item = item;
                miBoton.addEventListener('click', borrarItemCarrito);
                  // Mezclamos nodos
                miNodo.appendChild(miBoton);
                DOMcarrito.appendChild(miNodo);
            });
             // Renderizamos el precio total en el HTML
            DOMtotal.textContent = calcularTotal();
        }

        /**
          * Evento para borrar un elemento del carrito
          */
        function borrarItemCarrito(evento) {
              // Obtenemos el producto ID que hay en el boton pulsado
            const id = evento.target.dataset.item;
              // Borramos todos los productos
            carrito = carrito.filter((carritoId) => {
                return carritoId !== id;
            });
              // volvemos a renderizar
            renderizarCarrito();
        }

        /**
           * Calcula el precio total teniendo en cuenta los productos repetidos
           */
        function calcularTotal() {
              // Recorremos el array del carrito 
            return carrito.reduce((total, item) => {
                  // De cada elemento obtenemos su precio
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                    return itemBaseDatos.id === parseInt(item);
                });
                  // Los sumamos al total
                return total + miItem[0].precio;
            }, 0).toFixed(2);
          }

        /**
          * Varia el carrito y vuelve a dibujarlo
          */
        function vaciarCarrito() {
              // Limpiamos los productos guardados
            carrito = [];
              // Renderizamos los cambios
            renderizarCarrito();
          }

          // Eventos
        DOMbotonVaciar.addEventListener('click', vaciarCarrito);

          // Inicio
        renderizarProductos();
        renderizarCarrito();


localStorage.setItem('precio', 43900);
localStorage.setItem('product', 'Flip');


let precio = localStorage.getItem('precio');
let product = localStorage.getItem('product');
console.log(product, precio); 



var miObjeto = { 'id': '1', 'nombre': 'Combo 1', 'decripcion': 'Cacerola de 18, Cacerola Cuadrada 24 y Bowls de acero' };

// Guardo el objeto como un string
localStorage.setItem('datos', JSON.stringify(miObjeto));


// Obtengo el string previamente salvado y luego
var guardado = localStorage.getItem('datos');

console.log('objeto: ', JSON.parse(guardado));

//Almacenar valores en Local Storage
localStorage.setItem('nombre', 'Urban Grill');

const pre = {
  id:16,
  precio: 38000,
  nombre:'Urban Grill'
}

localStorage.setItem('pre', JSON.stringify(pre));
//Obtener valores de Local Storage
console.log(localStorage.getItem('pre'))


//Eliminar valores de Local Storage
localStorage.removeItem('pre')


const productos = [
  { id: 1 ,  nombre: "Combo 1", precio: 75000 },
  {  id: 2 ,  nombre: "Combo 2", precio: 60000 },
  {  id: 3 ,  nombre: "Combo 3"  , precio: 34000 },
  {  id: 4 ,  nombre: "Combo 4" , precio: 31000},
  {  id: 5 ,  nombre: "Combo 5" , precio: 55000},
  {  id: 6 ,  nombre: "Combo 6" , precio: 60000},
  {  id: 7 ,  nombre: "Combo 7" , precio: 33000},
  {  id: 8 ,  nombre: "Combo 8" , precio: 49000 },
  {  id: 9 ,  nombre: "Combo 9" , precio: 46450},
  {  id: 10 ,  nombre: "Combo 10" , precio: 57000},
  {  id: 11 ,  nombre: "Flip" , precio: 43900},
  {  id: 12 ,  nombre: "Combo 11" , precio: 85200},
  {  id: 13 ,  nombre: "Cacerola Cuadrada" , precio: 58700},
  {  id: 14 ,  nombre: "Combo 12" , precio: 96300},
  {  id: 15 ,  nombre: "Sarten Marsala" , precio: 33300},
  {  id: 16 ,  nombre: "Urban Grill" , precio: 38000},
  {  id: 17 ,  nombre: "Sarten Chef" , precio: 19300},
  {  id: 18 ,  nombre: "Cacerola 18" , precio: 27600},
  {  id: 19 ,  nombre: "Sarten 24" , precio: 36200},
                      ];




const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));



//operador logico and

const carrito1 = []

carrito1.length === 0 && console.log("El carrito está vacío!")

//Desestructuracion

const datos = { id:1, nombre: "Combo 1", descripcion: "Cacerola de 18, Cacerola Cuadrada 24 y Bowls de acero."}

const { id, nombre, descripcion  } = datos
console.log(id)
console.log(nombre)
console.log(descripcion)

//Desestructuración de arrays

const sarten = [18, 20, 24, 28]

const [a, b] = sarten

console.log(a) // 18
console.log(b) // 20


//SPREAD DE ARRAYS


const cacerola = [18 ,20 , 24, 29, ]

// spread ... del array
console.log(...cacerola) // 18 20 24 29


const combo1 = ["Cacerola de 18, Cacerola Cuadrada 24 y Bowls de acero."]
const combo2 = ["Cacerola Cuadrada de 29, Cacerola Cuadrada de 24 y Utensillos de cocina."]

// spread de los dos arrays dentro de otro
const combos = [...combo1, ...combo2]

console.log(combos) 

// spread del array en un objeto
const combosObj = {
    ...combos
}

console.log(combosObj)




Swal.fire({
  title: 'Bienvenidos! Estan a un solo paso de cambiar tu forma de cocinar.',
  width: 600,
  padding: '3em',
  color: '#8D3669',
  background: '#fff url(https://png.pngtree.com/thumb_back/fw800/back_pic/03/89/64/6357d9624e3b1d1.JPG)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://media4.giphy.com/media/2VyVK0GKTciqAqLLSu/giphy.gif")
    left top
    no-repeat
  `
})
