/**
 * Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Chartjs
 */

!function ($) {
    "use strict";

    var AreaChart = function () {
        this.$body = $("body");
        this.charts = [];

        this.defaultColors = ["#3bc0c3", "#4489e4", "#d03f3f", "#716cb0"];


    };

    AreaChart.prototype.boundariesExample = function () {
        var chartElement = document.getElementById('boundaries-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors;
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'Fully Rounded',
                    data: [12.5, -19.4, 14.3, -15.0, 10.8, -10.5],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], .3),
                    fill: false
                },]
            }, options: {
                responsive: true, maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });

        this.charts.push(chart);
    }


    AreaChart.prototype.datasetExample = function () {
        var chartElement = document.getElementById('dataset-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'D0',
                    data: [10, 20, 15, 35, 38, 24],
                    borderColor: colors[0],
                    hidden: true,
                    backgroundColor: hexToRGB(colors[0], 0.3),
                }, {
                    label: 'D1',
                    data: [12, 18, 18, 33, 41, 20],
                    borderColor: colors[1],
                    fill: '-1',
                    backgroundColor: hexToRGB(colors[1], 0.3),
                }, {
                    label: 'D2',
                    data: [5, 25, 20, 25, 28, 14],
                    borderColor: colors[2],
                    fill: 1,
                    backgroundColor: hexToRGB(colors[2], 0.3),
                }, {
                    label: 'D3',
                    data: [12, 45, 15, 35, 38, 24],
                    borderColor: colors[3],
                    fill: '-1',
                    backgroundColor: hexToRGB(colors[3], 0.3),
                }, {
                    label: 'D4',
                    data: [24, 38, 35, 15, 20, 10],
                    borderColor: colors[4],
                    fill: 8,
                    backgroundColor: hexToRGB(colors[4], 0.3),
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false,

                plugins: {

                    filler: {
                        propagate: false
                    },

                }, interaction: {
                    intersect: false,
                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        stacked: true, grid: {
                            display: false
                        }
                    },
                }
            },
        });

        this.charts.push(chart)
    }

    //initializing various components and plugins
    AreaChart.prototype.init = function () {
        var $this = this;
        Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

        Chart.defaults.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";
        // init charts
        this.boundariesExample();
        this.datasetExample();

        // enable resizing matter


        $(window).on('resizeEnd', function (e) {
            $.each($this.charts, function (index, chart) {
                try {
                    chart.destroy();
                } catch (err) {
                }
            });
            $this.boundariesExample();
            $this.datasetExample();
        });

        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 500);
        });
    };

    //init chart
    $.ChartJs = new AreaChart;
    $.ChartJs.Constructor = AreaChart
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.ChartJs.init()
    }(window.jQuery);

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}


