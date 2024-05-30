// DOM Elements for the accordion sections
const firstB = document.getElementById("firstB");
const firstD = document.getElementById("firstD");
const secondB = document.getElementById("secondB");
const secondD = document.getElementById("secondD");

// Event listeners for accordion buttons
firstB.addEventListener("click", () => {
    toggleAccordion(firstD, firstB);
});

secondB.addEventListener("click", () => {
    toggleAccordion(secondD, secondB);
});

// Function to toggle accordion visibility and button text
function toggleAccordion(content, button) {
    if (content.classList.contains("less")) {
        content.classList.remove("less");
        button.innerText = "Read less 🔼";
    } else {
        content.classList.add("less");
        button.innerText = "Read more 🔽";
    }
}

// Slideshow control variables
let slides = document.getElementsByClassName("slide");
let slidesLength = slides.length;
let imageIndex = 0;

// Function to cycle through slides automatically
function displayCarousel() {


    // Mark all slides as inactive


    for (let i = 0; i < slidesLength; i++) {
        slides[i].classList.remove('on');
        slides[i].classList.add('off');

    }

    // Increment slide index or reset if at the end
    imageIndex++;
    if (imageIndex > slidesLength) {
        imageIndex = 1;
    }

    // Activate the new slide
    slides[imageIndex - 1].classList.add('on');
    slides[imageIndex - 1].classList.remove('off');

    // Set a timeout to automatically cycle slides
    setTimeout(displayCarousel, 1300);
}

function nextSlide(n) {

    // Adjust current slide before changing
    slides[imageIndex - 1].classList.add('off');
    slides[imageIndex - 1].classList.remove('on');


    // Calculate new slide index
    imageIndex = imageIndex + n;
    if (slidesLength < imageIndex) {
        imageIndex = 1;
    }
    if (1 > imageIndex) {
        imageIndex = slidesLength;
    }

    // Activate new slide
    slides[imageIndex - 1].classList.remove('off');
    slides[imageIndex - 1].classList.add('on');

}

// Initialize first slide and start the slideshow
document.addEventListener("DOMContentLoaded", function() {
    slides[0].classList.add('on'); // Ensure the first slide is visible initially
    setTimeout(displayCarousel, 1300); // Start the slideshow
});







// Event listeners for search-related functionality
document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBtn").click();
    }
});

document.getElementById("searchBtn").addEventListener("click", function() {
    var searchQuery = encodeURIComponent(document.getElementById('searchInput').value);
    // Redirect to your own search results page with the query as a parameter
    document.location.href = "/search-results.html?q=" + searchQuery;
});

document.getElementById("triggerSearch").addEventListener("click", function(e) {
    document.getElementById("searchPanel").style.visibility = "visible";
});

document.getElementById("searchPanel").addEventListener("click", function(e) {
    if (e.target.closest("div").getAttribute('id') == "searchPanel") {
        document.getElementById("searchPanel").style.visibility = "hidden";
    }
});


//Side Menu Panel Function
document.getElementById("triggerSidePanel").addEventListener("click", function () {
    document.getElementById("sidePanel").style.visibility = "visible";
    document.getElementById("sideMenu").style.marginLeft = "0";
});

document.getElementById("sidePanel").addEventListener("click", function (e) {
    if (e.target.closest("div").getAttribute('id') === "sidePanel") {
        document.getElementById("sidePanel").style.visibility = "hidden";
        document.getElementById("sideMenu").style.marginLeft = "-20%";
    }
});




