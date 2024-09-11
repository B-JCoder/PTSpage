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

document.querySelector('.dropbtn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.dropdown-content').classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
