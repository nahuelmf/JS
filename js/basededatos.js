//fetch

function cargarDatos(){
    fetch('baseDeDatos.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta))
}

cargarDatos();