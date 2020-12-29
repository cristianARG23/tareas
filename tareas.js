const fs = require('fs');



let moduloTareas = {
    archivo: './tareas.json',
    leerJSON: function() {
        let tareasJSON = fs.readFileSync(this.archivo, 'utf-8')
        return JSON.parse(tareasJSON)
    },
    agregarTareas: function(titulo, estado) {
        let listaDeTareas = this.leerJSON();
        let nuevaTrea = {
            titulo: titulo,
            estado: estado
        }
        listaDeTareas.push(nuevaTrea)
        this.guardarJSON(listaDeTareas)
        return console.log('--- Tu tarea a sido agregada con exito');
    },
    guardarJSON: function(info) {
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync(this.archivo, nuevoJSON, 'utf-8');

    },
    deshacerTarea: function() {
        let listaDeTareas = this.leerJSON();
        listaDeTareas.pop()
        this.guardarJSON(listaDeTareas)
        return console.log('--- Su ultima tarea fue eliminada');

    },
    filtrarTarea: function(filtro) {
        let listaDeTareas = this.leerJSON();
        let tareasFiltradas = listaDeTareas.filter((tarea) => {
            return tarea.estado === filtro
        })
        return tareasFiltradas

    },
    buscarTarea: function(buscar) {
        let listaDeTareas = this.leerJSON();

        let resultadoDeLaBusqueda = listaDeTareas.filter((tarea) => {
            return tarea.titulo.includes(buscar)
        })
        return resultadoDeLaBusqueda

    },
    editarEstado: function(estadoAnterior, nuevoEstado) {
        let listaDeTareas = this.leerJSON();
        let Tarea = function(titulo, estado) {
            this.titulo = titulo;
            this.estado = estado
        }
        let listaModificada = listaDeTareas.map(function(tarea) {
            if (tarea.estado == estadoAnterior) {
                tarea.estado = nuevoEstado
            }
            return new Tarea(tarea.titulo, tarea.estado)
        })
        this.guardarJSON(listaModificada)
    }
}
module.exports = moduloTareas