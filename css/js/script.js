/* ======================== SHOW MENU & MOBILE NAV ======================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Validate if constants exist */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Remove menu on mobile link click */
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));


/* ======================== LIGHT / DARK THEME TOGGLE ======================== */
const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Check previously saved theme preference in browser storage
const selectedTheme = localStorage.getItem('selected-theme');
const getCurrentTheme = () => htmlElement.getAttribute('data-theme');

if (selectedTheme) {
    htmlElement.setAttribute('data-theme', selectedTheme);
    updateThemeIcon(selectedTheme);
}

themeButton.addEventListener('click', () => {
    let currentTheme = getCurrentTheme();
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('selected-theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}


/* ======================== SCROLL SECTIONS ACTIVE LINK ======================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id');

        const correspondingNavLink = document.querySelector('.nav__list a[href*=' + sectionId + ']');
        if (correspondingNavLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                correspondingNavLink.classList.add('active-link');
            } else {
                correspondingNavLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);


/* ======================== SHOW BACK TO TOP BUTTON ======================== */
function scrollUp() {
    const scrollUpButton = document.getElementById('scroll-up');
    if (this.scrollY >= 350) {
        scrollUpButton.classList.add('show-scroll');
    } else {
        scrollUpButton.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);
