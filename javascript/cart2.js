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

function changeMethod(method){
    document.getElementById("method").textContent = method;
}

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