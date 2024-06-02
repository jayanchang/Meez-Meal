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


let imagedisplay = document.getElementsByClassName("slide");
let length = imagedisplay.length;
let imageIndex = 0;

// Carousel Sliders
function Carousel() {


    for (let i = 0; i < length; i++) {
        imagedisplay[i].classList.remove('on');
        imagedisplay[i].classList.add('off');

    }

    imageIndex++;
    if (imageIndex > length) {
        imageIndex = 1;
    }

 
    imagedisplay[imageIndex - 1].classList.add('on');
    imagedisplay[imageIndex - 1].classList.remove('off');

 
    setTimeout(Carousel, 1300);
}

function moveSLide(n) {


    imagedisplay[imageIndex - 1].classList.add('off');
    imagedisplay[imageIndex - 1].classList.remove('on');



    imageIndex = imageIndex + n;
    if (length < imageIndex) {
        imageIndex = 1;
    }
    if (1 > imageIndex) {
        imageIndex = length;
    }

    imagedisplay[imageIndex - 1].classList.add('on');
    imagedisplay[imageIndex - 1].classList.remove('off');


}


document.addEventListener("DOMContentLoaded", function() {
    imagedisplay[0].classList.add('on'); 
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




