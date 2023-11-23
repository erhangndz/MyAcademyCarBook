/**
 * Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Chartjs
 */

!function ($) {
    "use strict";

    var LineChart = function () {
        this.$body = $("body");
        this.charts = [];

        this.defaultColors = ["#3bc0c3", "#4489e4", "#d03f3f", "#716cb0"];
    };

    LineChart.prototype.interpolationExample = function () {
        var chartElement = document.getElementById('interpolation-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors;
        var ctx = chartElement.getContext('2d');
        var datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];

        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], datasets: [{
                    label: 'Fully Rounded',
                    data: datapoints,
                    borderColor: colors[0],
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4
                }, {
                    label: 'Small Radius', data: datapoints, borderColor: colors[1], fill: false, tension: 0.4
                }, {
                    label: 'Small Radius', data: datapoints, borderColor: colors[2], fill: false,
                },]
            }, options: {
                responsive: true, maintainAspectRatio: false, interaction: {
                    intersect: false,
                }, plugins: {
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
                        }, suggestedMin: -10, suggestedMax: 200
                    },
                }
            },
        });

        this.charts.push(chart);
    }


    LineChart.prototype.lineExample = function () {
        var chartElement = document.getElementById('line-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], datasets: [{
                    label: 'Fully Rounded',
                    data: [32, 42, 42, 62, 52, 75, 62],
                    borderColor: colors[0],
                    fill: true,
                    backgroundColor: hexToRGB(colors[0], 0.3),

                }, {
                    label: 'Small Radius',
                    data: [42, 58, 66, 93, 82, 105, 92],
                    fill: true,
                    backgroundColor: 'transparent',
                    borderColor: colors[1],
                    borderDash: [5, 5],
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, tension: 0.3, scales: {
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

        this.charts.push(chart)
    }


    //initializing various components and plugins
    LineChart.prototype.init = function () {
        var $this = this;
        Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

        Chart.defaults.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";
        // init charts
        this.interpolationExample();
        this.lineExample();

        // enable resizing matter


        $(window).on('resizeEnd', function (e) {
            $.each($this.charts, function (index, chart) {
                try {
                    chart.destroy();
                } catch (err) {
                }
            });
            $this.interpolationExample();
            $this.lineExample();
        });

        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 500);
        });
    };

    //init chart
    $.ChartJs = new LineChart;
    $.ChartJs.Constructor = LineChart
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

function skipped(ctx, value) {
    return ctx.p0.skip || ctx.p1.skip ? value : undefined;
}

function down(ctx, value) {
    return ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
}


