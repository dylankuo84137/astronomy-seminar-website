// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // 防止事件冒泡
            
            // Remove active class from all nav links and sections
            navLinks.forEach(nl => nl.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked nav link
            this.classList.add('active');
            
            // Show corresponding section
            const targetSection = this.getAttribute('data-section');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // CommentBox.io is initialized separately in the window.addEventListener('load') section

    // Smooth scrolling for internal links (excluding navigation)
    document.querySelectorAll('a[href^="#"]:not(.nav-link)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Skip if href is just "#" or empty
            if (href === '#' || href === '' || href.length <= 1) {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Initialize CommentBox.io after DOM is loaded
window.addEventListener('load', function() {
    if (typeof commentBox === 'function') {
        commentBox('5713580993282048-proj');
    }
});

// Add some interactive elements for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.highlight-card, .resource-category');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Simulate download functionality
    const downloadLinks = document.querySelectorAll('.download-link');
    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // If it's a real external link (Google Drive/Docs), let it open normally
            if (href && href !== '#' && (href.startsWith('https://docs.google.com') || href.startsWith('https://drive.google.com'))) {
                return; // Let the browser handle the link
            }
            // For placeholder links only
            if (href === '#' || !href) {
                e.preventDefault();
                const fileName = this.textContent;
                alert(`正在下載：${fileName}\n\n(實際部署時此功能將連接到真實的檔案系統)`);
            }
        });
    });
});