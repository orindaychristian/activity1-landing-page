const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('opened');
});

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
        menu.classList.remove('opened');
    }
});