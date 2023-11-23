/**
 * Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Profile
 */

! function ($) {
    "use strict";

    var Profile = function () {
        this.$body = $("body"),
            this.charts = []
    };

    Profile.prototype.respChart = function (selector, type, data, options) {

        var draw3 = Chart.controllers.bar.prototype.draw;
        Chart.controllers.bar.draw = function () {
            draw3.apply(this, arguments);
            var ctx = this.chart.ctx;
            var _fill = ctx.fill;
            ctx.fill = function () {
                ctx.save();
                ctx.shadowColor = 'rgba(0,0,0,0.01)';
                ctx.shadowBlur = 5;
                ctx.shadowOffsetX = 4;
                ctx.shadowOffsetY = 5;
                _fill.apply(this, arguments)
                ctx.restore();
            }
        }

        //default config
        Chart.defaults.font.color = "rgba(93,106,120,0.2)";
        Chart.defaults.scale.grid.color = "rgba(93,106,120,0.2)";

        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // this function produce the responsive Chart JS
        function generateChart() {
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width());
            var chart;
            switch (type) {
                case 'Line':
                    chart = new Chart(ctx, { type: 'line', data: data, options: options });
                    break;
                case 'Doughnut':
                    chart = new Chart(ctx, { type: 'doughnut', data: data, options: options });
                    break;
                case 'Pie':
                    chart = new Chart(ctx, { type: 'pie', data: data, options: options });
                    break;
                case 'Bar':
                    chart = new Chart(ctx, { type: 'bar', data: data, options: options });
                    break;
                case 'Radar':
                    chart = new Chart(ctx, { type: 'radar', data: data, options: options });
                    break;
                case 'PolarArea':
                    chart = new Chart(ctx, { data: data, type: 'polarArea', options: options });
                    break;
            }
            return chart;
        };
        // run function - render chart at first load
        return generateChart();
    },
        // init various charts and returns
        Profile.prototype.initCharts = function () {
            var charts = [];

            //barchart
            if ($('#high-performing-product').length > 0) {
                // create gradient
                var ctx = document.getElementById('high-performing-product').getContext("2d");
                var gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
                gradientStroke.addColorStop(0, "#409c6b");
                gradientStroke.addColorStop(1, "#3e60d5");

                var barChart = {
                    // labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Orders",
                            backgroundColor: gradientStroke,
                            borderColor: gradientStroke,
                            hoverBackgroundColor: gradientStroke,
                            hoverBorderColor: gradientStroke,
                            data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
                        },
                        {
                            label: "Revenue",
                            backgroundColor: "rgba(93,106,120,0.2)",
                            borderColor: "rgba(93,106,120,0.2)",
                            hoverBackgroundColor: "rgba(93,106,120,0.2)",
                            hoverBorderColor: "rgba(93,106,120,0.2)",
                            data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
                        }
                    ]
                };
                var barOpts = {
                    maintainAspectRatio: false,
                    datasets: {
                        bar: {
                            barPercentage: 0.7,
                            categoryPercentage: 0.5,
                        }
                    },
                    plugins:{
                        legend: {
                            display: false
                        },
                    },


                    scales: {
                        y: {
                            grid: {
                                display: false,
                                color: "rgba(0,0,0,0.05)"
                            },
                            stacked: false,
                            ticks: {
                                stepSize: 20
                            }
                        },
                        x: {
                            stacked: false,
                            grid: {
                                color: "rgba(0,0,0,0.01)"
                            }
                        }
                    }
                };

                charts.push(this.respChart($("#high-performing-product"), 'Bar', barChart, barOpts));
            }
        },

        //initializing various components and plugins
        Profile.prototype.init = function () {
            var $this = this;
            // font
            Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

            // init charts
            $this.charts = this.initCharts();

            // enable resizing matter
            $(window).on('resize', function (e) {
                $.each($this.charts, function (index, chart) {
                    try {
                        chart.destroy();
                    }
                    catch (err) {
                    }
                });
                $this.charts = $this.initCharts();
            });
        },

        //init flotchart
        $.Profile = new Profile, $.Profile.Constructor = Profile
}(window.jQuery),

    //initializing Profile
    function ($) {
        "use strict";
        $.Profile.init()
    }(window.jQuery);