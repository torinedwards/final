
// news api
$(document).ready(function(){
  console.log('Scripts loaded');
  var Key = 'ac40151789d74c158c18d11beb4f6ba7'

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
    for(i=0; i< 4; i++) {
      var name = '<h3>' + data.articles[i].title + '</h3>';
      var description = '<p>' + data.articles[i].description + '</p>';
      var urler = data.articles[i].url
      var link = '<a href="' + urler + '"' + '>' + name + '</a>'

      $('.results').append(link + description);
    }
  }

})
