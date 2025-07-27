  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        // Cierra todos los demás items abiertos
        items.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
          }
        });

        // Alterna el item actual
        item.classList.toggle('open');
      });
    });
  });