// Seleciona todos os cards da galeria
const videoCards = document.querySelectorAll('.card');

videoCards.forEach(card => {
  const video = card.querySelector('.insta-video');

  // Ao passar o mouse: Play
  card.addEventListener('mouseenter', () => {
    video.play().catch(error => {
      console.log("O autoplay foi bloqueado pelo navegador:", error);
    });
  });

  // Ao tirar o mouse: Pause e volta pro início
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; 
  });
});