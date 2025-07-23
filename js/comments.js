    const comments = document.querySelectorAll('.comment');
    let index = 0;

    setInterval(() => {
      comments[index].classList.remove('active');
      index = (index + 1) % comments.length;
      comments[index].classList.add('active');
    }, 5000); // cada 5 segundos