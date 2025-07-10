// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Image swapping logic
document.querySelectorAll('.card').forEach(card => {
  const mainImg = card.querySelector('.image-wrapper img');
  const mainCaption = card.querySelector('.main-caption');
  const thumbnails = card.querySelectorAll('.thumb');

  thumbnails.forEach(thumb => {
    const thumbImg = thumb.querySelector('img');
    const thumbCaption = thumb.querySelector('.image-caption');

    thumbImg.addEventListener('click', () => {
      // Swap image and caption
      const tempSrc = mainImg.src;
      const tempAlt = mainImg.alt;
      const tempCaption = mainCaption.textContent;

      mainImg.src = thumbImg.src;
      mainImg.alt = thumbImg.alt;
      mainCaption.textContent = thumbImg.dataset.caption;

      thumbImg.src = tempSrc;
      thumbImg.alt = tempAlt;
      thumbImg.dataset.caption = tempCaption;
      thumbCaption.textContent = tempCaption;
    });
  });
});
