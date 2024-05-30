let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
    // Log the current status
    console.log("Showing slides, current index: ", slideIndex);

    // Mark all slides as inactive
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].classList.add('inactive');
        console.log("Slide " + i + " set to inactive");
    }

    // Increment slide index or reset if at the end
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Activate the new slide
    console.log("New slide index: ", slideIndex);
    slides[slideIndex - 1].classList.add('active');
    slides[slideIndex - 1].classList.remove('inactive');
    console.log("Slide " + (slideIndex - 1) + " set to active");

    // Set a timeout to automatically cycle slides
    setTimeout(showSlides, 3000);
}

function changeSlide(n) {
    // Adjust current slide before changing
    slides[slideIndex - 1].classList.remove('active');
    slides[slideIndex - 1].classList.add('inactive');

    // Calculate new slide index
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Activate new slide
    slides[slideIndex - 1].classList.add('active');
    slides[slideIndex - 1].classList.remove('inactive');
}

// Initialize first slide and start the slideshow
document.addEventListener("DOMContentLoaded", function() {
    slides[0].classList.add('active'); // Ensure the first slide is visible initially
    setTimeout(showSlides, 3000); // Start the slideshow
});

// Functions for the search functionality
function openSearch() {
    document.getElementById('searchOverlay').style.display = 'flex'; // Use 'flex' to center content
}

function closeSearch() {
    document.getElementById('searchOverlay').style.display = 'none';
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    console.log("Searching for:", searchTerm);
    // Implement your search functionality here
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



