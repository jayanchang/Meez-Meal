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
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

// Function to cycle through slides automatically
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].classList.add('inactive');
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add('active');
    slides[slideIndex - 1].classList.remove('inactive');
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function to change slide manually
function changeSlide(n) {
    slides[slideIndex - 1].classList.remove('active');
    slides[slideIndex - 1].classList.add('inactive');
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    slides[slideIndex - 1].classList.add('active');
    slides[slideIndex - 1].classList.remove('inactive');
}

// Initialization on DOM content loaded
document.addEventListener("DOMContentLoaded", function() {
    slides[0].classList.add('active'); // Ensure the first slide is visible initially
    setTimeout(showSlides, 3000); // Start the slideshow
});

// Debugging version of showSlides function for console feedback
function debugShowSlides() {
    console.log("Showing slides, current index: ", slideIndex);
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].classList.add('inactive');
        console.log("Slide " + i + " set to inactive");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    console.log("New slide index: ", slideIndex);
    slides[slideIndex - 1].classList.add('active');
    slides[slideIndex - 1].classList.remove('inactive');
    console.log("Slide " + (slideIndex - 1) + " set to active");
    setTimeout(debugShowSlides, 3000);
}


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




