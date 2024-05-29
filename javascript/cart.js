const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
}

let count = 1;
let countup_btn = document.getElementById("countup");
let countdown_btn = document.getElementById("countdown")
let disp = document.getElementById("count");

countup_btn.addEventListener("click", function () {
    count++;
    disp.innerHTML = count;
});

countdown_btn.addEventListener("click", function (){
    count--;
    disp.innerHTML = count;
});

