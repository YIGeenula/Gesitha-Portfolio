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

    // Add snow effect
    createSnowflakes();
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

// Add this typing effect code
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if(this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.getElementById('typed-text');
    const words = ['Graphic Designer', 'Photographer'];
    const wait = 3000;
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

// Snow effect
function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowflakeChars = ['❅', '❆', '❄'];
    const numberOfSnowflakes = 50;
    
    // Create snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        snowflakesContainer.appendChild(snowflake);
        
        // Set initial position
        const startPositionLeft = Math.random() * window.innerWidth;
        const startOpacity = 0.5 + Math.random() * 0.5;
        const duration = 5 + Math.random() * 10;
        const delay = Math.random() * 5;
        
        // Animate snowflake
        function animateSnowflake() {
            snowflake.style.left = startPositionLeft + 'px';
            snowflake.style.top = '-20px';
            snowflake.style.opacity = startOpacity;
            
            // Create animation
            snowflake.animate([
                {
                    transform: `translate(0, 0) rotate(0deg)`,
                    opacity: startOpacity
                },
                {
                    transform: `translate(${25 * Math.sin(duration)}px, ${window.innerHeight + 20}px) rotate(360deg)`,
                    opacity: 0
                }
            ], {
                duration: duration * 1000,
                delay: delay * 1000,
                iterations: Infinity,
                easing: 'linear'
            });
        }
        
        // Start animation
        animateSnowflake();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (startPositionLeft > window.innerWidth) {
                snowflake.style.left = Math.random() * window.innerWidth + 'px';
            }
        });
    }
}

// Add this function to control snow visibility
function toggleSnow(show) {
    const snowflakes = document.querySelector('.snowflakes');
    if (snowflakes) {
        snowflakes.style.display = show ? 'block' : 'none';
    }
}

// Add this function to control Santa visibility
function toggleSanta(show) {
    const santa = document.querySelector('.santa-container');
    if (santa) {
        santa.style.display = show ? 'block' : 'none';
    }
}

// Example usage:
// toggleSnow(false); // Hide snow
// toggleSnow(true);  // Show snow
// toggleSanta(false); // Hide Santa
// toggleSanta(true);  // Show Santa
 