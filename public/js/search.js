// Can search activities, alerts, amenities, campgrounds, events, park data, people
// places, thingstodo, etc.
// https://www.nps.gov/subjects/developer/api-documentation.htm#/

//const { response } = require("express");

const apiKey = '\&api_key=oZZ6A3EEQPoNgJfv3fM7VlQt9Jcky7VyMODxwiof'
const searchItem = 'parks'

const siteURL = "https://frozen-island-95140.herokuapp.com"

$("#run-search").on("click", function(event) {
    event.preventDefault();
    userInput = document.getElementById("search-input").value;
    search = 
    'https://developer.nps.gov/api/v1/' 
    + searchItem 
    + '?q=' 
    + userInput 
    + apiKey;
    $.ajax({
        url: search,
        method: "GET"
      }).then(function(response) {
        location.href = '/parks/' + response.data[0].fullName
      });
});
