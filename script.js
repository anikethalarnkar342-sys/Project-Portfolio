window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 50px';
        navbar.style.background = '#ffffff';
        navbar.style.borderBottom = '1px solid #eee';
    } else {
        navbar.style.padding = '20px 50px';
        navbar.style.borderBottom = 'none';
    }
});

// Simple Log for testing
console.log("Aniket Halarnkar Portfolio Template Loaded Successfully");
