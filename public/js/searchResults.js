//Window.location.href
const apiKey = '\&api_key=oZZ6A3EEQPoNgJfv3fM7VlQt9Jcky7VyMODxwiof'
const searchItem = 'parks'

$(document).ready(function(){
    var sortURL = window.location.pathname.replace('/parks/', '');
    search = sortURL.replace(/%20/g, ' ');
    console.log(search);
    $.ajax({
        url: search,
        method: 'GET'
        }).then(function(response) {
            for(i = 0; i <= response.data.length; i++) {
                document.getElementById('bodyText').innerHTML = response.data[i].description;
                document.getElementById('park-name').innerHTML = response.data[i].fullName;
            }
        })
    });

// bodyText
// park-name
// parks
// places
// campgrounds
// events
// parksVisitorCenter