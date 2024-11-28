// Función pura que devuelve las tareas filtradas por estado
export const MostrarTareasPorEstado = (tareas, estado) => {
    return tareas.filter(tarea => tarea.estado === estado);
};

// Función pura que muestra las tareas en consola
export const mostrarTareas = (tareas) => {
    if (tareas.length === 0) {
        console.log("No hay tareas.");
    } else {
        tareas.forEach((tarea, i) => {
            console.log(`[${ i + 1}]${ tarea.titulo }`);
    });
}
};
