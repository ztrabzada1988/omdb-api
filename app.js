$(document).ready(function() {

  // once submit button is clicked, plug the searchItem in url
  $('#button').on('click', function(event) {
    event.preventDefault();

    // varibale that takes the searched item from submit
    var searchItem = $('#query').val()
    // run getRequest function
    getRequest(searchItem);
      // empty form
      $('#query').val("");
    });
  });

  // define getRequest function that takes requests data from omdb server
  function getRequest(searchItem) {
    // define search and data type parameters
    var params = {
      s: searchItem,
      r: 'json'
    };
    // define url of the server website
    url = 'http://www.omdbapi.com';
    // request to get results as JSON from server
    $.getJSON(url, params, function(data){
      showResults(data.Search);
    });
  }

  // define showResults function the inserts searchItem result into search-results div
  function showResults(results){
  var result = "";
  // got through each array and get the value of the Title only
  $.each(results, function(index,value){
    result += '<p>' + value.Title + '</p>';
  });
  // append the information into search-results div.
  $('#search-results').append(result);
  }
