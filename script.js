
const services = document.querySelector('#services')

function toggleGreen() {
    services.classList.toggle("green")
}
services.addEventListener('click', toggleGreen)

const menuIcon = document.querySelector('.hamburger-menu')
const navbar = document.querySelector(".navbar")

function toggleNavbar() {
    navbar.classList.toggle("change")
}
menuIcon.addEventListener('click', toggleNavbar)