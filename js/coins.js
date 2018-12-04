
// coins api

      $(function(){
        console.log('scripts loaded');
        var url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank&per_page=10&page=1';

        $.ajax({
        type: 'GET',
        url: url,
        success: function(data){
          console.log(data);
          buildDT(data);
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
            {"data": "market_cap"},
            {"data": "market_cap_rank"},
            {"data": "ath"},
            {"data": "current_price"}

          ]
        })
      }

      });
