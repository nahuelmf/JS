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



