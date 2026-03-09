// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    // 1. STICKY NAVBAR & SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#0a192f'; // Darker blue on scroll
            navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
            navbar.style.padding = '10px 5%';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '20px 5%';
        }
    });

    // 2. SMOOTH SCROLLING FOR NAV LINKS
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. PROGRESS BAR ANIMATION (Portfolio Section)
    const progressSection = document.getElementById('portfolio');
    const progressBars = document.querySelectorAll('.progress');
    
    const showProgress = () => {
        progressBars.forEach(progressBar => {
            const value = progressBar.style.width;
            progressBar.style.width = '0'; // Start at 0
            setTimeout(() => {
                progressBar.style.width = value; // Animate to target width
            }, 100);
        });
    };

    // Intersection Observer for Progress Bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showProgress();
                observer.unobserve(entry.target); // Run only once
            }
        });
    }, { threshold: 0.5 });

    if (progressSection) {
        observer.observe(progressSection);
    }

    // 4. TEAM CARDS HOVER EFFECT (Optional JS Enhancement)
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = '0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // 5. CONTACT FORM SUBMISSION
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value;
            
            // Show success message
            alert(`Shukriya ${name}! Aapka message Arslan Mohsin & Co ko bhej diya gaya hai. Hum jald raabta karein gay.`);
            
            contactForm.reset(); // Reset form
        });
    }
});