let isPlaying = true;

  function playVideo(event) {
    event.preventDefault();

    // Oculta el texto y botón inicial
    document.getElementById('ctaOverlay').style.display = 'none';

    // Muestra el contenedor del video
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'block';

    // Inserta el video con controles personalizados
    videoContainer.innerHTML = `
      <video id="myVideo" autoplay muted playsinline>
        <source src="videos/videoelaboracion.mp4">
        Tu navegador no soporta el video.
      </video>
      <button id="pauseBtn">⏸</button>
    `;

    // Espera a que cargue y luego activa el sonido
    const video = document.getElementById('myVideo');
    const pauseBtn = document.getElementById('pauseBtn');

    video.addEventListener('canplay', () => {
      video.muted = false;
      video.play();
    });

    pauseBtn.addEventListener('click', () => {
      if (isPlaying) {
        video.pause();
        pauseBtn.textContent = '▶';
      } else {
        video.play();
        pauseBtn.textContent = '⏸';
      }
      isPlaying = !isPlaying;
    });
  }