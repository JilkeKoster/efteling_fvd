// Event listener voor touch-apparaten (start van drag)
sliderContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
    sliderContainer.style.cursor = 'grabbing';
});

// Event listener voor touch-apparaten (beweging)
sliderContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 2;
    sliderContainer.scrollLeft = scrollLeft - walk;
});

// Stop het slepen op touch-apparaten
sliderContainer.addEventListener('touchend', () => {
    isDragging = false;
    sliderContainer.style.cursor = 'grab';
});
