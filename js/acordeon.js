const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-header.active');

        if (openItem && openItem !== header) {
          openItem.classList.remove('active');
          openItem.nextElementSibling.classList.remove('open');
          openItem.nextElementSibling.style.maxHeight = null;
        }

        header.classList.toggle('active');
        const content = header.nextElementSibling;

        if (header.classList.contains('active')) {
          content.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.classList.remove('open');
          content.style.maxHeight = null;
        }
      });

      // Expand only the first by default
      if (header.classList.contains('active')) {
        const content = header.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });