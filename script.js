function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');


function handleResize() {
    const isDesktop = window.innerWidth > 600;

    if (isDesktop) {
        navLinks.style.display = 'flex';
        navLinks.classList.remove('active');
    } else {
        if (!navLinks.classList.contains('active')) {
            navLinks.style.display = 'none';
        }
    }
}

handleResize();
window.addEventListener('resize', handleResize);

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});


function setActiveLink() {
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    const currentPath = window.location.pathname.split('/').pop(); 
    const currentHash = window.location.hash; 

    navLinks.forEach(link => {
        link.classList.remove('active'); 
    });

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('#')[0]; 
        
        if (linkHref === currentPath || (currentHash && link.getAttribute('href') === currentHash)) {
            link.classList.add('active'); 
        }
    });
}


const navLinksList = document.querySelectorAll('.nav-links .nav-link');
navLinksList.forEach(link => {
    link.addEventListener('click', function () {
        navLinksList.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('load', setActiveLink);

window.addEventListener('hashchange', setActiveLink);
