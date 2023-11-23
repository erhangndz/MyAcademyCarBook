/*
Template Name: Codefox - Responsive Bootstrap 5 Admin Dashboard
Author: Techzaa
File: Sparkline charts init js
*/

$(document).ready(function () {

    var DrawSparkline = function () {
        // Line Chart
        var colors = ["#3bc0c3", "#4489e4"];
        var dataColors = $("#sparkline1").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#sparkline1').sparkline([42, 48, 56, 45, 60, 58, 42, 40, 60], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.3),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        $('#sparkline1').sparkline([35, 55, 48, 45, 58, 62, 42, 52, 32], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 40,
            lineColor: colors[1],
            fillColor: hexToRGB(colors[1], 0.3),
            composite: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        // Bar Chart
        var colors = ['#3bc0c3'];
        var dataColors = $("#sparkline2").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#sparkline2').sparkline([8, 14, 16, 12, 18, 20, 10, 14, 22, 12, 14, 10, 14, 16, 13, 16], {
            type: 'bar',
            height: '165',
            barWidth: '10',
            barSpacing: '3',
            barColor: colors
        });

        // Pie Chart
        var colors = ["#3bc0c3", "#4489e4", "#d03f3f", "#716cb0"];
        var dataColors = $("#sparkline3").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#sparkline3').sparkline([20, 15, 20, 5], {
            type: 'pie',
            width: '165',
            height: '165',
            sliceColors: colors
        });

        // Combine Line Chart
        var colors = ['#3bc0c3', '#716cb0'];
        var dataColors = $("#sparkline4").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#sparkline4').sparkline([5, 48, 30, 40, 49, 50, 62, 42, 44], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: 'transparent',
            lineWidth: 2,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false
        });
        $('#sparkline4').sparkline([3, 24, 25, 35, 40, 45, 42, 24, 42], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 40,
            lineColor: colors[1],
            fillColor: 'transparent',
            composite: true,
            lineWidth: 2,
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            highlightLineColor: 'rgba(0,0,0,1)',
            highlightSpotColor: 'rgba(0,0,0,1)'
        });

        // Composite bar Chart
        var colors = ['#f2f2f7', '#3bc0c3'];
        var dataColors = $("#sparkline6").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'line',
            width: "100%",
            height: '165',
            lineColor: colors[0],
            lineWidth: 2,
            fillColor: 'rgba(227,234,239,0.3)',
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)'
        });
        $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            height: '165',
            barWidth: '10',
            barSpacing: '5',
            composite: true,
            barColor: colors[1]
        });

        // Discrete Chart
        var colors = ['#33b0e0'];
        var dataColors = $("#sparkline7").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $("#sparkline7").sparkline([8, 12, 14, 14, 8, 6, 4, 2, 8, 8, 10, 12, 6, 8, 10, 16, 14, 12, 18, 6, 4, 8, 2, 10, 12, 8, 6, 14], {
            type: 'discrete',
            width: '280',
            height: '165',
            lineColor: colors
        });

        // Bullet Chart
        var colors = ['#3bc0c3', '#4489e4'];
        var dataColors = $("#sparkline8").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#sparkline8').sparkline([12, 14, 16, 12, 9], {
            type: 'bullet',
            width: '280',
            height: '80',
            targetColor: colors[0],
            performanceColor: colors[1]
        });

        // Box Plot Chart
        var colors = ['#3bc0c3', '#1a2942', '#d1d7d973'];
        var dataColors = $("#sparkline9").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#sparkline9').sparkline([8, 42, 36, 49, 56, 50, 70, 66, 98, 92, 75, 89, 90, 89, 100], {
            type: 'box',
            width: '280',
            height: '80',
            boxLineColor: colors[0],
            boxFillColor: 'transparent',
            whiskerColor: colors[1],
            medianColor: colors[1],
            targetColor: colors[1]
        });

        // Tristate Charts
        var colors = ['#3bc0c3', '#1a2942', '#d1d7d973'];
        var dataColors = $("#sparkline10").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $('#sparkline10').sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
            height: '80',
            width: '100%',
            type: 'tristate',
            posBarColor: colors[0],
            negBarColor: colors[1],
            zeroBarColor: colors[2],
            barWidth: 8,
            barSpacing: 3,
            zeroAxis: false
        });

    },
        DrawMouseSpeed = function () {
            var mrefreshinterval = 500; // update display every 500ms
            var lastmousex = -1;
            var lastmousey = -1;
            var lastmousetime;
            var mousetravel = 0;
            var mpoints = [];
            var mpoints_max = 30;
            $('html').mousemove(function (e) {
                var mousex = e.pageX;
                var mousey = e.pageY;
                if (lastmousex > -1) {
                    mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
                }
                lastmousex = mousex;
                lastmousey = mousey;
            });
            var mdraw = function () {
                var md = new Date();
                var timenow = md.getTime();
                if (lastmousetime && lastmousetime != timenow) {
                    var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                    mpoints.push(pps);
                    if (mpoints.length > mpoints_max)
                        mpoints.splice(0, 1);
                    mousetravel = 0;
                    var colors = ['#f1556c'];
                    var dataColors = $("#sparkline5").data('colors');
                    if (dataColors) {
                        colors = dataColors.split(",");
                    }
                    $('#sparkline5').sparkline(mpoints, {
                        tooltipSuffix: ' pixels per second',
                        type: 'line',
                        width: "100%",
                        height: '165',
                        chartRangeMax: 77,
                        maxSpotColor: false,
                        minSpotColor: false,
                        spotColor: false,
                        lineWidth: 1,
                        lineColor: colors,
                        fillColor: hexToRGB(colors[0], 0.3),
                        highlightLineColor: 'rgba(24,147,126,.1)',
                        highlightSpotColor: 'rgba(24,147,126,.2)'
                    });
                }
                lastmousetime = timenow;
                setTimeout(mdraw, mrefreshinterval);
            }
            // We could use setInterval instead, but I prefer to do it this way
            setTimeout(mdraw, mrefreshinterval);
        };

    DrawSparkline();
    DrawMouseSpeed();

    var resizeChart;

    $(window).resize(function (e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function () {
            DrawSparkline();
            DrawMouseSpeed();
        }, 300);
    });
});

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}