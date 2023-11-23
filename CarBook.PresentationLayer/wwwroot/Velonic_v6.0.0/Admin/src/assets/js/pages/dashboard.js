/**
 * Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Dashboard
 */

! function ($) {
    "use strict";

    var Dashboard = function () {
        this.$body = $("body"),
            this.charts = []
    };


    Dashboard.prototype.initCharts = function () {
        window.Apex = {
            chart: {
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0
                }
            },
            colors: ["#3e60d5", "#47ad77", "#fa5c7c", "#ffbc00"],
        };

        var colors = ["#3e60d5", "#47ad77", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#revenue-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }

        var options = {
            series: [{
                name: 'Revenue',
                data: [440, 505, 414, 526, 227, 413, 201]
            }, {
                name: 'Sales',
                data: [320, 258, 368, 458, 201, 365, 389]
            },  {
                name: 'Profit',
                data: [320, 458, 369, 520, 180, 369, 160]
            }],
            chart: {
                height: 377,
                type: 'bar'
            },
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
            dataLabels: {
                enabled: false
              },
            colors: colors,
            xaxis: {
                categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              },
              yaxis: {
                title: {
                  text: '$ (thousands)'
                }
            },
            legend: {
                offsetY: 7,
            },
            grid: {
                padding: {
                  bottom: 20
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                  formatter: function (val) {
                    return "$ " + val + " thousands"
                  }
                }
              }
        };

        var chart = new ApexCharts(
            document.querySelector("#revenue-chart"),
            options
        );

        chart.render();

        // --------------------------------------------------
        var colors = ["#3e60d5", "#47ad77", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#yearly-sales-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            series: [
            {
              name: "Mobile",
              data: [25, 15, 25, 36, 32, 42, 45]
            },
            {
              name: "Desktop",
              data: [20, 10, 20, 31, 27, 37, 40]
            }
          ],
            chart: {
            height: 250,
            type: 'line',
            toolbar: {
              show: false
            }
          },
          colors: colors,
          
          stroke: {
            curve: 'smooth',
            width: [3,3]
          },
          markers: {
            size: 3
          },
          xaxis: {
            categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
          },
          legend: {
            show: false
          }
          };
  
          var chart = new ApexCharts(document.querySelector("#yearly-sales-chart"), options);
          chart.render();


        /* ------------- visitors by country */
        Apex.grid = {
            padding: {
              right: 0,
              left: 0
            }
          }
          
          Apex.dataLabels = {
            enabled: false
          }
        var options = {
            series: [44, 55, 13, 43],
            chart: {
            width: 80,
            type: 'pie',
          },
          legend: {
            show: false
          },
          colors: ["#1a2942","#f13c6e","#3bc0c3","#d1d7d973"],
          labels: ['Team A', 'Team B', 'Team C', 'Team D'],
          };
  
          var chart = new ApexCharts(document.querySelector("#us-share-chart"), options);
          chart.render();
    },

        

        //initializing various components and plugins
        Dashboard.prototype.init = function () {
            var $this = this;

            // init charts
            this.initCharts();
        },

        //init flotchart
        $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

    //initializing Dashboard
    function ($) {
        "use strict";
        $(document).ready(function (e) {
            $.Dashboard.init();
        });
    }(window.jQuery);