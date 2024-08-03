document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video-container video');
    let currentVideo = 0;

    function playNextVideo() {
        if (currentVideo < videos.length) {
            videos[currentVideo].play();
            videos[currentVideo].onended = () => {
                videos[currentVideo].pause();
                videos[currentVideo].currentTime = 0;
                currentVideo++;
                playNextVideo();
            };
        }
    }

    playNextVideo();
});




// Función para silenciar todos los videos en el contenedor
function muteVideos() {
    const videos = document.querySelectorAll('.video-container video'); // Selecciona todos los videos dentro del contenedor
    
    videos.forEach(video => {
      video.muted = true; // Silencia el video
    });
  }
  
  // Ejecuta la función cuando la página se carga
  window.addEventListener('load', muteVideos);
  