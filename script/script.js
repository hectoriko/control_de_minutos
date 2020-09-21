


const botonGuardar = document.getElementById('botonGuardar');

function procesarNombres() { 
  /* Obtener campo nombre alumno */
  const alumnoUno = document.getElementById('campoNombreUno').value;
  const alumnoDos = document.getElementById('campoNombreDos').value;
  const alumnoTres = document.getElementById('campoNombreTres').value;

  /* Obtener puntuación alumno */
  /* const cincoMinUno = document.getElementById('cincoMinUno').value;
  const diezMinUno = document.getElementById('diezMinUno').value;
  const quinceMinUno = document.getElementById('quinceMinUno').value; */

  


  /* Colocar nombres */
  document.getElementById('nombreUsuarioPrimero').innerHTML = alumnoUno;
  document.getElementById('nombreUsuarioSegundo').innerHTML = alumnoDos;
  document.getElementById('nombreUsuarioTercero').innerHTML = alumnoTres;

  /* Colocar minutos */
   /* document.getElementById('tiempoUsuarioPrimero').innerHTML = cincoMinUno;
  document.getElementById('tiempoUsuarioSegundo').innerHTML = diezMinUno;
  document.getElementById('tiempoUsuarioTercero').innerHTML = quinceMinUno; */

};



botonGuardar.onclick = procesarNombres;







/* class alumno {
  constructor (name) {
    this.name = nombre;
    this.apellido= apellido;
    this.minutosIniciales= 0;
    this.minutosAcumlados = 0 + minutosIniciales;
    this.foto= foto;
  }
};



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
