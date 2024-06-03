// Initialise values
let count = 1;
let countup_btn = document.getElementById("countup");
let countdown_btn = document.getElementById("countdown")
let disp = document.getElementById("count");

let price = 15.5;
let changed_price = 0;

// Function for minus button
countup_btn.addEventListener("click", function () {
    count++;
    changed_price = price * count;
    disp.innerHTML = count;
    document.getElementById("price").textContent = changed_price;
    document.getElementById("tot-price-text").textContent = changed_price;
});

// Function for add button
countdown_btn.addEventListener("click", function (){
    if (count == 0){
        return;
    } else {
        count--;
        changed_price = price * count;
        disp.innerHTML = count;
        document.getElementById("price").textContent = changed_price;
        document.getElementById("tot-price-text").textContent = changed_price;
    }
});
