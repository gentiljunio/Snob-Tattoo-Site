const videoCards = document.querySelectorAll('.card');

videoCards.forEach(card => {
  const video = card.querySelector('.insta-video');

  card.addEventListener('mouseenter', () => {
    video.play().catch(error => {
      console.log("O autoplay foi bloqueado pelo navegador:", error);
    });
  });
  
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 22;
  });
});
