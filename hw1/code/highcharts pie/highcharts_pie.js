// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Applicants across gender in 2005'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
						enabled: true
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'catagory',
        colorByPoint: true,
        data: [{
            name: 'fulltime men applicants',
            y: 18147,
        }, {
            name: 'fulltime women applicants',
            y: 22371
        },
        ]
    }]
});
