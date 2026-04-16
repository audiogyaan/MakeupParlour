// Simple scroll animation for 3D objects
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    
    // Hero title movement
    const heroTitle = document.querySelector('.hero-content h1');
    heroTitle.style.transform = `translateY(${scrollValue * 0.2}px)`;

    // Floating objects effect
    const objects = document.querySelectorAll('.object');
    objects.forEach(obj => {
        obj.style.transform = `translateY(${scrollValue * -0.1}px) rotate(${scrollValue * 0.05}deg)`;
    });
});

// Click effect on buttons
document.querySelector('.call-btn').addEventListener('click', () => {
    alert("Calling SHRADDHA MAKEOVER ...");
});