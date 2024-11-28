import PromptSync from "prompt-sync";
import { mostrarTareas } from "./Mostrar.js";
const prompt = PromptSync();

// Función pura para editar una tarea
export const editarTarea = (tareas) => {
    // Mostrar tareas para que el usuario seleccione
    mostrarTareas(tareas);
    const tareaIndex = parseInt(prompt("Elija el número de la tarea que desea editar: ")) - 1;
  
    if (tareaIndex >= 0 && tareaIndex < tareas.length) {
      let nuevaTarea = { ...tareas[tareaIndex] };
  
      const editar = prompt("1.Editar titulo 2.Editar descripcion 3.Editar estado 4.Editar dificultad 0.Terminar: ");
      switch (editar) {
        case "1":
          nuevaTarea.titulo = prompt("Nuevo título: ");
          break;
        case "2":
          nuevaTarea.descripcion = prompt("Nueva descripción: ");
          break;
        case "3":
          nuevaTarea.estado = prompt("Nuevo estado (P)pendiente,(E)en curso,(T)terminado,(C)cancelado: ").toUpperCase();
          break;
        case "4":
          nuevaTarea.dificultad = prompt("Nueva dificultad (F)facil,(M)media,(D)dificil: ").toUpperCase();
          break;
        case "0":
          return tareas;  // No editamos nada, devolvemos la lista sin cambios
        default:
          console.log("Opción incorrecta.");
      }
  
      // Reemplazar la tarea editada en el arreglo original
      return [
        ...tareas.slice(0, tareaIndex),
        nuevaTarea,
        ...tareas.slice(tareaIndex + 1)
      ];
    } else {
      console.log("Tarea no válida.");
      return tareas;
    }
  };