// Can search activities, alerts, amenities, campgrounds, events, park data, people
// places, thingstodo, etc.
// https://www.nps.gov/subjects/developer/api-documentation.htm#/

//const { response } = require("express");

function redirect() {
  location.href = '/parks/' + userInput
}

$("#run-search").on("click", function(event) {
    event.preventDefault();
    userInput = document.getElementById("search-input").value;
    redirect();
    });
