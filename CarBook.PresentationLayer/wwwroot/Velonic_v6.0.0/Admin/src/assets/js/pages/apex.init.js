/**
 * Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex Area Charts
 */


//
// Basic Area Chart
//

var colors = ["#3bc0c3"];
var dataColors = $("#basic-area").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'area',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'straight'
    },
    colors: colors,
    series: [{
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices
    }],
    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: 'datetime',
    },
    legend: {
        horizontalAlign: 'left'
    },
    grid: {
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#basic-area"),
    options
);

chart.render();


//
// Splite Area
//
var colors = ["#3bc0c3", "#6c757d"];
var dataColors = $("#spline-area").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'area',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    colors: colors,
    series: [{
        name: 'Series 1',
        data: [40, 60, 44, 84, 64, 110, 95]
    }, {
        name: 'Series 2',
        data: [20, 30, 22, 42, 32, 55, 44]
    }],
    legend: {
        offsetY: 5,
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    tooltip: {
        fixed: {
            enabled: false,
            position: 'topRight'
        }
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    grid: {
        borderColor: '#f1f3fa',

    }
}

var chart = new ApexCharts(
    document.querySelector("#spline-area"),
    options
);

chart.render();

//
// BASIC BAR CHART
//

var colors = ["#4489e4"];
var dataColors = $("#basic-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [350, 480, 490, 520, 550, 600, 700, 1140, 1260, 1400]
    }],
    colors: colors,
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#basic-bar"),
    options
);

chart.render();


//
// GROUPED BAR CHART
//
var colors = ["#33b0e0", "#f24f7c"];
var dataColors = $("#grouped-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '13px',
            colors: ['#fff'],
        }
    },
    colors: colors,
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [{
        name: 'Series 1',
        data: [45, 60, 41, 64, 22, 43, 21]
    }, {
        name: 'Series 2',
        data: [42, 40, 33, 52, 13, 44, 32]
    }],
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
    legend: {
        offsetY: 5,
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#grouped-bar"),
    options
);

chart.render();

//
// BASIC BOXPLOT
//

var colors = ["#3bc0c3", "#47ad77", "#fa5c7c"];
var dataColors = $("#basic-boxplot").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        type: 'boxPlot',
        data: [{
                x: 'Jan 2015',
                y: [42, 68, 72, 80, 92]
            },
            {
                x: 'Jan 2016',
                y: [43, 65, 69, 76, 81]
            },
            {
                x: 'Jan 2017',
                y: [31, 39, 45, 51, 59]
            },
            {
                x: 'Jan 2018',
                y: [39, 46, 55, 65, 71]
            },
            {
                x: 'Jan 2019',
                y: [29, 31, 35, 39, 44]
            },
            {
                x: 'Jan 2020',
                y: [41, 49, 58, 61, 67]
            },
            {
                x: 'Jan 2021',
                y: [54, 59, 66, 71, 88]
            }
        ]
    }],
    chart: {
        type: 'boxPlot',
        height: 350,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        boxPlot: {
            colors: {
                upper: colors[0],
                lower: colors[1]
            }
        }
    },
    stroke: {
        colors: ['#a1a9b1']
    }
};

var chart = new ApexCharts(document.querySelector("#basic-boxplot"), options);
chart.render();


//
// SCATTER BOXPLOT
//

var colors = ["#3bc0c3", "#47ad77", "#fa5c7c"];
var dataColors = $("#scatter-boxplot").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
            name: 'Box',
            type: 'boxPlot',
            data: [{
                    x: new Date('2017-01-01').getTime(),
                    y: [54, 66, 69, 75, 88]
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: [43, 65, 69, 76, 81]
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: [31, 39, 45, 51, 59]
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: [39, 46, 55, 65, 71]
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: [29, 31, 35, 39, 44]
                }
            ]
        },
        {
            name: 'Outliers',
            type: 'scatter',
            data: [{
                    x: new Date('2017-01-01').getTime(),
                    y: 32
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: 25
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: 64
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 27
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 78
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: 15
                }
            ]
        }
    ],
    chart: {
        type: 'boxPlot',
        height: 350
    },
    colors: colors,
    stroke: {
        colors: ['#a1a9b1']
    },
    legend: {
        offsetY: 10,
    },
    xaxis: {
        type: 'datetime',
        tooltip: {
            formatter: function (val) {
                return new Date(val).getFullYear()
            }
        }
    },
    grid: {
        padding: {
            bottom: 5
        }
    },
    tooltip: {
        shared: false,
        intersect: true
    },
    plotOptions: {
        boxPlot: {
            colors: {
                upper: colors[0],
                lower: colors[1]
            }
        }
    },
};

var chart = new ApexCharts(document.querySelector("#scatter-boxplot"), options);
chart.render();


/* 
// 
// Bubble Charts
// 
*/


function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

var colors = ["#3bc0c3", "#edc755", "#fa5c7c"];
var dataColors = $("#simple-bubble").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bubble',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Bubble 1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Bubble 2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Bubble 3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    }
    ],
    fill: {
        opacity: 0.8,
        gradient: {
            enabled: false
        }
    },
    colors: colors,
    xaxis: {
        tickAmount: 12,
        type: 'category',
    },
    yaxis: {
        max: 70
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    legend: {
        offsetY: 7,
    }
}

var chart = new ApexCharts(
    document.querySelector("#simple-bubble"),
    options
);

chart.render();


//
// 3D BUBBLE CHART
//

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateData1(baseval1, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([baseval1, y, z]);
        baseval1 += 86400000;
        i++;
    }
    return series;
}

var colors = ["#3bc0c3", "#47ad77", "#fa5c7c", "#39afd1"];
var dataColors = $("#second-bubble").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options2 = {
    chart: {
        height: 380,
        type: 'bubble',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Product 1',
        data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product 2',
        data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product 3',
        data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product 4',
        data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    }
    ],
    fill: {
        type: 'gradient',
    },
    colors: colors,
    xaxis: {
        tickAmount: 12,
        type: 'datetime',

        labels: {
            rotate: 0,
        }
    },
    yaxis: {
        max: 70
    },
    legend: {
        offsetY: 7,
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#second-bubble"),
    options2
);

chart.render();

//
// Simple Candlestick chart
//
var colors = ["#47ad77", "#fa5c7c"];
var dataColors = $("#simple-candlestick").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 400,
        type: 'candlestick'
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: colors[0],
                downward: colors[1]
            }
        }
    },
    series: [{
        data: seriesData
    }],

    stroke: {
        show: true,
        colors: '#f1f3fa',
        width: 1
    },
    xaxis: {
        type: 'datetime'
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#simple-candlestick"),
    options
);

chart.render();

//
// Combo Candlestick
//
var colors = ["#47ad77", "#fa5c7c"];
var dataColors = $("#combo-candlestick").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var optionsCandlestick = {
    chart: {
        height: 240,
        type: 'candlestick',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
    },
    series: [{
        data: seriesData
    }],
    plotOptions: {
        candlestick: {
            colors: {
                upward: colors[0],
                downward: colors[1]
            }
        }
    },
    xaxis: {
        type: 'datetime'
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chartCandlestick = new ApexCharts(
    document.querySelector("#combo-candlestick"),
    optionsCandlestick
);

chartCandlestick.render();


var colors = ["#3bc0c3", "#edc755"];
var dataColors = $("#combo-bar-candlestick").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 160,
        type: 'bar',
        toolbar: {
            show: false,
            autoSelected: 'selection'
        },
        selection: {
            xaxis: {
                min: new Date('20 Jan 2017').getTime(),
                max: new Date('10 Dec 2017').getTime()
            },
            fill: {
                color: '#6c757d',
                opacity: 0.4
            },
            stroke: {
                color: '#6c757d',
            }
        },
        events: {
            selection: function (chart, e) {
                chartCandlestick.updateOptions({
                    xaxis: {
                        min: e.xaxis.min,
                        max: e.xaxis.max
                    }
                }, false, false)
            }
        },

    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            columnWidth: '80%',
            colors: {
                ranges: [{
                    from: -1000,
                    to: 0,
                    color: colors[0],
                }, {
                    from: 1,
                    to: 10000,
                    color: colors[1]
                }],

            },
        }
    },
    series: [{
        name: 'volume',
        data: seriesDataLinear
    }],
    xaxis: {
        type: 'datetime',
        axisBorder: {
            offsetX: 13
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#combo-bar-candlestick"),
    options
);

chart.render();

//
// BASIC COLUMN CHART
//
var colors = ["#3bc0c3", "#4489e4", "#33b0e0"];
var dataColors = $("#basic-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 396,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '80%',
            borderRadius: 4,
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: colors,
    series: [{
        name: 'Net Profit',
        data: [82, 50, 55, 42, 45, 48, 52, 53, 41]
    }, {
        name: 'Revenue',
        data: [60, 42, 82, 62, 61, 58, 63, 60, 66]
    }, {
        name: 'Free Cash Flow',
        data: [70, 60, 95, 82, 87, 105, 91, 114, 94]
    }],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    legend: {
        offsetY: 7,
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#basic-column"),
    options
);

chart.render();


//
// COLUMN CHART WITH DATALABELS
//
var colors = ["#3bc0c3"];
var dataColors = $("#datalabels-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%";
        },
        offsetY: -25,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },
    colors: colors,
    legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -5,
    },
    series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        labels: {
            offsetY: 0,
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
            offsetY: -10,
        }
    },
    fill: {
        gradient: {
            enabled: false,
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        },
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val + "%";
            }
        }

    },
    title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 360,
        align: 'center',
        style: {
            color: '#444'
        }
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#datalabels-column"),
    options
);

chart.render();


//
// Simple line chart
//
var colors = ["#edc755"];
var dataColors = $("#line-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: colors,
    stroke: {
        width: [4],
        curve: 'straight'
    },
    series: [{
        name: "Desktops",
        data: [40, 35, 55, 60, 33, 70, 80, 96, 130]
    }],
    title: {
        text: 'Product Trends by Month',
        align: 'center'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart"),
    options
);
chart.render();

//
// Line chart with data labels
//

var colors = ["#d03f3f,#3bc0c3"];
var dataColors = $("#line-chart-datalabel").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: colors,
    dataLabels: {
        enabled: true,
    },
    stroke: {
        width: [4, 4],
        curve: 'smooth'
    },
    series: [{
        name: "High - 2022",
        data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
        name: "Low - 2022",
        data: [12, 11, 14, 18, 17, 13, 13]
    }
    ],
    title: {
        text: 'Average High & Low Temperature',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    markers: {
        style: 'inverted',
        size: 6
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
            text: 'Month'
        }
    },
    yaxis: {
        title: {
            text: 'Temperature'
        },
        min: 5,
        max: 40
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-datalabel"),
    options
);

chart.render();


//
// LINE & COLUMN CHART
//
var colors = ["#4489e4", "#3bc0c3"];
var dataColors = $("#line-column-mixed").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    series: [{
        name: 'Website Blog',
        type: 'column',
        data: [500, 510, 420, 680, 400, 415, 340, 360, 780, 340, 270, 180]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [28, 42, 30, 25, 48, 30, 26, 30, 28, 32, 15, 20]
    }],
    stroke: {
        width: [0, 4]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    colors: colors,
    yaxis: [{
        title: {
            text: 'Website Blog',
        },

    }, {
        opposite: true,
        title: {
            text: 'Social Media'
        }
    }],
    legend: {
        offsetY: 7,
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
      }

}

var chart = new ApexCharts(
    document.querySelector("#line-column-mixed"),
    options
);

chart.render();


//
// MULTIPLE Y-AXIS CHART
//
var colors = ["#3bc0c3", "#39afd1", "#fa5c7c"];
var dataColors = $("#multiple-yaxis-mixed").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [0, 0, 3]
    },
    series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    colors: colors,
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: colors[0]
            },
            labels: {
                style: {
                    color: colors[0]
                }
            },
            title: {
                text: "Income (thousand crores)"
            },
        },
        {
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: colors[2]
            },
            labels: {
                style: {
                    color: colors[2]
                }
            },
            title: {
                text: "Revenue (thousand crores)"
            }
        },

    ],
    tooltip: {
        followCursor: true,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y + " thousand crores"
                }
                return y;
            }
        }
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    legend: {
        offsetY: 7,
    },
    responsive: [{
        breakpoint: 600,
        options: {
            yaxis: {
                show: false
            },
            legend: {
                show: false
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#multiple-yaxis-mixed"),
    options
);

chart.render();

//
// SIMPLE PIE CHART
//
var colors = ["#3bc0c3", "#6c757d", "#4489e4", "#d03f3f", "#edc755"];
var dataColors = $("#simple-pie").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'pie',
    }, 
    series: [60, 40, 32, 55, 18],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: colors,
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]

}

var chart = new ApexCharts(
    document.querySelector("#simple-pie"),
    options
);

chart.render();


//
// SIMPLE DONUT CHART
//
var colors = ["#3bc0c3", "#6c757d", "#4489e4", "#d03f3f", "#edc755"];
var dataColors = $("#simple-donut").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'donut',
    }, 
    series: [40, 60, 45, 22, 18],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: colors,
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#simple-donut"),
    options
);

chart.render();

//
// BASIC POLAR AREA CHART
//

var colors = ["#3bc0c3", "#6c757d", "#4489e4", "#d03f3f", "#edc755", "#33b0e0"];
var dataColors = $("#basic-polar-area").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [16, 22, 24, 16, 17, 12],
    chart: {
        height: 380,
        type: 'polarArea',
    },
    stroke: {
        colors: ['#fff']
    },
    fill: {
        opacity: 0.8
    },
    labels: ['Vote A', 'Vote B', 'Vote C', 'Vote D', 'Vote E', 'Vote F'],
    legend: {
        position: 'bottom'
    },
    colors: colors,
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#basic-polar-area"), options);
chart.render();

//
// MONOCHROME POLAR AREA
//
var options = {
    series: [72, 80, 60, 75, 65],
    chart: {
        height: 380,
        type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
        opacity: 1
    },
    stroke: {
        width: 1
    },
    yaxis: {
        show: false
    },
    legend: {
        position: 'bottom'
    },
    plotOptions: {
        polarArea: {
            rings: {
                strokeWidth: 0
            },
            spokes: {
                strokeWidth: 0
            },
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            shadeTo: 'light',
            color: '#f24f7c',
            shadeIntensity: 0.6
        }
    }
};

var chart = new ApexCharts(document.querySelector("#monochrome-polar-area"), options);
chart.render();


//
 // BASIC RADAR CHART
 //
 var colors = ["#4489e4"];
 var dataColors = $("#basic-radar").data('colors');
 if (dataColors) {
     colors = dataColors.split(",");
 }
 var options = {
    chart: {
        height: 350,
        type: 'radar',
    },
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }],
    colors: colors,
    labels: ['January', 'February', 'March', 'April', 'May', 'June']
}

var chart = new ApexCharts(
    document.querySelector("#basic-radar"),
    options
);

chart.render();


 //
 // RADAR WITH POLYGON-FILL
 //
 var colors = ["#d03f3f"];
 var dataColors = $("#radar-polygon").data('colors');
 if (dataColors) {
     colors = dataColors.split(",");
 }
 var options = {
    chart: {
        height: 350,
        type: 'radar',
    },
    series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    plotOptions: {
        radar: {
            size: 140,
        }
    },
    colors: colors,
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: colors,
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return val
            }   
        }
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function(val, i) {
                if(i % 2 === 0) {
                    return val
                } else {
                    return ''
                }
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#radar-polygon"),
    options
);

chart.render();


//
// BASIC RADIALBAR CHART
//
var colors = ["#3bc0c3"];
var dataColors = $("#basic-radialbar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            },
            track: {
                background: "rgba(170,184,197, 0.2)"
            }
        },
    },
    colors: colors,
    series: [70],
    labels: ['CRICKET'],

}

var chart = new ApexCharts(
    document.querySelector("#basic-radialbar"),
    options
);

chart.render();


//
// MULTIPLE RADIALBARS
//
var colors = ["#3bc0c3", "#4489e4", "#edc755", "#33b0e0"];
var dataColors = $("#multiple-radialbar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'radialBar',
    },
    plotOptions: {
        circle: {
            dataLabels: {
                showOn: 'hover'
            }
        },
        radialBar: {
            track: {
                background: "rgba(170,184,197, 0.2)",
            }
        }
    },
    colors: colors,
    series: [66, 70, 55, 92],
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    responsive: [{
        breakpoint: 380,
        options: {
            chart: {
                height: 260,
            }
        }
    }]

}

var chart = new ApexCharts(
    document.querySelector("#multiple-radialbar"),
    options
);

chart.render();