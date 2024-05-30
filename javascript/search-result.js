//Display results from search
document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameters
    function getQueryParam(param) {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        return urlParams.get(param);
    }

    var searchQuery = decodeURIComponent(getQueryParam('q'));
    document.getElementById('searchResultsTitle').textContent += '"' + searchQuery + '"';

    // Here you would typically make an AJAX request to your server to fetch the search results
    // For now, we'll just simulate this with a placeholder
    document.getElementById('resultsContainer').innerHTML = '<p>Simulated search results for "' + searchQuery + '"</p>';
});




//Filter function
document.addEventListener("DOMContentLoaded", function() {
    function updateResults(filterType) {
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = ''; // Clear existing results

        // Simulate fetching data based on filter
        const filteredResults = getFilteredResults(filterType);

        // Append results as images
        filteredResults.forEach(meal => {
            const imgElement = document.createElement('img');
            imgElement.src = meal.imageUrl;
            imgElement.alt = meal.name;
            imgElement.classList.add('result-item');

            resultsContainer.appendChild(imgElement);
        });
    }

    // Simulated function to return filtered results
    function getFilteredResults(filterType) {
        // Here you would typically make an API call or filter your data
        return [
            { name: 'Meal 1', imageUrl: 'path/to/image1.jpg' },
            { name: 'Meal 2', imageUrl: 'path/to/image2.jpg' }
            // Add more meals based on actual data and filter
        ];
    }

    document.getElementById('filterNew').addEventListener('click', () => updateResults('new'));
    document.getElementById('filterPopular').addEventListener('click', () => updateResults('popular'));
    document.getElementById('filterRating').addEventListener('click', () => updateResults('rating'));
});



//side bar filter function
// Event listener to open the filter sidebar
document.getElementById('filterIcon').addEventListener('click', function() {
    document.getElementById('filterSidebar').style.width = '250px';
    document.getElementById('filterSidebar').style.visibility = 'visible';

});

// Function to close the filter sidebar
function closeNav() {
    document.getElementById('filterSidebar').style.width = '0';
    document.getElementById('filterSidebar').style.visibility =  'hidden';


}

// Adding event listeners to checkboxes to filter images
document.querySelectorAll('input[name="filter"]').forEach(filterCheckbox => {
    filterCheckbox.addEventListener('change', function() {
        // When any checkbox is changed, determine which checkboxes are checked
        let checkedTags = Array.from(document.querySelectorAll('input[name="filter"]:checked')).map(input => input.value);
        
        // Select all images
        let images = document.querySelectorAll('.meal');
        
        // Loop through all images to determine which ones to display
        images.forEach(img => {
            // Get the tags from data attribute
            let tags = img.getAttribute('data-tags').split(' ');
            
            // Determine if this image should be displayed based on checked tags
            if (checkedTags.every(tag => tags.includes(tag)) || checkedTags.length === 0) {
                img.style.display = ''; // Show the image if all checked tags are in the image's tags
            } else {
                img.style.display = 'none'; // Hide the image if not all checked tags are in the image's tags
            }
        });
    });
});

// Event listener to open the filter sidebar
document.getElementById('filterIcon').addEventListener('click', function() {
    var sidebar = document.getElementById('filterSidebar');
    sidebar.style.width = '250px';
    sidebar.style.visibility = 'visible';
});

// Function to close the filter sidebar
function closeNav() {
    var sidebar = document.getElementById('filterSidebar');
    sidebar.style.width = '0';
    sidebar.style.visibility = 'hidden';
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