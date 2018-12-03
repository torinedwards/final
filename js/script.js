// scroll function
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0";
  } else {
    document.getElementById("navbar").style.bottom = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

// highcharts
Highcharts.chart('container', {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
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
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
// news api
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
