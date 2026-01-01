/**
 * iCAD Construction Website - Main JavaScript
 * Handles navigation, forms, and general interactions
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navMenu.contains(event.target) || menuToggle.contains(event.target);
            if (!isClickInside && window.innerWidth < 768) {
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking a link (mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && navMenu) {
            navMenu.classList.remove('active');
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.phone || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // In a real implementation, you would send this data to a server
            // For now, we'll create a mailto link or show a success message
            const subject = formData.subject || 'Inquiry from iCAD Website';
            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
            const mailtoLink = `mailto:info@icad-construction.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your inquiry! Your email client should open. If not, please email us at info@icad-construction.com');
            
            // Optionally reset form
            // contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add padding to body to account for sticky contact bar on mobile
    const stickyBar = document.querySelector('.sticky-contact-bar');
    if (stickyBar && window.innerWidth < 768) {
        document.body.style.paddingBottom = '80px';
    }

    window.addEventListener('resize', function() {
        if (stickyBar) {
            if (window.innerWidth < 768) {
                document.body.style.paddingBottom = '80px';
            } else {
                document.body.style.paddingBottom = '';
            }
        }
    });
});

