const patrocinadoresContainer = document.querySelector('.container-patrocinadores');

patrocinadoresContainer.addEventListener('mouseenter', () => {
  patrocinadoresContainer.style.animationPlayState = 'paused';
});

patrocinadoresContainer.addEventListener('mouseleave', () => {
  patrocinadoresContainer.style.animationPlayState = 'running';
});