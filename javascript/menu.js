let index = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

document.querySelector(".prev").addEventListener("click", function() {
    changeSlide(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    changeSlide(1);
});

function changeSlide(step) {
    index += step;
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }
    document.querySelector(".carousel-container").style.transform = `translateX(-${index * 100}%)`;
}
