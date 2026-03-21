document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const subject = contactForm.subject.value.trim();
        const message = contactForm.message.value.trim();
        const status = document.getElementById('contactStatus');

        if (!name || !email || !subject || !message) {
            status.textContent = 'Please fill in all fields.';
            status.style.color = '#ff7777';
            return;
        }

        // This is a simulated client-side submission.
        // For real delivery, swap this with your API provider endpoint e.g. Formspree or EmailJS.
        setTimeout(() => {
            status.textContent = 'Message sent successfully! I will get back to you soon.';
            status.style.color = '#b4f5b4';
            contactForm.reset();
        }, 400);

    });
});