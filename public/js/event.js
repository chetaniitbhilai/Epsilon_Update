function showImages(card) {
  const images = card.querySelectorAll('.popup-images img');
  if (images.length === 0) {
    console.log('No images found in popup-images');
    return;
  }

  const maxWidth = window.innerWidth - 150;  // width of cloned images
  const maxHeight = window.innerHeight - 150;

  images.forEach(img => {
    const floating = img.cloneNode();
    floating.classList.add('popup-image-fly');

    floating.style.top = Math.random() * maxHeight + 'px';
    floating.style.left = Math.random() * maxWidth + 'px';
    floating.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(floating);

    setTimeout(() => {
      floating.style.opacity = '0';
      setTimeout(() => floating.remove(), 500);
    }, 4500);
  });
}
function toggleSidebar() {
  document.body.classList.toggle('sidebar-hidden');
}

