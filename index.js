document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.miniatura').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const gallery = thumb.closest('.car-gallery');
      const main = gallery.querySelector('.gallery-main');
      if (!main) return;
      setMain(main.id, thumb);
    });
  });
});

function setMain(mainID, thumb) {
  const main = document.getElementById(mainID);
  if (!main) return;
  main.style.opacity = '0';
  setTimeout(() => {
    main.src = thumb.src;
    main.style.opacity = '1';
  }, 200);
  const gallery = thumb.closest('.car-gallery');
  gallery.querySelectorAll('.miniatura').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}