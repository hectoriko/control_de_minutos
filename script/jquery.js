/* --- jQuery --- */
$(document).ready(() => {
  /* Mostar/ocultar usuarios parrilla */
  $('.siguientes').on('click', () => {
    $('.parrillaOculta').fadeToggle(800);
    $('.flecha').toggleClass('rotar');
    /* --- Cambia el texto --- */
    $('.textoACambiar').text($('.textoACambiar').text() == 'Ver siguientes' ? 'Ocultar siguientes' : 'Ver siguientes');
  })
});


