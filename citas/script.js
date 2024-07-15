document.addEventListener('DOMContentLoaded', actualizar);

let CitasForm = document.getElementById("CitasForm");
let listaCitas = document.getElementById("listaCitas");
let buscarCitas = document.getElementById('buscar');
let nombresBuscados = document.getElementById('nombresBuscados');
let citas = []

function añadirCitas(cita) {
    citas.push(cita);
    guardarEnLocalStorage();  // Guardar citas en el localStorage.
    actualizar();
}

function eliminarCita(index) {
    citas.splice(index, 1); 
    guardarEnLocalStorage();
    actualizar();  
}


function actualizar(){
    listaCitas.innerHTML="";
    citas.forEach((cita, index)=>{
        const fila=document.createElement('tr');
        const Nombre=document.createElement('td');
        Nombre.textContent=cita.nombre;
        fila.appendChild(Nombre);
        const Fechas=document.createElement('td');
        Fechas.textContent=cita.fecha;
        fila.appendChild(Fechas);
        const Horas=document.createElement('td');
        Horas.textContent=cita.horas;
        fila.appendChild(Horas);
        const Sintoma=document.createElement('td');
        Sintoma.textContent=cita.sintomas;
        fila.appendChild(Sintoma);

        // Crear la celda para el botón de eliminar
        const accion= document.createElement('td');
        const btnEliminar= document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className='btn-accion';
        btnEliminar.addEventListener('click', ()=>eliminarCita(index));
        accion.appendChild(btnEliminar);
        fila.appendChild(accion);


        // Añadir la fila a la tabla
        listaCitas.appendChild(fila);
    });
}

function buscar() {
    const nombreBuscado = buscarCitas.value.toLowerCase();
    nombresBuscados.innerHTML = "";  // Limpia resultados anteriores

    if (nombreBuscado) {
        // Filtrar las citas que contienen el nombre buscado
        const resultados = citas.filter(cita => cita.nombre.toLowerCase().includes(nombreBuscado));
        resultados.forEach(cita => {
            // Crear un nuevo div para cada resultado
            const resultadoDiv = document.createElement('div');
            resultadoDiv.className = 'resultado-busqueda';
            resultadoDiv.textContent = `${cita.nombre} - ${cita.fecha} ${cita.horas} - ${cita.sintomas}`;
            nombresBuscados.appendChild(resultadoDiv);
        });
    }
}

// Función para guardar citas en el localStorage
function guardarEnLocalStorage() {
    localStorage.setItem('citas', JSON.stringify(citas));
}

// Función para cargar citas desde el localStorage
function cargarDesdeLocalStorage() {
    const citasGuardadas = JSON.parse(localStorage.getItem('citas'));
    if (citasGuardadas) {
        citas = citasGuardadas;
        actualizar();  // Actualiza la tabla con las citas guardadas
    }
}

cargarDesdeLocalStorage();

buscarCitas.addEventListener('input', buscar);
actualizar();

CitasForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let horas = document.getElementById("hora").value;
    let sintomas = document.getElementById("sintomas").value;


    let nuevaCita = {
        nombre, fecha, horas, sintomas
    };

    añadirCitas(nuevaCita);
    CitasForm.reset();
});