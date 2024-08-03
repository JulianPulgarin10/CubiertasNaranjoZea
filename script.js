


document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  // Mostrar el botón cuando el usuario se desplace hacia abajo
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // Ajusta el valor de 300 según tus necesidades
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  // Volver al inicio cuando se haga clic en el botón
  scrollToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});





