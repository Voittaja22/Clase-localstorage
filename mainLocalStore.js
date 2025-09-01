const btnGuardar = document.getElementById('guardarBtn')

btnGuardar.addEventListener('click', function(){
    const inputNombre = document.getElementById('nombre');
    const valorInput = inputNombre.value;
    localStorage.setItem('nombreUsuario', valorInput);
    alert('Nombre guardado en local storage');
    console.log(localStorage.getItem('nombreUsuario'))
})