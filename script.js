// Smooth Page Transition System - Only for main content
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle navigation clicks
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && isInternalLink(link.href)) {
            e.preventDefault();
            smoothTransition(link.href);
        }
    });
    
    function isInternalLink(href) {
        return href.startsWith(window.location.origin) || 
               href.startsWith('/') || 
               href.startsWith('./') || 
               href.startsWith('../');
    }
    
    function smoothTransition(url) {
        // Find the main content area (the section below the header)
        const mainContent = document.querySelector('.main-content');
        
        if (mainContent) {
            // Add smooth fade out effect
            mainContent.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(-20px)';
            
            // Wait for fade out, then navigate
            setTimeout(() => {
                window.location.href = url;
            }, 600);
        } else {
            // Fallback: navigate immediately
            window.location.href = url;
        }
    }
    
    // Fade in current page content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        
        // Trigger reflow
        mainContent.offsetHeight;
        
        // Fade in
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
        
        // Clean up after animation
        setTimeout(() => {
            mainContent.style.transition = '';
        }, 600);
    }
    
    // Load page-specific content only if the data is available
    console.log('Loading page-specific content...');
    
    // Only load shows if showsData is available
    if (typeof showsData !== 'undefined') {
        loadShows();
    }
    
    // Only load media if mediaData is available
    if (typeof mediaData !== 'undefined') {
        loadMedia();
    }
    
    // Only load releases if releasesData is available
    if (typeof releasesData !== 'undefined') {
        loadReleases();
    }
    
    // Contact Form Functionality
    // Check if we're on the contact page and if the form was just submitted
    const urlParams = new URLSearchParams(window.location.search);
    const formSent = urlParams.get('sent');
    
    if (formSent === 'true') {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        const contactForm = document.getElementById('contactForm');
        
        if (successMessage && contactForm) {
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Scroll to the success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Clean up the URL (remove the ?sent=true parameter)
            if (window.history && window.history.replaceState) {
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    }
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    console.log('Mobile menu toggle found:', mobileMenuToggle);
    console.log('Nav list found:', navList);
    
    if (mobileMenuToggle && navList) {
        console.log('Mobile menu elements found, setting up event listeners');
        // Function to toggle menu
        function toggleMobileMenu() {
            console.log('Toggle mobile menu called');
            
            const isActive = navList.classList.contains('active');
            
            if (isActive) {
                console.log('Closing menu');
                navList.classList.remove('active');
                // Remove mobile menu overlay
                const mobileMenu = document.getElementById('mobile-menu-overlay');
                if (mobileMenu) mobileMenu.remove();
            } else {
                console.log('Opening menu');
                navList.classList.add('active');
                // Don't lock body scroll - let the menu be scrollable
                
                // Remove test element - no longer needed
                
                // Create a completely new mobile menu overlay
                const mobileMenu = document.createElement('div');
                mobileMenu.id = 'mobile-menu-overlay';
                mobileMenu.style.cssText = `
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100vw !important;
                    height: 100vh !important;
                    background: white !important;
                    z-index: 9999 !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: center !important;
                    align-items: center !important;
                    gap: 2rem !important;
                    padding: 2rem !important;
                    box-sizing: border-box !important;
                    border: 5px solid red !important;
                    overflow-y: auto !important;
                `;
                
                // Add menu items (excluding projects - will add separately)
                const menuItems = [
                    { name: 'home', url: 'index.html' },
                    { name: 'about', url: 'about.html' },
                    { name: 'shows', url: 'shows.html' },
                    { name: 'projects', url: 'projects.html', isDropdown: true },
                    { name: 'releases', url: 'releases.html' },
                    { name: 'media', url: 'media.html' },
                    { name: 'contact', url: 'contact.html' }
                ];
                
                menuItems.forEach(item => {
                    if (item.isDropdown) {
                        // Handle projects dropdown
                        const projectsContainer = document.createElement('div');
                        projectsContainer.style.cssText = `
                            display: flex !important;
                            flex-direction: column !important;
                            align-items: center !important;
                            gap: 0.5rem !important;
                        `;
                        
                        const projectsLink = document.createElement('div');
                        projectsLink.textContent = 'projects';
                        projectsLink.style.cssText = `
                            font-size: 1.5rem !important;
                            color: #333 !important;
                            padding: 1rem 2rem !important;
                            background: yellow !important;
                            border: 2px solid #333 !important;
                            text-align: center !important;
                            display: block !important;
                            width: 200px !important;
                            cursor: pointer !important;
                        `;
                        
                        const dropdown = document.createElement('div');
                        dropdown.id = 'projects-dropdown';
                        dropdown.style.cssText = `
                            display: none !important;
                            flex-direction: column !important;
                            gap: 0.5rem !important;
                        `;
                        
                        const imaLink = document.createElement('a');
                        imaLink.href = 'ima.html';
                        imaLink.textContent = 'IMA';
                        imaLink.style.cssText = `
                            font-size: 1.2rem !important;
                            color: #333 !important;
                            text-decoration: none !important;
                            padding: 0.5rem 1rem !important;
                            background: lightblue !important;
                            border: 1px solid #333 !important;
                            text-align: center !important;
                            display: block !important;
                            width: 150px !important;
                            cursor: pointer !important;
                        `;
                        
                        const nomonLink = document.createElement('a');
                        nomonLink.href = 'nomon.html';
                        nomonLink.textContent = 'NOMON';
                        nomonLink.style.cssText = `
                            font-size: 1.2rem !important;
                            color: #333 !important;
                            text-decoration: none !important;
                            padding: 0.5rem 1rem !important;
                            background: lightblue !important;
                            border: 1px solid #333 !important;
                            text-align: center !important;
                            display: block !important;
                            width: 150px !important;
                            cursor: pointer !important;
                        `;
                        
                        dropdown.appendChild(imaLink);
                        dropdown.appendChild(nomonLink);
                        projectsContainer.appendChild(projectsLink);
                        projectsContainer.appendChild(dropdown);
                        mobileMenu.appendChild(projectsContainer);
                        
                        // Toggle dropdown on click
                        projectsLink.addEventListener('click', () => {
                            const isVisible = dropdown.style.display === 'flex';
                            dropdown.style.display = isVisible ? 'none' : 'flex';
                        });
                        
                        // Add click handlers for dropdown items
                        [imaLink, nomonLink].forEach(link => {
                            link.addEventListener('click', (e) => {
                                e.preventDefault();
                                mobileMenu.remove();
                                window.location.href = link.href;
                            });
                        });
                    } else {
                        // Regular menu item
                        const link = document.createElement('a');
                        link.href = item.url;
                        link.textContent = item.name;
                        link.style.cssText = `
                            font-size: 1.5rem !important;
                            color: #333 !important;
                            text-decoration: none !important;
                            padding: 1rem 2rem !important;
                            background: yellow !important;
                            border: 2px solid #333 !important;
                            text-align: center !important;
                            display: block !important;
                            width: 200px !important;
                            cursor: pointer !important;
                        `;
                        link.addEventListener('click', (e) => {
                            e.preventDefault();
                            mobileMenu.remove();
                            // Navigate to the page
                            window.location.href = item.url;
                        });
                        mobileMenu.appendChild(link);
                    }
                });

                
                document.body.appendChild(mobileMenu);
            }
            
            // Animate hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
        
        // Add both click and touchstart events for better mobile support
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu clicked');
            toggleMobileMenu();
        });
        
        mobileMenuToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu touched');
            toggleMobileMenu();
        });
        
        // Function to close mobile menu
        function closeMobileMenu() {
            navList.classList.remove('active');
            // Reset hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            // Restore body scroll
            document.body.style.overflow = '';
        }
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
            
            // Also add touch events for mobile
            link.addEventListener('touchstart', () => {
                closeMobileMenu();
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navList.contains(event.target)) {
                closeMobileMenu();
            }
        });
        
        // Also handle touch events for outside clicks
        document.addEventListener('touchstart', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navList.contains(event.target)) {
                closeMobileMenu();
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
                closeMobileMenu();
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
        // Close mobile menu on resize
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileMenuToggle) {
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        navList.classList.remove('active');
        document.body.style.overflow = '';
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

// Contact Form Handling - Web3Forms handles submission, we just handle success message
document.addEventListener('DOMContentLoaded', function() {
    // Load and render shows if we're on the shows page and data is available
    if (typeof showsData !== 'undefined') {
        loadShows();
    }
    
    // Load and render media if we're on the media page and data is available
    if (typeof mediaData !== 'undefined') {
        loadMedia();
    }
});

// Function to load and render shows
function loadShows() {
    const upcomingShowsContainer = document.getElementById('upcoming-shows');
    const upcomingShows2026Container = document.getElementById('upcoming-shows-2026');
    
    if (!upcomingShowsContainer) {
        return; // Not on shows page
    }
    
    // Check if showsData is available (loaded from shows.js)
    if (typeof showsData === 'undefined') {
        console.error('Shows data not loaded. Make sure shows.js is included.');
        return;
    }
    
    // Render upcoming shows (2025)
    if (showsData.upcoming && showsData.upcoming.length > 0) {
        upcomingShowsContainer.innerHTML = showsData.upcoming.map(show => createShowHTML(show)).join('');
    } else {
        upcomingShowsContainer.innerHTML = '<p class="no-shows">No upcoming shows scheduled</p>';
    }
    
    // Render upcoming shows (2026)
    if (upcomingShows2026Container && showsData.upcoming2026 && showsData.upcoming2026.length > 0) {
        upcomingShows2026Container.innerHTML = showsData.upcoming2026.map(show => createShowHTML(show)).join('');
    } else if (upcomingShows2026Container) {
        upcomingShows2026Container.innerHTML = '<p class="no-shows">No 2026 shows scheduled yet</p>';
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
        console.log('Media container not found - not on media page');
        return; // Not on media page
    }
    
    console.log('Media container found, loading media...');
    
    // Check if mediaData is available (loaded from media.js)
    if (typeof mediaData === 'undefined') {
        console.error('Media data not loaded. Make sure media.js is included.');
        mediaVideosContainer.innerHTML = '<p class="no-media">Error: Media data not loaded</p>';
        return;
    }
    
    console.log('Media data found:', mediaData);
    
    // Render videos
    if (mediaData.videos && mediaData.videos.length > 0) {
        console.log('Rendering', mediaData.videos.length, 'videos');
        mediaVideosContainer.innerHTML = mediaData.videos.map(video => createVideoHTML(video)).join('');
    } else {
        console.log('No videos found in data');
        mediaVideosContainer.innerHTML = '<p class="no-media">No videos available</p>';
    }
}

// Function to create HTML for a single video
function createVideoHTML(video) {
    let html = `
        <div class="media-video-item">
            <div class="media-video-left">
                <!-- Video embed or placeholder -->
                ${getVideoEmbed(video)}
            </div>
            <div class="media-video-right">
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
    
    html += `</div></div>`;
    
    return html;
}

// Function to generate video embed code from URL
function getVideoEmbed(video) {
    // If custom embed code is provided, use it
    if (video.videoEmbed && video.videoEmbed !== '<!-- Add your YouTube or Vimeo embed code here -->') {
        return `<div class="media-video-embed">${video.videoEmbed}</div>`;
    }
    
    // If video URL is provided, generate embed code
    if (video.videoUrl) {
        if (video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be')) {
            // Extract YouTube video ID
            let videoId = '';
            if (video.videoUrl.includes('youtube.com/watch?v=')) {
                videoId = video.videoUrl.split('v=')[1].split('&')[0];
            } else if (video.videoUrl.includes('youtu.be/')) {
                videoId = video.videoUrl.split('youtu.be/')[1].split('?')[0];
            }
            
            if (videoId) {
                return `<div class="media-video-embed"><iframe width="100%" height="225" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
            }
        } else if (video.videoUrl.includes('vimeo.com')) {
            // Extract Vimeo video ID (handle URLs with query parameters)
            const videoId = video.videoUrl.split('vimeo.com/')[1].split(/[?#]/)[0];
            
            if (videoId) {
                return `<div class="media-video-embed"><iframe src="https://player.vimeo.com/video/${videoId}" width="100%" height="225" frameborder="0" allowfullscreen></iframe></div>`;
            }
        }
    }
    
    // Fallback placeholder
    return `<div class="media-video-placeholder">Video URL needed - add YouTube or Vimeo URL in videoUrl field</div>`;
}

// Function to create HTML for a single release
function createReleaseHTML(release) {
    let html = `
        <div class="release-item">
            <div class="release-left">
                <div class="release-image">
                    <img src="${release.image}" alt="${release.title}" class="release-img">
                </div>
            </div>
            <div class="release-right">
                <div class="release-title">${release.title}</div>
                <div class="release-description">${release.description}</div>`;
    
    if (release.details) {
        // Convert \n to <br> for line breaks
        const detailsWithBreaks = release.details.replace(/\n/g, '<br>');
        html += `<div class="release-details">${detailsWithBreaks}</div>`;
    }
    
    if (release.date) {
        html += `<div class="release-date">${release.date}</div>`;
    }
    
    // Add Listen + Buy now button if URL exists
    if (release.listenBuyUrl) {
        html += `<div class="release-actions">
            <a href="${release.listenBuyUrl}" target="_blank" rel="noopener noreferrer" class="listen-buy-btn">Listen + Buy now</a>
        </div>`;
    } else {
        html += `<div class="release-actions">
            <span class="sold-out">SOLD OUT</span>
        </div>`;
    }
    
    html += `</div></div>`;
    
    return html;
}

// Function to load and render releases
function loadReleases() {
    console.log('loadReleases function called');
    const releasesContainer = document.getElementById('releases-list');
    
    if (!releasesContainer) {
        console.log('Releases container not found - not on releases page');
        return; // Not on releases page
    }
    
    console.log('Releases container found, loading releases...');
    
    // Check if releasesData is available (loaded from releases.js)
    if (typeof releasesData === 'undefined') {
        console.error('Releases data not loaded. Make sure releases.js is included.');
        releasesContainer.innerHTML = '<p class="no-releases">Error: Releases data not loaded</p>';
        return;
    }
    
    console.log('Releases data found:', releasesData);
    
    // Render releases
    if (releasesData.releases && releasesData.releases.length > 0) {
        console.log('Rendering', releasesData.releases.length, 'releases');
        releasesContainer.innerHTML = releasesData.releases.map(release => createReleaseHTML(release)).join('');
    } else {
        console.log('No releases found in data');
        releasesContainer.innerHTML = '<p class="no-releases">No releases available</p>';
    }
}


