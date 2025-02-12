const hamMenu = document.querySelector("#hamburger");
const nav = document.querySelector("#nav-buttons");
const navCtn = document.querySelector("#nav-ctn");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  nav.classList.toggle("active");
  navCtn.classList.toggle("nav-active");
});