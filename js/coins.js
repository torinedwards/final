
// coins api

  $(function(){
    console.log('scripts loaded');
    var url = 'https://api.coingecko.com/api/v3/simple/price?ids=btc%2C%20xrp%2C%20ltc%2C%20eth%2C%20bch%2C%20usdc%2C%20doge%2C%20miota%2C%20xlm%2C%20usdt&' + 'vs_currencies=usd&include_24hr_vol=false&include_last_updated_at=false';
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

  function buildDT(data) {
    $('#table').dataTable({
      data: data,
      columns: [
        {"data": "name"},
        {"data": "Area"},
        {"data": "Population"},
        {"data": "Airports"}
      ]
    })
  }

  });
