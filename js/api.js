$(document).ready(function(){
  console.log('Scripts loaded');

  var base = 'https://newsapi.org/v2/top-headlines?' +
          'q=bitcoin&from=2018-11-03&sortBy=publishedAt&apiKey=';
  var url = base + Key;

  $.ajax({
    type: 'GET',
    url: url,
    success: function(data){
      console.log(data);
      buildTable(data);
    },

    error: function(error) {
      console.log(error);
    },
  });

  function buildTable(data) {
    for(i=0; i< data.articles.length; i++) {
      var name = '<h3>' + data.articles[i].name + '</h3>';
      var description = '<p>' + data.articles[i].description + '</p>';

      $('.results').append(name + description);
    }
  }

})
