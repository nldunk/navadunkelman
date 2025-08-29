// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = this.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                // Reset hamburger menu
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navList.contains(event.target)) {
                navList.classList.remove('active');
                // Reset hamburger menu
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Header scroll effect - removed since header is no longer fixed
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Add loading animation to hero image
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        heroImg.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    }
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu on Escape key
            if (navList && navList.classList.contains('active')) {
                navList.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
    
    // Add focus-visible polyfill for better keyboard navigation
    if (!CSS.supports('selector(:focus-visible)')) {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    const navList = document.querySelector('.nav-list');
    if (navList && navList.classList.contains('active')) {
        navList.classList.remove('active');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileMenuToggle) {
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
}, 250));

// Add CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation a:focus,
    .keyboard-navigation button:focus {
        outline: 2px solid #333;
        outline-offset: 2px;
    }
    
    .keyboard-navigation .nav-link:focus::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Performance optimization: Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'https://static.wixstatic.com/media/c48e10_843dd65073964673a55a8398f1563e00~mv2.jpg/v1/fill/w_661,h_441,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_H6K1757.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalResources);
} else {
    preloadCriticalResources();
}

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate sending (for demo purposes)
            setTimeout(() => {
                showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
    
    function showMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
    
    // Load and render shows if we're on the shows page
    loadShows();
    
    // Load and render media if we're on the media page
    loadMedia();
});

// Function to load and render shows
function loadShows() {
    const upcomingShowsContainer = document.getElementById('upcoming-shows');
    
    if (!upcomingShowsContainer) {
        return; // Not on shows page
    }
    
    // Check if showsData is available (loaded from shows.js)
    if (typeof showsData === 'undefined') {
        console.error('Shows data not loaded. Make sure shows.js is included.');
        return;
    }
    
    // Render upcoming shows
    if (showsData.upcoming && showsData.upcoming.length > 0) {
        upcomingShowsContainer.innerHTML = showsData.upcoming.map(show => createShowHTML(show)).join('');
    } else {
        upcomingShowsContainer.innerHTML = '<p class="no-shows">No upcoming shows scheduled</p>';
    }
}

// Function to create HTML for a single show
function createShowHTML(show) {
    let html = `
        <div class="show-entry">
            <div class="show-date-time">${show.date}, ${show.time}</div>
            <div class="show-title">${show.title}</div>
            <div class="show-location">${show.location}`;
    
    if (show.moreInfo) {
        html += `<a href="${show.moreInfo}" target="_blank" class="more-info-link">more info</a>`;
    }
    
    html += `</div></div>`;
    
    return html;
}

// Function to load and render media
function loadMedia() {
    const mediaVideosContainer = document.getElementById('media-videos');
    
    if (!mediaVideosContainer) {
        return; // Not on media page
    }
    
    // Check if mediaData is available (loaded from media.js)
    if (typeof mediaData === 'undefined') {
        console.error('Media data not loaded. Make sure media.js is included.');
        return;
    }
    
    // Render videos
    if (mediaData.videos && mediaData.videos.length > 0) {
        mediaVideosContainer.innerHTML = mediaData.videos.map(video => createVideoHTML(video)).join('');
    } else {
        mediaVideosContainer.innerHTML = '<p class="no-media">No videos available</p>';
    }
}

// Function to create HTML for a single video
function createVideoHTML(video) {
    let html = `
        <div class="media-video-item">
            <div class="media-video-title">${video.title}</div>
            <div class="media-video-description">${video.description}</div>`;
    
    if (video.details) {
        html += `<div class="media-video-details">${video.details}</div>`;
    }
    
    if (video.performers && video.performers.length > 0) {
        html += `<div class="media-video-performers">${video.performers.join('<br>')}</div>`;
    }
    
    if (video.date) {
        html += `<div class="media-video-date">${video.date}</div>`;
    }
    
    // Add video embed or placeholder
    if (video.videoEmbed && video.videoEmbed !== '<!-- Add your YouTube or Vimeo embed code here -->') {
        html += `<div class="media-video-embed">${video.videoEmbed}</div>`;
    } else {
        html += `<div class="media-video-placeholder">Video embed code needed - add YouTube or Vimeo embed in media.js</div>`;
    }
    
    html += `</div>`;
    
    return html;
}
