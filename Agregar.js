import PromptSync from "prompt-sync";
const prompt = PromptSync();


// Función que retorna el estado inicial de las tareas sin mutarlas
const crearTarea = (titulo = "Sin título", descripcion = "Sin descripción", estado = "P", dificultad = "F") => ({
    titulo: titulo,
    descripcion: descripcion,
    estado: estado,
    dificultad: dificultad,
});


// Función pura que agrega una nueva tarea a la lista de tareas
export const agregarTarea = (tareas) => {
    const titulo = prompt("Designe el título de la tarea: ");
    const descripcion = prompt("Designe la descripción de la tarea: ");
    let estado = prompt("Designe el estado de la tarea (P)pendiente,(E)en curso,(T)terminado,(C)cancelado: ").toUpperCase();
    let dificultad = prompt("Designe la dificultad de la tarea (F)facil,(M)media,(D)dificil: ").toUpperCase();

    return [
        ...tareas,
        crearTarea(titulo, descripcion, estado, dificultad)
    ];
};