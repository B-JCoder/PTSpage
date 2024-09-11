
//Javascript for Navigation effect on scroll
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Javascript for responsive navigation sidebar Nav
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});

//Javascript for smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});






  // ____________________________-About---------------------

// JavaScript to trigger animations when the section is scrolled into view
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  const scrollHandler = () => {
      elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
              element.classList.add('fade-in');
          }
      });
  };
  window.addEventListener('scroll', scrollHandler);
  scrollHandler(); // Trigger on page load

  // Add animation to logo
  const logo = document.querySelector('.logo-image');
  logo.addEventListener('mouseover', () => {
      logo.style.animation = 'rotate 2s infinite';
  });
  logo.addEventListener('mouseout', () => {
      logo.style.animation = 'none';
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const refreshButton = document.getElementById('refreshButton');
  const sendButton = document.getElementById('sendButton');

  // Refresh button functionality
  refreshButton.addEventListener('click', () => {
    form.reset(); // Resets the form fields
  });

  // Send button functionality
  sendButton.addEventListener('click', () => {
    alert('Your form has been submitted');
  });
});


















// Function to animate numbers starting from 0 to the target number
function animateNumber(element, targetNumber, duration) {
  let start = 0;  // Starting number
  const incrementTime = Math.ceil(duration / targetNumber); // Time per increment

  const updateNumber = () => {
    start += 1;
    element.textContent = start + "+"; // Update the text content with a "+" symbol

    if (start < targetNumber) {
      setTimeout(updateNumber, incrementTime); // Continue the animation until target is reached
    }
  };

  updateNumber(); // Start the animation
}

// Function to initialize the number animations for all stat boxes
function initStatsAnimation() {
  const stats = document.querySelectorAll('.stat-number');

  stats.forEach(stat => {
    const targetNumber = parseInt(stat.getAttribute('data-target')); // Get the target number from data-target
    animateNumber(stat, targetNumber, 2000); // Animate over 2 seconds (2000ms)
  });
}

// Function to animate logos
function animateLogos() {
  const logos = document.querySelectorAll('.logo-img');
  logos.forEach((logo, index) => {
    setTimeout(() => {
      logo.classList.add('show-logo'); // Add class for CSS animation
    }, index * 200); // Delay each logo appearance
  });
}

// Create an IntersectionObserver to observe the section
function createObserver() {
  const section = document.querySelector('.why-choose-us');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initStatsAnimation(); // Start number animation when section is visible
        animateLogos(); // Start logo animation when section is visible
        observer.unobserve(section); // Stop observing after the animation starts
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

  observer.observe(section); // Start observing the section
}

// Wait until the DOM is fully loaded to set up the observer
document.addEventListener('DOMContentLoaded', () => {
  createObserver();
});


// Initialize Lucide icons
lucide.createIcons();

// Handle form submission
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing with: ' + email);
    this.reset();
});