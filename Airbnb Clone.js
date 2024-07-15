const leftArrows = document.querySelectorAll('.NavigationTable .NavArrow');
const rightArrows = document.querySelectorAll('.NavigationTable .NavArrowRight');
const NavIconContainers = document.querySelectorAll('.NavigationIcons');

leftArrows.forEach((leftArrow, index) => {
  leftArrow.addEventListener('click', () => {
    const NavIconContainer = NavIconContainers[index];
    const iconWidth = NavIconContainer.children[0].offsetWidth;
    NavIconContainer.scrollLeft -= iconWidth;
    NavIconContainer.scrollTo({
      left: NavIconContainer.scrollLeft,
      behavior: 'smooth'
    });
  });
});

rightArrows.forEach((rightArrow, index) => {
  rightArrow.addEventListener('click', () => {
    const NavIconContainer = NavIconContainers[index];
    const iconWidth = NavIconContainer.children[0].offsetWidth;
    NavIconContainer.scrollLeft += iconWidth;
    NavIconContainer.scrollTo({
      left: NavIconContainer.scrollLeft,
      behavior: 'smooth'
    });
  });
});