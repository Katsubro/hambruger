
// Toggle menu for mobile view
function toggleMenu() {
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');
  
  menu.classList.toggle('show');
  
  // Toggle animation for hamburger icon
  hamburger.classList.toggle('open');
}
