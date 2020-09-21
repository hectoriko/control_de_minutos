const botonGuardar = document.getElementById('botonGuardar');

function procesarNombres() { 
  /* Obtener campo nombre alumno */
  const alumnoUno = document.getElementById('campoNombreUno').value;
  const alumnoDos = document.getElementById('campoNombreDos').value;
  /* const alumnoTres = document.getElementById('campoNombreTres').value; */

  const seleccionadoTres = document.getElementById("campoNombreTres");
  const alumnoTres = seleccionadoTres.options[seleccionadoTres.selectedIndex].text;

    /* Colocar nombres */
  document.getElementById('nombreUsuarioPrimero').innerHTML = alumnoUno;
  document.getElementById('nombreUsuarioSegundo').innerHTML = alumnoDos;
  document.getElementById('nombreUsuarioTercero').innerHTML = alumnoTres;

  /* Colocar minutos */
  document.getElementById('tiempoUsuarioPrimero').innerHTML = 15;
  document.getElementById('tiempoUsuarioSegundo').innerHTML = 10;
  document.getElementById('tiempoUsuarioTercero').innerHTML = 5;

};

botonGuardar.onclick = procesarNombres;


let sumarMinutos = (nombre, minutos) => {

};


const hector {
  name: 'Héctor',
  minutosAcumulados: 25;
};

const ana {
  name: 'Ana',
  minutosAcumulados: 15;

}


/*
class alumno {
  constructor (nombre, minutosAcumulados) {
    this.nombre = nombre;
    this.minutosAcumulados = minutosAcumulados;
  }
  
  get nombre() {
    return this.nombre;
  }

  get minutosAcumulados() {
    return this.minutosAcumulados;
  }
  
};
} */











/* Intento de hacer la funcion de ocultar/mostrar con vanilla Javascript */

/* let siguientes = document.getElementById("siguientes");
let parrillaOculta = document.getElementById("parrillaOculta");

function toggleSiguientes() {
  if (parrillaOculta.style.display === "none") {
    parrillaOculta.style.display = "block";
  } else {
    parrillaOculta.style.display = "none";
  };
} 

siguientes.onclick = toggleSiguientes();
 */
