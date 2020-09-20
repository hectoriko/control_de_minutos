/* --- jQuery --- */
$(document).ready(() => {
  /* Mostar/ocultar usuarios parrilla */
  $('.siguientes').on('click', () => {
    $('.usuarioParrilla').fadeToggle(800);
    $('.flecha').toggleClass('rotar');
  });
})