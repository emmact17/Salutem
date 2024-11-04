document.addEventListener('DOMContentLoaded', function() {
  // Muestra el loader
  document.getElementById('loader').style.opacity = '1';

  // Función para ocultar el loader con un efecto de fade out
  function hideWithFadeOut() {
    var loader = document.getElementById('loader');
    loader.style.opacity = '0'; // Cambia la opacidad a 0
    // Espera un poco antes de eliminar el loader
    setTimeout(function() {
      loader.style.display = 'none';
    }, 500); // Tiempo de la animación + un pequeño retraso
  }

  // Oculta el loader después de 3 segundos
  setTimeout(hideWithFadeOut, 1000);
});
