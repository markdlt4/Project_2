// Can search activities, alerts, amenities, campgrounds, events, park data, people
// places, thingstodo, etc.
// https://www.nps.gov/subjects/developer/api-documentation.htm#/

//const { response } = require("express");

const apiKey = '\&api_key=oZZ6A3EEQPoNgJfv3fM7VlQt9Jcky7VyMODxwiof'
const searchItem = 'parks'

function reroute() {
  location.href = '/parks?searchTerm=' + userInput
}

$("#run-search").on("click", function(event) {
    event.preventDefault();
    userInput = document.getElementById("search-input").value;
    reroute();
  });
