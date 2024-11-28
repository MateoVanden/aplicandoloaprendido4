import PromptSync from "prompt-sync";
import { mostrarTareas, MostrarTareasPorEstado } from "./Mostrar.js";
import { editarTarea } from "./Editar.js";
import { buscarTarea } from "./Buscar.js";
import { agregarTarea } from "./Agregar.js";
const prompt = PromptSync();

// Función pura que maneja el flujo de la visualización de tareas y edición
const main = (tareas) => {
    const opcion = parseInt(prompt("1.Ver tareas 2.Buscar tarea 3.Agregar tarea 4.Editar 5.Salir: "));

    switch (opcion) {
        case 1:
            const op = parseInt(prompt("1.Todas 2.Pendientes 3.Terminadas 4.En curso: "));
            switch (op) {
                case 1:
                    mostrarTareas(tareas);
                    break;
                case 2:
                    let varPendiente = MostrarTareasPorEstado(tareas, "P");
                    console.log("Tareas Pendientes: ", varPendiente);
                    break;
                case 3:
                    let varTerminada = MostrarTareasPorEstado(tareas, "T");
                    console.log("Tareas Terminadas: ", varTerminada);
                    break;
                case 4:
                    let varEnCurso = MostrarTareasPorEstado(tareas, "E");
                    console.log("Tareas En curso: ", varEnCurso);
                    break;
                default:
                    console.log("Opcion incorrecta.");
                    break;
            }
            break;
        case 2:
            const nombre = prompt("Buscar tarea: ");
            const tareasEncontradas = buscarTarea(tareas, nombre);
            mostrarTareas(tareasEncontradas);
            break;
        case 3:
            return agregarTarea(tareas);  // Devuelve el nuevo arreglo con la tarea agregada
        case 4:
            let tareaEditada = editarTarea(tareas);
            console.log("Tarea editada: ",tareaEditada);
            break;
        case 5:
            console.log("Gracias por usar el programa.");
            return tareas;  // Retorna sin cambios
        default:
            console.log("Opción incorrecta.");
            break;
    }

    return tareas;
};

// MAIN - Ciclo principal
export let tareas = [];
let continuar = true;
while (continuar) {
    tareas = main(tareas);  // Llamamos a la función que maneja tareas, actualizando la lista si es necesario
    continuar = prompt("¿Desea continuar? (s/n): ").toLowerCase() === "s";
}