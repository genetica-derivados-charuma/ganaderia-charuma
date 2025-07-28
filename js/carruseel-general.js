const cardsData = [
  {
    subtitle: "Del campo a tu vaso",
    title: "GENETICA Y DERIVADOS ALLAHUANCA",
    desc: "Somos una asociación especializada en la mejora genética de ganado y en la elaboración de productos lácteos de calidad, con raíces en Allahuanca y compromiso con la producción natural, responsable y sostenible",
    image: "../images/nosotros-perfil.jpg",
    links: ["#", "#"]
  },
  {
    subtitle: "Frescura que Alimenta",
    title: "TRADICIÓN BLANCA NATURAL",
    desc: "Es calidad que se siente en cada sorbo. Fresca, nutritiva y 100% natural, nuestra leche es ideal para quienes buscan sabor auténtico y confianza diaria. Directo del campo a tu mesa, con el estándar que tu familia merece.",
    image: "../images/lecheyqueso.jpg",
    links: ["", "#"]
  },
  {
    subtitle: "Tan pura como el campo",
    title: "LECHE SANA Y NATURAL",
    desc: " Es nuestra promesa de frescura, pureza y bienestar. Elaborada sin aditivos ni conservantes, conserva todo su valor nutritivo para una alimentación equilibrada. Elige una leche que cuida de ti y de tu familia, todos los días.",
    image: "../images/leche.jpg",
    links: ["#", "#"]
  },
  {
    subtitle: "Tradicional. Nutritivo. Artesanal",
    title: "QUESO HUAROCHIRANO ARTESANAL",
    desc: "Nuestro queso representa la esencia del campo. Elaborado con leche fresca y técnicas tradicionales, cada pieza guarda el sabor auténtico y la textura perfecta de una producción responsable y natural. Ideal para quienes aprecian lo verdadero, lo puro y lo hecho con esmero.",
    image: "../images/queso.jpg", // asegúrate de tener esta imagen
    links: ["#", "#"]
  }
];

let cardsQueue = [...cardsData];
const container = document.getElementById('cardContainer');
let autoSlideInterval = null;

function renderCards() {
  container.innerHTML = '';

  cardsQueue.forEach((card, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card1');
    if (index === 0) cardDiv.classList.add('active');

    cardDiv.style.backgroundImage = `url('${card.image}')`;
    cardDiv.innerHTML = `
      <div class="card-text">
        <h2 class="card-sub-title">${card.subtitle}</h2>
        <h1 class="card-title1">${card.title}</h1>
      </div>
    `;

    container.appendChild(cardDiv);
  });

  updateMainText(cardsQueue[0]);
}

function updateMainText(activeCard) {
  // Actualiza contenido principal
  const subtitleEl = document.getElementById('subtitle');
  const titleEl = document.getElementById('title');
  const descEl = document.getElementById('description');

  subtitleEl.textContent = activeCard.subtitle;
  titleEl.textContent = activeCard.title;
  descEl.textContent = activeCard.desc;

  // Animación del fondo
  animateBackgroundWithGSAP(activeCard.image);

  // Animaciones de texto con GSAP
  gsap.fromTo(subtitleEl,
    { x: -1500, y: 20, opacity: 0 },
    { x: 0, opacity: 1, duration: 2, ease: "expo.out" }
  );

  gsap.fromTo(titleEl,
    { x: 1500, y: 20, opacity: 0 },
    { x: 0, opacity: 1, duration: 2, ease: "expo.out" }
  );

  gsap.fromTo(descEl,
    { x: -1500, y: 20, opacity: 0 },
    { x: 0, opacity: 1, duration: 2, ease: "expo.out" }
  );
}

function animateBackgroundWithGSAP(newImageUrl) {
  const main = document.querySelector('.main');

  const tempBg = document.createElement('div');
  tempBg.style.position = 'absolute';
  tempBg.style.inset = 0;
  tempBg.style.zIndex = -1;
  tempBg.style.backgroundImage = `url('${newImageUrl}')`;
  tempBg.style.backgroundSize = 'cover';
  tempBg.style.backgroundPosition = 'center';
  tempBg.style.backgroundRepeat = 'no-repeat';
  tempBg.style.opacity = 0;
  tempBg.style.transform = 'scale(0.5)';
  main.appendChild(tempBg);

  gsap.to(tempBg, {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: 'power4.out'
  });

  gsap.to(main, {
    duration: 1.2,
    onComplete: () => {
      main.style.backgroundImage = `url('${newImageUrl}')`;
      tempBg.remove();
    }
  });
}

function nextCard() {
  const cards = document.querySelectorAll('.card1');
  if (cards.length > 0) {
    cards[0].classList.add('removing');
    setTimeout(() => {
      const first = cardsQueue.shift();
      cardsQueue.push(first);
      renderCards();
    }, 300);
  }
}

function prevCard() {
  const cards = document.querySelectorAll('.card1');
  if (cards.length > 0) {
    cards[cards.length - 1].classList.add('removing');
    setTimeout(() => {
      const last = cardsQueue.pop();
      cardsQueue.unshift(last);
      renderCards();
    }, 300);
  }
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextCard, 15000);
}

renderCards();
startAutoSlide();
