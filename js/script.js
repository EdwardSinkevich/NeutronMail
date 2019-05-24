function navSlide() {
    const burger = document.querySelector('.burger-btn');
    const nav = document.querySelector('.navigation-links');
    const navLinks = document.querySelectorAll('.navigation-links li')
    
    burger.addEventListener('click', () => {
    //toggle Nav
        nav.classList.toggle('nav-active');

    //Animate Links
        navLinks.forEach ((link, indx) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${indx / 20 + 0.2}s`;
            }
        });

    //Burger Animation
    burger.classList.toggle('toggle')
    });

}
navSlide();
