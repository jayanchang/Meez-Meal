// Function for changing border colour on address boxes
function addressBorder1(){
    let address1 = document.getElementById("addressBorder1");
    let address2 = document.getElementById("addressBorder2");

    if (address2.style.borderColor === "white" || address2.style.borderColor === ""){
        address1.style.borderColor = "black";
    } else if (address2.style.borderColor === "black"){
        address2.style.borderColor = "white";
        address1.style.borderColor = "black";
    }
}

// Function for changing border colour on address boxes
function addressBorder2(){
    let address1 = document.getElementById("addressBorder1");
    let address2 = document.getElementById("addressBorder2");

    if (address1.style.borderColor === "white" || address1.style.borderColor === ""){
        address2.style.borderColor = "black";
    } else if (address1.style.borderColor === "black"){
        address1.style.borderColor = "white";
        address2.style.borderColor = "black";
    }
}

// Function for changing payment method text in summary
function changeMethod(method){
    document.getElementById("method").textContent = method;
}

// Function for pop up confirmation
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}