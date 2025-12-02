// Single-line comment: Section 1 - Set current year in footer dynamically

// Declare a constant variable named 'yearSpan' and assign it the result of getting element by ID
// document.getElementById() searches the HTML document for an element with id="current-year"
const yearSpan = document.getElementById('current-year');

// If statement checking if yearSpan exists (is not null or undefined)
if (yearSpan) {
    // Set the text content of the yearSpan element to the current year
    // new Date() creates a new Date object representing the current date and time
    // .getFullYear() is a method that extracts and returns the 4-digit year (e.g., 2024)
    // .textContent is a property that sets or returns the text content of an element
    yearSpan.textContent = new Date().getFullYear();
}

// Single-line comment: Section 2 - Mobile Menu Toggle Logic

// Function declaration named 'toggleMenu' with no parameters
function toggleMenu() {
    // Declare a constant variable 'menu' and get the element with id 'mobile-menu'
    const menu = document.getElementById('mobile-menu');
    
    // Call the toggle method on the classList property
    // classList is a property that returns a live collection of the element's classes
    // .toggle('hidden') adds the 'hidden' class if it's not present, removes it if it is
    menu.classList.toggle('hidden');
}

// Single-line comment: Attach click event to the hamburger button

// Declare a constant variable 'menuBtn' and get the element with id 'menu-button'
const menuBtn = document.getElementById('menu-button');

// If statement checking if menuBtn exists
if (menuBtn) {
    // Add an event listener to menuBtn
    // addEventListener() is a method that attaches an event handler to an element
    // 'click' is the event type (triggers when the element is clicked)
    // toggleMenu is the callback function to execute when the event occurs
    menuBtn.addEventListener('click', toggleMenu);
}

// Single-line comment: Close mobile menu when a link is clicked

// Select all anchor tags inside the element with id 'mobile-menu'
// document.querySelectorAll() returns a NodeList of all matching elements
// '#mobile-menu a' is a CSS selector (# for ID, space for descendant, a for anchor tags)
// .forEach() is an array method that executes a function for each element
document.querySelectorAll('#mobile-menu a').forEach(link => {
    // Arrow function with 'link' as the parameter representing each anchor element
    
    // Add a click event listener to each link
    // 'click' is the event type
    // Arrow function () => {} is the event handler (anonymous function)
    link.addEventListener('click', () => {
        // Get the mobile menu element
        const menu = document.getElementById('mobile-menu');
        
        // Add the 'hidden' class to hide the menu
        // .add() is a method that adds a class to the classList
        menu.classList.add('hidden');
    });
});

// Single-line comment: Section 3 - INTERACTIVITY & MOTION LOGIC (ScrollReveal)
// Single-line comment: This waits for the library to load before running

// window.onload is an event that fires when the entire page has finished loading
// Assign an anonymous function to execute when the page loads
window.onload = function() {
    
    // If statement checking if ScrollReveal is defined (library loaded successfully)
    // typeof operator returns a string indicating the type of the variable
    // !== means 'not strictly equal to'
    // 'undefined' is a primitive value representing an uninitialized variable
    if (typeof ScrollReveal !== 'undefined') {
        
        // Declare a constant variable 'sr' and call ScrollReveal with configuration object
        // ScrollReveal() is a function that returns a new ScrollReveal instance
        const sr = ScrollReveal({
            // duration property: animation duration in milliseconds (1000ms = 1 second)
            duration: 1000,
            
            // delay property: time to wait before starting animation in milliseconds
            delay: 200,
            
            // distance property: how far elements move during animation (as a string with units)
            distance: '20px',
            
            // easing property: timing function for animation (string value)
            easing: 'ease-in-out',
            
            // origin property: direction from which elements appear (string value)
            origin: 'bottom',
            
            // mobile property: boolean enabling/disabling animations on mobile devices
            mobile: true,
            
            // reset property: boolean - false means animations play once and don't repeat on scroll up
            reset: false // Keep animations persistent (don't re-run when scrolling up)
        });

        // Single-line comment: Reveal Header and About Section Content (fast drop)
        
        // Call the reveal method on the sr object
        // .reveal() is a method that applies ScrollReveal animations to selected elements
        // '#about' is a CSS selector targeting the element with id 'about'
        // Second parameter is a configuration object overriding default settings
        sr.reveal('#about', {
            // Override duration to 800ms for faster animation
            duration: 800,
            
            // Override origin to 'top' so element appears from above
            origin: 'top',
            
            // Override distance to 30px for larger movement
            distance: '30px',
            
            // Override delay to 100ms for quicker start
            delay: 100
        });

        // Single-line comment: Reveal Section Headers
        
        // Reveal elements with class 'sr-element'
        // '.sr-element' is a CSS class selector (period indicates class)
        sr.reveal('.sr-element', {
            // interval property: stagger delay between multiple elements in milliseconds
            interval: 50,
            
            // Animation duration
            duration: 800,
            
            // Direction of animation
            origin: 'top',
            
            // Movement distance
            distance: '15px'
        });

        // Single-line comment: Reveal Skill Cards (staggered fade up)
        
        // Reveal all elements with class 'sr-card'
        sr.reveal('.sr-card', {
            // Stagger effect: each subsequent element delays by 100ms more
            interval: 100, // Stagger effect
            
            // Animation duration for each card
            duration: 900
        });

        // Single-line comment: Reveal Project Cards (left/right slide)
        
        // Select all elements with class 'sr-project' and iterate over them
        // querySelectorAll returns a NodeList (array-like object)
        // .forEach() executes a function for each element
        document.querySelectorAll('.sr-project').forEach((el, index) => {
            // Arrow function with two parameters:
            // 'el' - the current element in the iteration
            // 'index' - the current index number (0, 1, 2, etc.)
            
            // Declare a constant 'origin' using ternary operator for conditional assignment
            // index % 2 calculates the remainder when dividing index by 2
            // === 0 checks if remainder equals zero (true for even numbers)
            // ? is the ternary operator (condition ? valueIfTrue : valueIfFalse)
            // Even-indexed cards come from left, odd-indexed from right
            const origin = index % 2 === 0 ? 'left' : 'right';
            
            // Reveal the current element with custom configuration
            sr.reveal(el, {
                // Use the calculated origin direction
                origin: origin,
                
                // Larger movement distance for more dramatic effect
                distance: '50px',
                
                // Longer animation duration
                duration: 1000
            });
        });

        // Single-line comment: Reveal Contact Cards (staggered fade up)
        
        // Reveal all elements with class 'sr-contact'
        sr.reveal('.sr-contact', {
            // Stagger delay between contact cards
            interval: 150,
            
            // Animation duration
            duration: 800
        });

    } else {
        // else block executes if ScrollReveal is not defined
        
        // Log a warning message to the browser console
        // console.warn() outputs a warning message (appears in yellow in most browsers)
        console.warn('ScrollReveal library not loaded.');
    }
};