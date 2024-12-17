// Navigation functionality can be added here
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Toggle menu icon
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });

    // Theme toggling functionality
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle.querySelector('i');
    const mobileIcon = mobileThemeToggle.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateIcons(savedTheme === 'light');
    }

    // Desktop theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    // Mobile theme toggle
    mobileThemeToggle.addEventListener('click', toggleTheme);

    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme === 'light');
    }

    function updateIcons(isLight) {
        // Update both desktop and mobile icons
        [icon, mobileIcon].forEach(i => {
            i.classList.remove('fa-sun', 'fa-moon');
            i.classList.add(isLight ? 'fa-moon' : 'fa-sun');
        });
    }

    // Add click handler for Home nav link
    const homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToHome();
    });

    // Add click handler for About nav link
    const aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToAbout();
    });

    // Add services scroll function
    function scrollToServices() {
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        if (window.innerWidth < 1024) {
            const navMenu = document.getElementById('nav-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }

    // Add this inside your DOMContentLoaded event listener
    const servicesLink = document.querySelector('a[href="#services"]');
    servicesLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToServices();
    });

    // Add portfolio scroll function
    function scrollToPortfolio() {
        const portfolioSection = document.getElementById('portfolio');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        if (window.innerWidth < 1024) {
            const navMenu = document.getElementById('nav-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }

    // Add this inside your DOMContentLoaded event listener
    const portfolioLink = document.querySelector('a[href="#portfolio"]');
    portfolioLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToPortfolio();
    });

    // Add contact scroll function
    function scrollToContact() {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        if (window.innerWidth < 1024) {
            const navMenu = document.getElementById('nav-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }

    // Add this inside your DOMContentLoaded event listener
    const contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToContact();
    });

    const form = document.querySelector('form');
    const result = document.getElementById('result');
    const successDiv = result.querySelector('.success');
    const errorDiv = result.querySelector('.error');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        try {
            const formData = new FormData(form);
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Show success message
                successDiv.textContent = "Thanks! Message sent successfully.";
                errorDiv.textContent = "";
                result.classList.remove('hidden');
                form.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    result.classList.add('hidden');
                }, 5000);
            } else {
                // Show error message
                errorDiv.textContent = "Oops! Something went wrong. Please try again.";
                successDiv.textContent = "";
                result.classList.remove('hidden');
            }
        } catch (error) {
            // Show error message
            errorDiv.textContent = "Oops! Something went wrong. Please try again.";
            successDiv.textContent = "";
            result.classList.remove('hidden');
        }
    });
});

function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu if open
    if (window.innerWidth < 1024) {
        const navMenu = document.getElementById('nav-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
}

// Add this function for home scrolling
function scrollToHome() {
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu if open
    if (window.innerWidth < 1024) {
        const navMenu = document.getElementById('nav-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
} 