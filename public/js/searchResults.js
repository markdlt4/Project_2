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
        for(i = 0; i < response.data.length; i++) {
            var megaNode = document.createElement('LI');
            var node = document.createElement('a');
            var parkNode = document.createTextNode(response.data[i].name);
            node.setAttribute('href', '#' + response.data[i].name);
            node.appendChild(parkNode);
            megaNode.appendChild(node);
            document.getElementById('parks').appendChild(megaNode);
        }
        var button = document.createElement('button');
        button.innerHTML = "Save This Park";
        document.getElementById('park-info').appendChild(button);
        for(i = 0; i < response.data.length; i++) {
            //Create LI element
            var megaNode = document.createElement('LI');
            //Create parkName header
            var node1 = document.createElement('h5');
            var parkNameNode = document.createTextNode(response.data[i].fullName);
            //Create Park Description
            var node2 = document.createElement('p');
            var parkInfoNode = document.createTextNode(response.data[i].description);
            //Create Save Button
            //var button = document.createElement('button');
            //button.innerHTML = "Save " + response.data[i].name
            //apply all to HTML doc
            node1.appendChild(parkNameNode);
            megaNode.appendChild(node1);
            node1.setAttribute('id', response.data[i].name);
            node2.appendChild(parkInfoNode);
            megaNode.appendChild(node2);
            //megaNode.appendChild(button);
            document.getElementById('park-info').appendChild(megaNode);

        }
        $("#parkImage").attr("src", response.data[0].images[0].url);
        button.addEventListener('click', event => {
            event.preventDefault();
            
            savePark(search, 'test', 2);
        });
    function savePark(parkName, parkActivity, UserId) {
        $.post("/api/activity", {
          parkName: parkName,
          parkActivity: parkActivity,
          UserId: UserId
        })
      }
    });
});