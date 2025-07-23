document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.accordion-item');
    item.classList.toggle('open');
    button.classList.toggle('active');
  });
});
