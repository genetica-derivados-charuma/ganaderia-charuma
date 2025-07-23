const carrusel = document.querySelector('.carrusel-aliados');
  const imgs = Array.from(carrusel.querySelectorAll('.carrusel-img'));
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let intervalo;

  function animarDesdeY(img) {
    gsap.fromTo(img, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }

  function mostrarImagen(index) {
    imgs.forEach((img, i) => {
      if (i === index) {
        img.style.opacity = "1";
        animarDesdeY(img);
      } else {
        gsap.to(img, {
          opacity: 0.3,
          y: 0,
          duration: 0.3
        });
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function siguiente() {
    currentIndex = (currentIndex + 1) % imgs.length;
    mostrarImagen(currentIndex);
  }

  function iniciarCarrusel() {
    intervalo = setInterval(siguiente, 10000);
  }

  function detenerCarrusel() {
    clearInterval(intervalo);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      detenerCarrusel();
      currentIndex = i;
      mostrarImagen(currentIndex);
      setTimeout(iniciarCarrusel, 1000);
    });
  });

  mostrarImagen(currentIndex);
  iniciarCarrusel();