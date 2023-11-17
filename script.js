// Function to create sparkles at random positions
function createSparkles() {
    const numSparkles = 20; // Number of sparkles to create
    const body = document.querySelector("body");
  
    for (let i = 0; i < numSparkles; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      sparkle.style.top = `${Math.random() * 100}vh`; // Random vertical position
      sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration
      body.appendChild(sparkle);
    }
  }
  
  // Trigger sparkle creation when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    createSparkles();
  });
  

// GOVERNANCE JS.

document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to the document
    document.addEventListener("click", function (event) {
        // Check if the click is outside of the pop-up
        if (!event.target.closest('.popup-content') && !event.target.closest('.grid-item')) {
            closePopup();
        }
    });
});

function showDetails(name, position, details, details2) {
    document.getElementById("popup-name").textContent = name;
    document.getElementById("popup-position").textContent = position;
    document.getElementById("popup-details").textContent = details;
    document.getElementById("popup-details2").textContent = details2;

    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("leave"); // Add the leave class for the zoomOutDown animation

    // Wait for the animation to complete before hiding the popup
    setTimeout(() => {
        popup.style.display = "none";
        popup.classList.remove("leave"); // Remove the leave class for the next opening
    }, 500); // Adjust the timeout to match the animation duration
}

// Add this to your existing script.js

// Function to check scroll position and add/remove the 'slideUp' class for events-section
function handleScroll() {
    var investmentsSection = document.getElementById("investmentsSection");
    var eventsSection = document.querySelector(".events-section");
  
    // Calculate the scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    // Calculate the position of the investments section
    var investmentsSectionPosition = investmentsSection.offsetTop;
  
    // Calculate the position of the events section
    var eventsSectionPosition = eventsSection.offsetTop;
  
    // Add the 'slideUp' class to both sections if the scroll position is greater than or equal to their positions, otherwise remove it
    if (scrollPosition >= investmentsSectionPosition) {
      investmentsSection.classList.add("slideUp");
    } else {
      investmentsSection.classList.remove("slideUp");
    }

    if (scrollPosition >= eventsSectionPosition) {
      eventsSection.classList.add("slideUp");
    } else {
      eventsSection.classList.remove("slideUp");
    }
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);

   // Function to start the counter animation
function startCounter(target, element) {
    let count = 0;
    const speed = 150; // Set the animation duration in milliseconds

    const updateCount = () => {
        const increment = target / speed;
        const easingFactor = 1.5; // Adjust the easing factor as needed

        count = count + increment * easingFactor;

        if (count < target) {
            // Check if the target is greater than or equal to 1000
            if (target >= 1000) {
                element.innerText = `${Math.ceil(count / 1000)}K`;
            } else {
                element.innerText = Math.ceil(count);
            }
            requestAnimationFrame(updateCount);
        } else {
            // Update the final text
            element.innerText = target >= 1000 ? `${target / 1000}K` : target;
        }
    };

    updateCount();
}

// Waypoint initialization
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
    const counterSection = document.querySelector('.counter-section');

    new Waypoint({
        element: counterSection,
        handler: function () {
            counterSection.classList.add('visible');
            this.destroy(); // Destroy the waypoint to prevent it from triggering again
        },
        offset: '80%', // Adjust the offset as needed
    });

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const countElement = counter.querySelector('.count');

        new Waypoint({
            element: counter,
            handler: function () {
                startCounter(target, countElement);
                this.destroy(); // Destroy the waypoint to prevent it from triggering again
            },
            offset: '80%', // Adjust the offset as needed
        });
    });
});

