const afterBox = document.querySelector('.after-box');
    const productRow = document.querySelector('.product-row');

    productRow.addEventListener('mouseenter', () => {
      const width = productRow.offsetWidth - 30; // 30 = .after-box width
      const height = productRow.offsetHeight - 30;

      anime({
        targets: afterBox,
        keyframes: [
          { top: 0, left: 0, rotate: 0 },
          { top: 0, left: width, rotate: 90 },
          { top: height, left: width, rotate: 180 },
          { top: height, left: 0, rotate: 270 },
          { top: 0, left: 0, rotate: 360 }
        ],
        duration: 4000,
        easing: 'easeInOutSine'
      });
    });