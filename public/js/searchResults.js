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
        for(i = 0; i < response.data.length && i <=10; i++) {
            var megaNode = document.createElement('LI');
            var node = document.createElement('a');
            var parkNode = document.createTextNode(response.data[i].name);
            node.setAttribute('href', '#' + response.data[i].name);
            node.appendChild(parkNode);
            megaNode.appendChild(node);
            document.getElementById('parks').appendChild(megaNode);
        }
        for(i = 0; i < response.data.length && i <=10; i++) {
            //<h5 class="mt-1 text-1" id="park-name"></h5>
            //<p id="bodyText"></p>
            //'park-info'
            var megaNode = document.createElement('LI');
            var node1 = document.createElement('h5');
            var parkNameNode = document.createTextNode(response.data[i].fullName);
            var node2 = document.createElement('p');
            var parkInfoNode = document.createTextNode(response.data[i].description);
            //var node3 = document.createElement('img');
            //node3.id = 'parkPicture' + [i];
            //document.getElementById('parkPicture' + [i]).src = response.data[i].images[0].url
            node1.appendChild(parkNameNode);
            megaNode.appendChild(node1);
            node2.appendChild(parkInfoNode);
            megaNode.appendChild(node2);
            //node3.appendChild(image);
            //megaNode.appendChild(node3);
            document.getElementById('park-info').appendChild(megaNode);
        //<div id='image' class="media bg-dark">
        //<img class=" align-self-start mr-3 mt-5 image-1" id="parkImage" src="./images/Grand_canyou.jpg" alt="Generic placeholder image"></img>

        }
        // $("#park-name").text(response.data[0].fullName);
        // $("#bodyText").text(response.data[0].description);
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