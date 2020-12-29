let moduloTareas = require('./tareas')

const process = require('process');

let comando = process.argv[2];

switch (comando) {
    case 'listar':
        console.log('--------------------------------------------------------');
        console.log('----------------------LISTAR TAREAS----------------------');
        console.log('--------------------------------------------------------');
        let tareas = moduloTareas.leerJSON();
        for (let index = 0; index < tareas.length; index++) {
            console.log('Titulo de la tarea ' + tareas[index].titulo + ', Estado de la tarea ' + tareas[index].estado);
        }
        console.log('--------------------------------------------------------');
        break;
    case 'agregar':
        console.log('--------------------------------------------------------');
        console.log('----------------------AGREGAR TAREA----------------------');
        console.log('--------------------------------------------------------');
        let titulo = process.argv[3]
        let estado = process.argv[4]
        moduloTareas.agregarTareas(titulo, estado)
        console.log('--------------------------------------------------------');
        break;
    case 'deshacer':
        console.log('--------------------------------------------------------');
        console.log('----------------------DESHACER TAREA---------------------');
        console.log('--------------------------------------------------------');
        moduloTareas.deshacerTarea()

        break;
    case 'filtrar':
        console.log('--------------------------------------------------------');
        console.log('----------------------FILTRAR TAREA---------------------');
        console.log('--------------------------------------------------------');
        let filtro = process.argv[3]
        let tareasFiltrada = moduloTareas.filtrarTarea(filtro)
        tareasFiltrada.forEach(function(tarea) {
            console.log('Titulo de la tarea ' + tarea.titulo + ', Con estado: ' + tarea.estado);
        });
        console.log('--------------------------------------------------------');

        break;
    case 'buscar':
        let buscar = process.argv[3]
        let resBusquda = moduloTareas.buscarTarea(buscar)
        if (resBusquda.length === 0) {
            console.log('--------------------------------------------------------');
            console.log('----------------------NO HAY RESULTADO---------------------');
            console.log('--------------------------------------------------------');
        } else {
            console.log('--------------------------------------------------------');
            console.log('----------------------FILTRAR TAREA---------------------');
            console.log('--------------------------------------------------------');
            resBusquda.forEach(function(tarea) {
                console.log('Titulo de la tarea ' + tarea.titulo + ', Con estado: ' + tarea.estado);
            });
        }
        break;
    case 'editar':
        moduloTareas.editarEstado(process.argv[3], process.argv[4])
        moduloTareas.leerJSON()
        break;

    default:
        break;
}