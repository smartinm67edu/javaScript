const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Clase Tarea
class Tarea {
  constructor(nombre) {
    this.nombre = nombre;
    this.completada = false;
  }

  completar() {
    this.completada = true;
  }
}

// Clase ListaDeTareas
class ListaDeTareas {
  constructor() {
    this.tareas = [];
  }

  //agregar una nueva tarea
  agregarTarea(nombre) {
    const tarea = new Tarea(nombre);
    this.tareas.push(tarea);
    console.log(`Tarea "${nombre}" agregada.`);
  }

  //marcar una tarea como completada
  completarTarea(nombre) {
    const tarea = this.tareas.find(tarea => tarea.nombre === nombre);
    if (tarea) {
      tarea.completar();
      console.log(`Tarea "${nombre}" completada.`);
    } else {
      console.log(`Tarea "${nombre}" no encontrada.`);
    }
  }

  //mostrar las tareas pendientes
  verTareasPendientes() {
    console.log("Tareas pendientes:");
    this.tareas.forEach(tarea => {
      if (!tarea.completada) {
        console.log(`- ${tarea.nombre}`);
      }
    });
  }

  //mostrar las tareas completadas
  verTareasCompletadas() {
    console.log("Tareas completadas:");
    this.tareas.forEach(tarea => {
      if (tarea.completada) {
        console.log(`- ${tarea.nombre}`);
      }
    });
  }
}

//la lista de tareas
const listaDeTareas = new ListaDeTareas();

function mostrarMenu() {
  console.log("1. Agregar tareas");
  console.log("2. Completar tareas");
  console.log("3. Ver tareas completadas");
  console.log("4. Ver tareas pendientes");
  console.log("5. Salir");

  rl.question("Seleccione una opción: ", (opcion) => {
    switch (parseInt(opcion)) {
      case 1:
        rl.question("Ingrese el nombre de la tarea: ", (tareaNombre) => {
          listaDeTareas.agregarTarea(tareaNombre);
          mostrarMenu();
        });
        break;
      case 2:
        rl.question("Ingrese el nombre de la tarea a completar: ", (tareaACompletar) => {
          listaDeTareas.completarTarea(tareaACompletar);
          mostrarMenu();
        });
        break;
      case 3:
        listaDeTareas.verTareasCompletadas();
        mostrarMenu();
        break;
      case 4:
        listaDeTareas.verTareasPendientes();
        mostrarMenu();
        break;
      case 5:
        console.log("Saliendo...");
        rl.close();
        break;
      default:
        console.log("Opción no valida.");
        mostrarMenu();
        break;
    }
  });
}

mostrarMenu();
