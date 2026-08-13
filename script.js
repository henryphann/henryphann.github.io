const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the menu open and closed when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu automatically when a link is clicked
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
});