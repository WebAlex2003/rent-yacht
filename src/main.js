(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuBtnAndNavigateAbout: document.querySelector(
      '[data-menu-close-and-navigate-about]'
    ),
    closeMenuBtnAndNavigateYachts: document.querySelector(
      '[data-menu-close-and-navigate-yachts]'
    ),
    closeMenuBtnAndNavigateReviews: document.querySelector(
      '[data-menu-close-and-navigate-reviews]'
    ),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtnAndNavigateAbout.addEventListener('click', toggleMenu);
  refs.closeMenuBtnAndNavigateYachts.addEventListener('click', toggleMenu);
  refs.closeMenuBtnAndNavigateReviews.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
