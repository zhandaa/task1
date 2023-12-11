<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

<script>
  document.addEventListener("DOMContentLoaded", function () {

    anime({
      targets: '.animate__flash',
      loop: true,
      duration: 1000,
      easing: 'easeInOutExpo'
    });

    anime({
      targets: '.animate__rotateIn',
      loop: true,
      rotate: '1turn',
      duration: 2000,
      easing: 'linear'
    });

    anime({
      targets: '.animate__slideInRight',
      translateX: [-500, 0],
      duration: 1000,
      easing: 'easeOutQuad'
    });

    anime({
      targets: '.table',
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 1000,
      delay: anime.stagger(100),
      easing: 'easeInOutQuad'
    });
  });
</script>
</body>
</html>
