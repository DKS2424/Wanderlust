let text = document.getElementById('heading');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.7 + 'px';

    let threshold = 150; // Change this value to adjust when the text should start disappearing

    if (value > threshold) {
        text.style.opacity = Math.max(1 - (value - threshold) / 100, 0); // Adjust 100 to control the fade-out speed
    } else {
        text.style.opacity = 1;
    }
});




