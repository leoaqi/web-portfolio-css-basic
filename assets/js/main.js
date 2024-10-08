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

// Active link
const section = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollDown = window.scrollY

    
    section.forEach(current => {
        const sectionTop = current.offsetTop - 58
        const sectionHeight = current.offsetHeight
        const sectionId = current.getAttribute('id')
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown < sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.hero__content, .skills__container, .projects__list, .contact__container`)
sr.reveal(`.hero__img, .skills__img`, { delay: 1000, origin:'right' })
sr.reveal(`.skills__list, .skill__data`, { delay: 1000, origin:'left' })
sr.reveal(`.projects__info, .projects__card`, { interval: 500})