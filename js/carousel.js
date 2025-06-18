
document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.querySelector('.project_list');
  const prevBtn = document.querySelector('.carousel-nav-btn[data-direction="prev"]');
  const nextBtn = document.querySelector('.carousel-nav-btn[data-direction="next"]');

  if (!projectList || !prevBtn || !nextBtn) {
    console.warn('Carousel elements not found. Skipping carousel JS init.');
    return;
  }

  const scrollCarousel = (direction) => {
    const itemWidth = projectList.querySelector('.project_item_card').offsetWidth;
    const gap = parseFloat(getComputedStyle(projectList).rowGap);
    const scrollAmount = itemWidth + gap;

    if (direction === 'next') {
      projectList.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    } else if (direction === 'prev') {
      projectList.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  nextBtn.addEventListener('click', () => scrollCarousel('next'));
  prevBtn.addEventListener('click', () => scrollCarousel('prev'));

  const updateButtonState = () => {
    if (projectList.scrollLeft < 1) {
      prevBtn.disabled = true
      prevBtn.classList.add("hidden")
    } else {
      prevBtn.disabled = false
      prevBtn.classList.remove("hidden")
    }

    const scrollEndTolerance = 5;

    if ((projectList.scrollWidth - projectList.scrollLeft - projectList.clientWidth) < scrollEndTolerance) {
      nextBtn.classList.add("hidden")
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
      nextBtn.classList.remove("hidden")
    }
  };

  projectList.addEventListener('scroll', updateButtonState);
  updateButtonState();
});
