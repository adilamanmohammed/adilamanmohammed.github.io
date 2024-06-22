// Get the audio player element
var audio = document.getElementById("audioPlayer");

// Get the preloader element
var loader = document.getElementById("preloader");

// Event listener for window load
window.addEventListener("load", function() {
    loader.style.display = "none"; // Hide the preloader
    document.querySelector('.hey').classList.add('popup'); // Add 'popup' class to the element with class 'hey'
});

// Function to toggle settings menu
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle('settingactivate'); // Toggle 'settingactivate' class on settings container
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow'); // Toggle 'visualmodeshow' class on visual mode toggle button container
    document.getElementById("soundtogglebuttoncontainer").classList.toggle('soundmodeshow'); // Toggle 'soundmodeshow' class on sound toggle button container
}

// Function to play or pause audio based on the sound switch state
function playpause() {
    if (document.getElementById('switchforsound').checked == false) { // Check if the sound switch is off
        audio.pause(); // Pause the audio
    } else {
        audio.play(); // Play the audio
    }
}

// Function to toggle visual mode
function visualmode() {
    document.body.classList.toggle('light-mode'); // Toggle 'light-mode' class on the body
    var elements = document.querySelectorAll('.needtobeinvert'); // Select all elements that need to be inverted
    elements.forEach(function(element) {
        element.classList.toggle('invertapplied'); // Toggle 'invertapplied' class on each element
    });
}

// Get the empty area element and mobile toggle menu element
let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");

// Function to toggle the mobile menu
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling"); // Toggle 'stopscrolling' class on the body
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"); // Toggle 'show-toggle-menu' class on mobile menu
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"); // Toggle animation class on burger bar 1
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"); // Toggle animation class on burger bar 2
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3"); // Toggle animation class on burger bar 3
}

// Function to hide the mobile menu when a list item is clicked
function hidemenubyli() {
    document.body.classList.toggle("stopscrolling"); // Toggle 'stopscrolling' class on the body
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"); // Remove 'show-toggle-menu' class from mobile menu
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1"); // Remove animation class from burger bar 1
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2"); // Remove animation class from burger bar 2
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3"); // Remove animation class from burger bar 3
}

// Get all section and navigation list items
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li');

// Event listener for window scroll
window.addEventListener('scroll', () => {
    let current = ""; // Initialize current section variable
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Get the top position of the section
        const sectionHeight = section.clientHeight; // Get the height of the section
        if (pageYOffset >= (sectionTop - 200)) { // Check if the section is in the viewport
            current = section.getAttribute('id'); // Get the id of the current section
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove('activeThismobiletab'); // Remove 'activeThismobiletab' class from all mobile nav items
        if (li.classList.contains(current)) { // Check if the nav item corresponds to the current section
            li.classList.add('activeThismobiletab'); // Add 'activeThismobiletab' class to the current nav item
        }
    });

    navLi.forEach(li => {
        li.classList.remove('activeThistab'); // Remove 'activeThistab' class from all nav items
        if (li.classList.contains(current)) { // Check if the nav item corresponds to the current section
            li.classList.add('activeThistab'); // Add 'activeThistab' class to the current nav item
        }
    });
});

// Log a custom message to the console
console.log('%c Designed and Developed by Vinod Jangid ', 'background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;');

// Get the back to top button element
let mybutton = document.getElementById("backtotopbutton");

// Event listener for window scroll to show or hide the back to top button
window.onscroll = function() {
    scrollFunction();
};

// Function to show or hide the back to top button based on scroll position
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block"; // Show the button if scrolled more than 400px
    } else {
        mybutton.style.display = "none"; // Hide the button if scrolled less than 400px
    }
}

// Function to scroll to the top of the page
function scrolltoTopfunction() {
    document.body.scrollTop = 0; // Scroll to the top for Safari
    document.documentElement.scrollTop = 0; // Scroll to the top for other browsers
}

// Prevent context menu on images
document.addEventListener("contextmenu", function(e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault(); // Prevent the default context menu
    }
}, false);

// Variables for pupil movement
let Pupils = document.getElementsByClassName('footer-pupil');
let pupilsArr = Array.from(Pupils);
let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

// Function to move pupils based on mouse position
const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;
    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;
    let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
    let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);
    pupilsArr.forEach((curPupil) => {
        curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`; // Move the pupil
    });
};

// Function to update mouse range on window resize
const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

// Event listeners for mouse move and window resize
window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);
