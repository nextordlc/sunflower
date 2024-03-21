var flores = [
    {
        flor: "https://cdn.pixabay.com/photo/2016/08/02/13/40/sun-flower-1563432_960_720.png"
    },
    {
        flor: "https://cdn.pixabay.com/photo/2016/08/02/13/40/sun-flower-1563432_960_720.png"
    },
    {
        flor: "https://cdn.pixabay.com/photo/2012/04/24/18/09/sunflower-40732_1280.png"
    },
    {
        flor: "https://cdn.pixabay.com/photo/2020/01/28/08/22/sunflower-4799169_1280.png"
    },
];

function obtenerFlorAleatoria() {
    // Obtener un índice aleatorio dentro del rango del array flores
    var indiceAleatorio = Math.floor(Math.random() * flores.length);

    // Obtener la flor aleatoria usando el índice aleatorio
    var florAleatoria = flores[indiceAleatorio].flor;

    // Asignar la URL de la flor aleatoria a la variable src
    var src = florAleatoria;

    // Retornar la variable src con la URL de la flor aleatoria
    return src;
}

function cuadradoExisteEnPosicion(posX, posY) {
    // Obtener todos los elementos con la clase 'cuadrado'
    var cuadrados = document.getElementsByClassName("cuadrado");

    // Iterar sobre cada cuadrado para verificar su posición
    for (var i = 0; i < cuadrados.length; i++) {
        var cuadrado = cuadrados[i];
        var rect = cuadrado.getBoundingClientRect();
        var cuadradoX = rect.left;
        var cuadradoY = rect.top;

        // Verificar si el cuadrado existe en la posición especificada
        if (cuadradoX === posX && cuadradoY === posY) {
            return true; // El cuadrado existe en la posición especificada
        }
    }

    return false; // No se encontró ningún cuadrado en la posición especificada
}


function crearCuadrado() {
    var anchoVentana = window.innerWidth;
    var altoVentana = window.innerHeight;

    var posX = Math.floor(Math.random() * (anchoVentana - 100)); // Restamos 100 para que el cuadrado no se salga completamente de la pantalla
    var posY = Math.floor(Math.random() * (altoVentana - 100));

    // Verificar si ya existe un cuadrado en la posición especificada
    if (!cuadradoExisteEnPosicion(posX, posY)) {
        // Crear un nuevo elemento div
        var cuadrado = document.createElement("a");
        cuadrado.className = "cuadrado";
        cuadrado.style.left = posX + "px"; // Posición X
        cuadrado.style.top = posY + "px"; // Posición Y

        var imagen = document.createElement("img");
        imagen.className = "imagen";
        imagen.src = obtenerFlorAleatoria(); // Especifica la ruta de la imagen
        imagen.alt = "flor"; // Opcional: agregar una descripción de la imagen

        // Agregar la imagen al cuadrado
        cuadrado.appendChild(imagen);

        // Agregar el cuadrado al documento HTML
        document.body.appendChild(cuadrado);
    } else {
        console.log("Ya existe un cuadrado en la posición especificada.");
    }
}

function crearCuadradoEnPosicion() {
    // Obtener las coordenadas X e Y desde los inputs en el HTML
    var coordenadaX = parseInt(document.getElementById("coordenadaX").value);
    var coordenadaY = parseInt(document.getElementById("coordenadaY").value);

    // Crear un nuevo elemento div (cuadrado)
    var cuadrado = document.createElement("a");

    // Establecer los estilos del cuadrado
    cuadrado.style.width = "100px";
    cuadrado.style.height = "100px";
    cuadrado.style.position = "absolute";
    cuadrado.style.left = coordenadaX + "px"; //Posición X
    cuadrado.style.top = coordenadaY + "px"; // Posición Y
    var imagen = document.createElement("img");
    imagen.className = "imagen";
    imagen.src = obtenerFlorAleatoria(); // Especifica la ruta de la imagen
    imagen.alt = "flor"; // Opcional: agregar una descripción de la imagen

    // Agregar la imagen al cuadrado
    cuadrado.appendChild(imagen);

    // Agregar el cuadrado al documento HTML
    document.body.appendChild(cuadrado);
}


var botonAleatorio = document.getElementById("botonAgregar");

// Agregar un evento click al botón
botonAleatorio.addEventListener("click", function () {
    // Llamar a la función para crear un cuadrado cuando se haga clic en el botón
    crearCuadrado();
});

var insertar = document.getElementById("insertar");

insertar.addEventListener("click", function () {
    // Llamar a la función para crear un cuadrado en la posición especificada cuando se haga clic en el botón
    crearCuadradoEnPosicion();
});