gsap.to(".caja", {
  x: 100,                    // Se mueve 100px a la derecha
  y: 50,                     // Se mueve 50px hacia abajo
  scale: 1.2,                // Aumenta su tamaño en un 20%
  rotate: 45,                // Gira 45 grados
  duration: 2,               // La animación dura 2 segundos
  delay: 0.5,                // Espera 0.5 segundos antes de comenzar
  repeat: 2,                 // Se repite 2 veces (3 en total: 1 original + 2 repeticiones)
  yoyo: true,                // Hace animación de ida y vuelta (efecto rebote)
  ease: "bounce.out",        // Aplica una curva de rebote al final
  backgroundColor: "#ff0000",// Cambia el color de fondo a rojo
  onComplete: () => console.log("¡Listo!") // Ejecuta función al terminar la animación
});


gsap.fromTo("#main",
  {
    x: 500,          // Comienza desde 500px a la derecha
    opacity: 0       // Invisible
  },
  {
    x: 0,            // Termina en su posición original
    opacity: 1,      // Se vuelve visible
    duration: 2,
    ease: "expo.out"
  }
);

gsap.fromTo("#subtitle",
    {
        x: -1500,          // Comienza desde 500px a la derecha  
        y: 20,          // Comienza desde 500px a la derecha
        opacity: 0,
        delay: 5,
        duration: 0.5,            // Invisible
    },
    {
      x: 0,            // Termina en su posición original
      opacity: 1,      // Se vuelve visible
      duration: 2,
      ease: "expo.out"
    }
)
gsap.fromTo("#title",
    {
        x: 1500,          // Comienza desde 500px a la derecha  
        y: 20,          // Comienza desde 500px a la derecha
        opacity: 0,
        delay: 5,
        duration: 0.5,            // Invisible
    },
    {
      x: 0,            // Termina en su posición original
      opacity: 1,      // Se vuelve visible
      duration: 2,
      ease: "expo.out"
    }
)
gsap.fromTo("#description",
    {
        x: -1500,          // Comienza desde 500px a la derecha  
        y: 20,          // Comienza desde 500px a la derecha
        opacity: 0,
        delay: 5,
        duration: 0.5,            // Invisible
    },
    {
      x: 0,            // Termina en su posición original
      opacity: 1,      // Se vuelve visible
      duration: 2,
      ease: "expo.out"
    }
)

function showOverlay(card) {
  const overlay = card.querySelector('.card-overlay');
  gsap.to(overlay, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
    pointerEvents: 'auto'
  });
}

function hideOverlay(card) {
  const overlay = card.querySelector('.card-overlay');
  gsap.to(overlay, {
    y: '100%',
    opacity: 0,
    duration: 0.6,
    ease: "power3.in",
    onComplete: () => {
      overlay.style.pointerEvents = 'none';
    }
  });
}

  gsap.registerPlugin(ScrollTrigger);

  const cards = document.querySelectorAll('.product-card');

  cards.forEach((card, index) => {
    let animProps = { 
      opacity: 0, 
      duration: 1.2, 
      ease: "power4.out"
    };

    if (index === 0) {
      animProps.x = -100;
    } else if (index === 1) {
      animProps.y = -100;
    } else if (index === 2) {
      animProps.y = 100;
    } else if (index === 3) {
      animProps.x = 100;
    }

    gsap.from(card, {
      ...animProps,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse", // 🧠 clave para animar ida y vuelta
        // markers: true // 👉 para ver los puntos en pantalla (solo para pruebas)
      }
    });
  });

