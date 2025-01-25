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

function getmessage() {
    const anchor = document.getElementById("linkwa");
    const message = document.getElementById("message").value
    alert(message)
}


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission
    console.log("Clciked")
    // Get input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('gmail').value;
    var message = document.getElementById('Message').value;


    var whatsappMessage = `Hello, I would like to contact you.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
    var whatsappNumber = "7624910281";
    var whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
});



