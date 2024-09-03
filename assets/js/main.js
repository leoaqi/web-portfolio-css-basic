const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Close the menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change background header
const bgHeader = () => {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('bg-header')
    else header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader)
bgHeader()