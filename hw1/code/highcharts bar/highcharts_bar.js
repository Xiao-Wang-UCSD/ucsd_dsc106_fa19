Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'fulltime applicants across gender'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'],
        title: {
            text: 'fulltime_men_applied'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'number of applicants',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'woman',
        data: [22371,23748,24507,25775,25321,25761,28351,32049,35408,38822,41047,44430,46845,52265]
    },{
        name: 'men',
        data: [18147,19838,20566,21590,21725,22332,25097,28758,31992,34618,37009,39779,41583,45636]
    }]
});
