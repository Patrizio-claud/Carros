
  function setMain(mainID, thumb) {
    const main = document.getElementById(mainID);
    main.style.opacity = '0';
    setTimeout(() => {
      main.src = thumb.src;
      main.style.opacity = '1';
    }, 200);
    // update active thumb
    const gallery = thumb.closest('.car-gallery');
    gallery.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  }