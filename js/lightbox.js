const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const botonCerrar = document.querySelector('.close');

// 1. Detectar el clic en las fotos de la galería
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        // Captura la ruta exacta de la imagen seleccionada y se la envía a la función
        const ruta = imagen.getAttribute('src');
        aparecerImagen(ruta);
    });
});

// 2. Función para mostrar la imagen seleccionada en grande
const aparecerImagen = (ruta) => {
    imagenesLight.src = ruta; // Inyecta la ruta de la foto seleccionada en el src vacío
    contenedorLight.classList.add('show');       // Muestra el fondo oscuro
    imagenesLight.classList.add('showImagen');   // Agranda la foto
}

// 3. Cerrar el modal al presionar la cruz (X)
botonCerrar.addEventListener('click', () => {
    contenedorLight.classList.remove('show');
    imagenesLight.classList.remove('showImagen');
    imagenesLight.src = ""; // Limpia el src al cerrar por seguridad
});

// 4. Cerrar también si hacen clic en el fondo oscuro
contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight && e.target !== botonCerrar) {
        contenedorLight.classList.remove('show');
        imagenesLight.classList.remove('showImagen');
        imagenesLight.src = "";
    }
});
