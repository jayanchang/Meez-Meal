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

