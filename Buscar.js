// Función pura para buscar tareas que coincidan con el título
export const buscarTarea = (tareas, nombre) => {
    return tareas.filter(tarea => tarea.titulo.toLowerCase().includes(nombre.toLowerCase()));
};