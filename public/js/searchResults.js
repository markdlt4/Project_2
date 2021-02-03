//Window.location.href
const apiKey = '\&api_key=oZZ6A3EEQPoNgJfv3fM7VlQt9Jcky7VyMODxwiof'
const searchItem = 'parks'

// Get the value of the URL query parameter 'searchTerm'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('searchTerm');

$(document).ready(function(){

    console.log(searchTerm);
    const search = 
    'https://developer.nps.gov/api/v1/' 
    + searchItem 
    + '?q=' 
    + searchTerm
    + apiKey;

    $.ajax({
        url: search,
        method: 'GET'
    }).then(function(response) {
        // document.getElementById('park-name').innerHTML = response.data[0].fullName;
        $("#park-name").text(response.data[0].fullName);
        $("#bodyText").text(response.data[0].description);
        $("#parkImage").attr("src", response.data[0].images[0].url);
        
    });
});

// bodyText
// park-name
// parks
// places
// campgrounds
// events
// parksVisitorCenter