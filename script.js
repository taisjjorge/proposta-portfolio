
function displayABout() {
    var arrow = document.getElementById('animation');
    arrow.classList.toggle('rotate');
    var display = document.getElementById('about');
    display.classList.toggle('active');
    const footer = document.getElementById('footer-container')
    footer.classList.toggle('footer-none')
}


