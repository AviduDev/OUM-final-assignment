// Highlighting current nav links

const navEls = document.querySelectorAll(".navLink");
const windowPathname = window.location.pathname;

navEls.forEach((navEl) => {
  const navLinkPathname = new URL(navEl.href).pathname;

  if (windowPathname === navLinkPathname) {
    navEl.classList.add("active");
  }
});

// Function to rotate Arrow when there are more content

const wLink = document.querySelector('.workLink');
const wIcon = document.querySelector(".workIcon");

// wLink.addEventListener("click", function(){ alert("Hello World!"); });

function rotate() {
  wIcon.style.transform = "rotate(90deg)";
};
