// Initialize Lucide Icons
lucide.createIcons();

// Copy to clipboard function - UPDATED
function copyToClipboard(elementId) {
    const textToCopy = document.getElementById(elementId).innerText;
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Show toast notification
    const toast = document.getElementById('toast');
    toast.style.opacity = 1;
    setTimeout(() => {
        toast.style.opacity = 0;
    }, 2000); // Hide after 2 seconds
}

// Fade in on scroll animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Sticky navbar logic
const navbar = document.getElementById('navbar');
const heroSection = document.getElementById('home');
const navbarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.remove('hidden');
            navbar.classList.add('fixed', 'w-full');
        } else {
            navbar.classList.add('hidden');
            navbar.classList.remove('fixed', 'w-full');
        }
    });
}, { threshold: 0.1, rootMargin: "-20% 0px 0px 0px" });
navbarObserver.observe(heroSection);