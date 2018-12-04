$(document).ready(function(){
  console.log ('DOM loaded');

  // Set up any variables needed
  var url = './js/eth.json';
  var date = [];
  var priceHigh = [];
  var chartData = [];

  // Load the JSON data
  $.ajax({
    type: 'GET',
    url: url,
    async: true,
    success: function(data){
      // Console log the data
      // console.log(data);

      // Callbacks for logic and chart
      doLogic(data)
      buildChart(data);
    },

    error: function(error) {
      console.log(error);
    },
});

  // Function to do logic
  function doLogic(data) {
    // Set up a for loop to loop through the data
    for(i = 0; i < data.length; i++) {
      // Push data to different arrays to prepare for chart
      date.push(data[i].Date);

      priceHigh.push(data[i].High);

      chartData.push([data[i].Date, data[i].High]);
    }
  }

  // Function to build charts
  function buildChart(data) {
    // Setting some default highchart actions
    Highcharts.setOptions({
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      }
    })

    // line chart
    Highcharts.chart('container3', {

      title: {
             text: 'Bitcoin Prices in USD, 2015-2018'
         },

         subtitle: {
             text: 'Source: cryptodatadownload.com'
         },

         yAxis: {
             title: {
                 text: 'Price in USD'
             }
         },
         legend: {
             layout: 'vertical',
             align: 'right',
             verticalAlign: 'middle'
         },

         plotOptions: {
             series: {
                 label: {
                     connectorAllowed: false
                 },
                 pointStart: 2015
             }
         },


      // Actual data plotting
      series: [{
        name: 'Daily High',
        data: priceHigh
      }]
    });
    Highcharts.chart('container3', {

      title: {
             text: 'Ethereum Prices in USD, Last 30 Days'
         },

         subtitle: {
             text: 'Source: cryptodatadownload.com'
         },


         yAxis: {
             title: {
                 text: 'Price in USD'
             }
         },
         legend: {
             layout: 'vertical',
             align: 'right',
             verticalAlign: 'middle'
         },

         plotOptions: {
             series: {
                 label: {
                     connectorAllowed: false
                 },
                 pointStart: 0


             }
         },


      // Actual data plotting
      series: [{
        name: 'High',
        data: priceHigh
      }]
    });


  }
});
