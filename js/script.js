const showcase = document.querySelector('#showcase')
const navbar = document.querySelector('nav')

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navbar.classList.add('nav-scrolled')
        } else {
            navbar.classList.remove('nav-scrolled')
        }
    })
})

scrollObserver.observe(showcase)