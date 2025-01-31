const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebar-close');
const navWrapper = document.getElementById("nav-wrapper");

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle("hidden")
  sidebar.classList.remove('translate-x-full');
  sidebar.classList.add('translate-x-0');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.toggle("hidden")
  sidebar.classList.remove('translate-x-0');
  sidebar.classList.add('translate-x-full');
});

// Close sidebar when resizing back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    sidebar.classList.add('translate-x-full');
  }
});

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 15) {
    navWrapper.classList.add('shadow-md')
  } else {
    navWrapper.classList.remove('shadow-md')

  }
})
