const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  const images = card.getAttribute('data-images').split(',');
  const imageDiv = card.querySelector('.project-image');
  let index = 0;

  const changeImage = () => {
    imageDiv.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  };

  changeImage();
  setInterval(changeImage, 3000);
});
function toggleSidebar() {
  document.body.classList.toggle('sidebar-hidden');
}