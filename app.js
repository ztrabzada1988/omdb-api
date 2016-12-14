$(document).ready(function() {

  // varibale that takes the searched item from submit

  // once submit button is clicked, plug the searchItem in url
  $('#button').on('click', function(event) {

    event.preventDefault();
    var searchItem = $('#query').val()
    $.getJSON('http://www.omdbapi.com/?s=' + searchItem + '&r=json', function(data){
      showResults(data.Search);
      $('#query').val("");
    });
  });

  console.log("hellmhvghko");

  function showResults(results){

  var result = "";

  $.each(results, function(index,value){
    result += '<p>' + value.Title + '</p>';
  });

  $('#search-results').append(result);
  }
})
