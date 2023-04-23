const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
})
// renvoi vers page
function ouvrirPage(){
    window.location.href = "contact.html";
}
// toggle du bouton burger
// creation des constantes
const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const logo = document.querySelector('.logo');
const inst = document.querySelector('.insta');
// interaction lorsque le bouton burger est actionné
burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
  main.classList.toggle('show');
  footer.classList.toggle('show');
  logo.classList.toggle('show');
  inst.classList.toggle('show');
});