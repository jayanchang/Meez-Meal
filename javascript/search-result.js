//Result from search
document.addEventListener("DOMContentLoaded", function () {

    function resultDisplay(param) {
        var keywordMeal = window.location.search;
        var urlParams = new URLSearchParams(keywordMeal);
        return urlParams.get(param);
    }

    let searchQuery = decodeURIComponent(resultDisplay('q'));
    document.getElementById('resultName').textContent += '"' + searchQuery + '"';


});


//Filter function
document.addEventListener("DOMContentLoaded", function () {
    function filterFunction(Type) {

        let typeResults = getFilteredResults(Type);

        typeResults.forEach(meal => {
            let foodIMG = document.createElement('img');
            foodIMG.src = meal.imageUrl;
            foodIMG.alt = meal.name;
            filterContainer.appendChild(foodIMG);
        });
    }

});


document.querySelectorAll('input[name="filter"]').forEach(optionBtn => {
    optionBtn.addEventListener('change', function () {

        let mealinput = document.querySelectorAll('input[name="filter"]:checked');
        let mealPhotos = document.querySelectorAll('.meal');
        let mealarray = Array.from(mealinput);
        let filteredMeals = mealarray.map(input => input.value);

        mealPhotos.forEach(img => {
            let tags = img.getAttribute('data-tags').split(' ');

            if ( filteredMeals.length === 0) {
                img.style.display = ''; 

            } else if (filteredMeals.every(function(tag) { return tags.includes(tag); })) {
                img.style.display = '';

            }else {
                img.style.display = 'none'; 
            }
        });
    });
});

// Filter side panel
document.getElementById('filterIcon').addEventListener('click', function() {
    var sidebar = document.getElementById("filterSidebar");
    sidebar.style.visibility = "visible";
    sidebar.style.width = "100vw"; 
    sidebar.style.transition = "ease-in";
});

document.getElementById('filterSidebar').addEventListener("click", function(event) {
    if (event.target === event.currentTarget) { 
        var sidebar = document.getElementById("filterSidebar");
        sidebar.style.visibility = "hidden";
        sidebar.style.width = "0";
        sidebar.style.transition = "ease-out";
    }
});




//Search Function
document.getElementById("search").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBtn").click();
    }
});

document.getElementById("searchBtn").addEventListener("click", function () {
    let searchQuery = encodeURIComponent(document.getElementById('searchInput').value);

    document.location.href = "/search-results.html?q=" + searchQuery;
});

document.getElementById("triggerSearch").addEventListener("click", function (e) {
    document.getElementById("searchPanel").style.visibility = "visible";
});

document.getElementById("searchPanel").addEventListener("click", function (e) {
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