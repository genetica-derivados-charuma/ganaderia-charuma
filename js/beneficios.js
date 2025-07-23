const carrusel = document.querySelector('.beneficios-carrusel');
  const cards = document.querySelectorAll('.beneficio-card');
  const visibleCards = 4;
  const totalCards = cards.length;

  let currentIndex = 0;

  setInterval(() => {
    currentIndex++;
    if (currentIndex > totalCards - visibleCards) {
      currentIndex = 0;
    }

    const cardWidth = cards[0].offsetWidth;
    const gap = 32; // 2rem de espacio
    const moveX = currentIndex * (cardWidth + gap);

    carrusel.style.transform = `translateX(-${moveX}px)`;
  }, 3000); // cada 3 segundos