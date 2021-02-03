//Window.location.href

const apiKey = '\&api_key=oZZ6A3EEQPoNgJfv3fM7VlQt9Jcky7VyMODxwiof'
const searchItem = 'parks'
const searchTerm = window.location.href.replace('', '');

$(document).ready(function(){
    console.log(location.search);
    console.log(searchTerm);
    event.preventDefault();
    search = 
    'https://developer.nps.gov/api/v1/' 
    + searchItem 
    + '?q=' 
    + searchTerm
    + apiKey;
    $.ajax({
        url: search,
        method: 'GET'
        }).then(function(response) {
        document.getElementById('bodyText').innerHTML = response.data[0];
        document.getElementById('park-name').innerHTML = response.data[0].fullName;
        });
    });

bodyText
park-name