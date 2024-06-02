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


let imageIndex = 0;
let imagegallery = document.getElementsByClassName("slide");
let gallerylen = imagegallery.length;

// Carousel Function
function Carousel() {

    for (let i = 0; i < gallerylen; i++) {
        imagegallery[i].classList.remove('on');
        imagegallery[i].classList.add('off');

    }


    imageIndex++;
    if (imageIndex > gallerylen) {
        imageIndex = 1;
    }

    imagegallery[imageIndex - 1].classList.add('on');
    imagegallery[imageIndex - 1].classList.remove('off');

    setTimeout(Carousel, 1300);
}

function nextSlide(i) {

    imagegallery[imageIndex - 1].classList.add('off');
    imagegallery[imageIndex - 1].classList.remove('on');



    imageIndex = imageIndex + i;
    if (gallerylen < imageIndex) {
        imageIndex = 1;
    }
    if (1 > imageIndex) {
        imageIndex = gallerylen;
    }
    
    imagegallery[imageIndex - 1].classList.remove('off');
    imagegallery[imageIndex - 1].classList.add('on');

}

// Initialize first slide and start the slideshow
document.addEventListener("DOMContentLoaded", function() {
    imagegallery[0].classList.add('on'); 
    setTimeout(Carousel, 1300); 
});









// Search Function
document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBtn").click();
    }
});

document.getElementById("searchBtn").addEventListener("click", function() {
    let keywordMeal = encodeURIComponent(document.getElementById('searchInput').value);
    document.location.href = "/search-results.html?q=" + keywordMeal;
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




