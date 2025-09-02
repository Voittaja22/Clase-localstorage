const btnGuardar = document.getElementById('guardarBtn');
const inputNombre = document.getElementById('nombre');
const mostrarNombre = document.getElementById('mostrarNombre');

// Mostrar el nombre guardado cuando se carga la página
window.addEventListener('DOMContentLoaded', () => {
const nombreGuardado = localStorage.getItem('nombreUsuario');
if (nombreGuardado) {
mostrarNombre.textContent = `Hola tu nombre es: ${nombreGuardado}`;
inputNombre.value = nombreGuardado;
}
});

// Guardar el nombre al hacer click
btnGuardar.addEventListener('click', function(){
const valorInput = inputNombre.value.trim();
if(valorInput !== ""){
localStorage.setItem('nombreUsuario', valorInput);
mostrarNombre.textContent = `Nombre guardado: ${valorInput}`;
alert('Nombre guardado en LocalStorage');
} else {
alert('Por favor escribe un nombre antes de guardar.');
}
});
