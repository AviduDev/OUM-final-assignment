// ---------------Highligh the current nav link-------------------

// document.querySelectorAll('.navLink').forEach
// (link => {
//   if(link.href === window.location.href){
//     link.setAttribute('aria-current', 'page')
//   }
// })


// const activePage = window.location.pathname;

// const navLinks = document.querySelectorAll('nav a').forEach(
//   link => {
//     if(link.href.includes(`${activePage}`)){
//       link.classList.add('active');
//     }
//   }
// )


const navEls = document.querySelectorAll('.navLink');
const windowPathname = window.location.pathname;

navEls.forEach(navEl => {
  const navLinkPathname = new URL(navEl.href).pathname;

  if (windowPathname === navLinkPathname) {
    navEl.classList.add('active');
  }
});