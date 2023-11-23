/**
 * Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Chartjs
 */

!function ($) {
    "use strict";

    var OtherChart = function () {
        this.$body = $("body");
        this.charts = [];

        this.defaultColors = ["#3bc0c3", "#4489e4", "#d03f3f", "#716cb0"];


    };

    OtherChart.prototype.bubbleExample = function () {
        var chartElement = document.getElementById('bubble-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors;
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bubble', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'Fully Rounded',
                    data: [{x: 10, y: 20, r: 5}, {x: 20, y: 10, r: 5}, {x: 15, y: 15, r: 5},],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], .3),
                    borderWidth: 2,
                    borderSkipped: false,
                }, {
                    label: 'Small Radius',
                    data: [{x: 12, y: 22}, {x: 22, y: 20}, {x: 5, y: 15},],
                    backgroundColor: hexToRGB(colors[1], .3),
                    borderColor: colors[1],
                    borderWidth: 2,
                    borderSkipped: false,
                }]
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


    OtherChart.prototype.donutExample = function () {
        var chartElement = document.getElementById('donut-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'doughnut', data: {
                labels: ["Direct", "Affilliate", "Sponsored", "E-mail"], datasets: [{
                    data: [200, 184, 96, 198], backgroundColor: colors, borderColor: "transparent", borderWidth: "3",
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, cutoutPercentage: 60, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                },
            },
        });

        this.charts.push(chart)
    }


    OtherChart.prototype.radarExample = function () {
        var chartElement = document.getElementById('radar-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'radar', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May", "June"], datasets: [{
                    label: 'Dataset 1',
                    data: [12, 29, 39, 22, 28, 34],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], .3),

                }, {
                    label: 'Dataset 2',
                    data: [10, 19, 15, 28, 34, 39],
                    borderColor: colors[1],
                    backgroundColor: hexToRGB(colors[1], .3),

                },]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    },

                },
            },
        });
        this.charts.push(chart)
    }

    OtherChart.prototype.scatterExample = function () {
        var chartElement = document.getElementById('scatter-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'scatter', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May", "June", "July"], datasets: [{
                    label: 'Dataset 1',
                    data: [{x: 10, y: 50,}, {x: 50, y: 10,}, {x: 15, y: 15,}, {x: 20, y: 45,}, {x: 25, y: 18,}, {x: 34, y: 38,},],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], .3),

                }, {
                    label: 'Dataset 2',
                    data: [{x: 15, y: 45,}, {x: 40, y: 20,}, {x: 30, y: 5,}, {x: 35, y: 25,}, {x: 18, y: 25,}, {x: 40, y: 8,},],
                    borderColor: colors[1],
                    backgroundColor: hexToRGB(colors[1], .3),

                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
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
                    }
                }
            },
        });
        this.charts.push(chart)
    }


    OtherChart.prototype.barLineExample = function () {
        var chartElement = document.getElementById('bar-line-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May", "June", "July"], datasets: [{
                    label: 'Dataset 1',
                    data: [10, 20, 35, 18, 15, 25, 22],
                    backgroundColor: colors[0],
                    stack: 'combined',
                    type: 'bar'
                }, {
                    label: 'Dataset 2',
                    data:  [13, 23, 38, 22, 25, 30, 28],

                    borderColor:colors[1],
                    stack: 'combined'

                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    },

                }, scales: {

                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        stacked: true,
                        grid: {
                            display: false
                        }
                    }
                }
            },
        });
        this.charts.push(chart)
    }


    //initializing various components and plugins
    OtherChart.prototype.init = function () {
        var $this = this;
        Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

        Chart.defaults.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";
        // init charts
        this.bubbleExample();
        this.donutExample();

        // enable resizing matter


        $(window).on('resizeEnd', function (e) {
            $.each($this.charts, function (index, chart) {
                try {
                    chart.destroy();
                } catch (err) {
                }
            });
            $this.bubbleExample();
            $this.donutExample();
        });

        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 500);
        });
    };

    //init chart
    $.ChartJs = new OtherChart;
    $.ChartJs.Constructor = OtherChart
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


