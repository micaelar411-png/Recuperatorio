/* Creo un array para ingresar los datos del repositorio*/
let obrasMusicales = [];
let cantidadTotal = 0;
let tiempoTransferenciaMs = 0;
let costoMensualMb = 0;
// capturo los datos del formulario
let inputCantidad = document.querySelector('#cantidaddeobras');
let inputTiempo = document.querySelector('#tiempodetransferencia');
let inputCosto = document.querySelector('#costomensual');
let btnIniciar = document.querySelector('#botoniniciar');
let fieldsetConfig = document.querySelector('#fieldsetconfiguracion');
let contadorObras = document.querySelector('#contadorobras');
let fieldsetObra = document.querySelector('#fieldsetobra');
let inputNombre = document.querySelector('#nombre');
let inputDuracion = document.querySelector('#duracion');
let inputPeso = document.querySelector('#pesodelaobra');
let btnGuardar = document.querySelector('#agregar');
let btnCalcular = document.querySelector('#botoncalcular');
let btnReiniciar = document.querySelector('#botonreset');
let contenedorResultados = document.querySelector('#resultados');
// Le asigno a los botones un evento que evita que se recargue la pagina
btnIniciar.addEventListener('click', function(e) {
    e.preventDefault();
    ingresarDatos();
     })
btnGuardar.addEventListener('click', function(e){
    e.preventDefault();
    ingresarObra();

})
btnCalcular.addEventListener('click', function (e) {
    e.preventDefault();
    calcularResultados();
});

btnReiniciar.addEventListener('click', function (e) {
    e.preventDefault();
    reiniciarSistema();
});
// Asigno una funcion para validar los datos de ingreso
function ingresarDatos(){
        let cantidad = Number(inputCantidad.value);
    if (isNaN(cantidad) || cantidad <= 0) {
        alert('La cantidad de obras debe ser un número entero mayor a 0');
        return;
    }

    let tiempo = Number(inputTiempo.value);
    if (isNaN(tiempo) || tiempo <= 0) {
        alert('El tiempo de transferencia debe ser un número mayor a 0');
        return;
    }

    let costo = Number(inputCosto.value);
    if (isNaN(costo) || costo <= 0) {
        alert('El costo mensual debe ser un número mayor a 0');
        return;
    }
 // Asignación de variables de configuración
    cantidadTotal = cantidad;
    tiempoTransferenciaMs = tiempo;
    costoMensualMb = costo;

    // Transición de estado entre formularios, se utiliza el atributo disabled para los campos de input
    fieldsetConfig.disabled = true;
    fieldsetObra.disabled = false;
    let mensajeInicial = 'Obras cargadas: 0 de ' + cantidadTotal;
contadorObras.innerHTML = mensajeInicial;

    return true;
}   
// Función para capturar, validar e ingresar cada obra individual al array.
function ingresarObra() {
    let nombreObra = inputNombre.value;
    if (nombreObra == '') {
        alert('El nombre no puede estar vacío');
        return;
    }

    let duracionObra = Number(inputDuracion.value);
    if (isNaN(duracionObra) || duracionObra <= 0) {
        alert('La duración debe ser un número mayor a 0');
        return;
    }

    let pesoObra = Number(inputPeso.value);
    if (isNaN(pesoObra) || pesoObra <= 0) {
        alert('El peso del archivo debe ser un número mayor a 0');
        return;
    }
// Creo un objeto para el guardado del array
    let obra = {
        nombre: nombreObra,
        duracion: duracionObra,
        peso: pesoObra
    };
    obrasMusicales.push(obra);
// Limpio los campos
    inputNombre.value = '';
    inputDuracion.value = '';
    inputPeso.value = '';

let mensajeProgreso = 'Obras cargadas: ' + obrasMusicales.length + ' de ' + cantidadTotal;
contadorObras.innerHTML = mensajeProgreso;
 // Verifico el límite de carga cumplido
    if (obrasMusicales.length == cantidadTotal) {
        fieldsetObra.disabled = true;
        btnCalcular.disabled = false;
    }
 return true;
}
// Creo una funcion para procesar los promedios
function calcularResultados() {
    let duracionTotal = 0;
    let pesoTotal = 0;
    let obraMayor = obrasMusicales[0];

    for (let i = 0; i < obrasMusicales.length; i++) {
        duracionTotal += obrasMusicales[i].duracion;
        pesoTotal += obrasMusicales[i].peso;

        if (obrasMusicales[i].duracion > obraMayor.duracion) {
            obraMayor = obrasMusicales[i];
        }
    }

    let duracionPromedio = duracionTotal / obrasMusicales.length;
    let tiempoDescargaMayorMs = obraMayor.peso * tiempoTransferenciaMs;
    let presupuestoAnual = (pesoTotal * costoMensualMb) * 12;

    // Modificaciones aplicadas en el dom

  document.querySelector('#resultados').innerHTML = '<h3>Resultados del Repositorio</h3>' +
        '<p><strong>1. Duración total:</strong> ' + duracionTotal + ' minutos.</p>' +
        '<p><strong>Duración promedio:</strong> ' + duracionPromedio + ' minutos.</p>' +
        '<p><strong>2. Obra de mayor duración:</strong> ' + obraMayor.nombre + ' (' + obraMayor.duracion + ' minutos).</p>' +
        '<p><strong>Tiempo de descarga de la obra mayor:</strong> ' + tiempoDescargaMayorMs + ' ms.</p>' +
        '<p><strong>3. Presupuesto anual de almacenamiento:</strong> $' + presupuestoAnual + '</p>';
//declaro las variables para habilitar o desabilitar
    btnCalcular.disabled = true;
    btnReiniciar.disabled = false;
}

// Función para restablecer todas las variables y controles a su valor original
function reiniciarSistema() {
    obrasMusicales = [];
    cantidadTotal = 0;
    tiempoTransferenciaMs = 0;
    costoMensualMb = 0;

    fieldsetConfig.disabled = false;
    inputCantidad.value = '';
    inputTiempo.value = '';
    inputCosto.value = '';

    fieldsetObra.disabled = true;
    inputNombre.value = '';
    inputDuracion.value = '';
    inputPeso.value = '';
    contadorObras.innerText = 'Obras cargadas: 0';

    btnCalcular.disabled = true;
    btnReiniciar.disabled = true;
let mensajeReinicio = 'Obras cargadas: 0';
contadorObras.innerHTML = mensajeReinicio;};

