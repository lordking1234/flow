

$(function () {
  $(document).ready(function () {
    $('#example').DataTable();
  });
});

fetch('https://api.flipsidecrypto.com/api/v2/queries/eb15645a-b428-4490-9716-0a6f47793f4a/data/latest').then(res => res.json()).then(data => {
  const newData = data.reduce((t, i) => {
    return {
      ...t,
      date: [...t.date, i.DATE],
      com_vols: [...t.com_vols, i.SALES_TRXS],
      com_ros: [...t.com_ros, i.BUYERS],
      com_leads: [...t.com_leads, i.SELLERS],
      cum_vols: [...t.cum_vols, i.NFTS],
      cum_rons: [...t.cum_rons, i.MARKETPLACES],
      cum_leads: [...t.cum_leads, i.TOTAL_SALE_VOLUME],
      com_pros: [...t.com_pros, i.AVG_SALE_VOLUME],
      cum_pros: [...t.cum_pros, i.MIN_SALE_VOLUME],
      com_cats: [...t.com_cats, i.MAX_SALE_VOLUME],
      cum_cats: [...t.cum_cats, i.MEDIAN_SALE_VOLUME]
    }

  }, { date: [], com_vols: [], com_ros: [], com_leads: [], cum_vols: [], cum_rons: [], cum_leads: [], com_pros: [], cum_pros: [], com_cats: [], cum_cats: [] });


  var chart000 = {
    series: [{
      name: '',
      type: 'area',
      data: newData.com_vols
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: newData.date,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'Century'
    },
    yaxis: {
      title: {
        text: '# Transactions',
      },
      min: 0
    },
    annotations: {
      xaxis: [{
        x: 1976,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Jump',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " Transactions";
          }
          return y;

        }
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart000"), chart000);
  chart.render();


  //-------------------------------------------


  var chart1112 = {
    series: [{
      name: '',
      type: 'area',
      data: newData.com_leads
    }, {
      name: '',
      type: 'area',
      data: newData.com_ros
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: newData.date,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'year'
    },
    yaxis: {
      title: {
        text: '# Buyers and sellers',
      },
      min: 0
    },
    annotations: {
      xaxis: [{
        x: 1977,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'First Jump',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }, {
        x: 2001,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Second Jump',
          style: {
            color: "#fff",
            background: '#708DD0'
          }
        }
      }, {
        x: 2010,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Third Jump',
          style: {
            color: "#fff",
            background: '#757DD0'
          }
        }
      }]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " Users";
          }
          return y;

        }
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart1112"), chart1112);
  chart.render();









  var chart1113 = {
    series: [{
      name: '',
      type: 'area',
      data: newData.cum_leads
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: newData.date,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'year'
    },
    yaxis: {
      title: {
        text: 'Total Sale Volume',
      },
      min: 0
    },
    annotations: {
      xaxis: [{
        x: 1977,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'First Jump',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }, {
        x: 2001,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Second Jump',
          style: {
            color: "#fff",
            background: '#708DD0'
          }
        }
      }, {
        x: 2010,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Third Jump',
          style: {
            color: "#fff",
            background: '#757DD0'
          }
        }
      }]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " $";
          }
          return y;

        }
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart1113"), chart1113);
  chart.render();


  var chart1114 = {
    series: [{
      name: '',
      type: 'area',
      data: newData.com_cats //MAX_SALE_VOLUME
    }, {
      name: '',
      type: 'area',
      data: newData.com_pros //AVG_SALE_VOLUME
    }, {
      name: '',
      type: 'area',
      data: newData.cum_pros //MIN_SALE_VOLUME
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: newData.date,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'year'
    },
    yaxis: {
      title: {
        text: 'Avg - Min - Max Sale Volume in $',
      },
      min: 0
    },
    annotations: {
      xaxis: [{
        x: 1977,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'First Jump',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }, {
        x: 2001,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Second Jump',
          style: {
            color: "#fff",
            background: '#708DD0'
          }
        }
      }, {
        x: 2010,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Third Jump',
          style: {
            color: "#fff",
            background: '#757DD0'
          }
        }
      }]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " $";
          }
          return y;

        }
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart1114"), chart1114);
  chart.render();





  var chart111 = {
    series: [{
      name: '',
      type: 'area',
      data: newData.cum_cats
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: newData.date,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'year'
    },
    yaxis: {
      title: {
        text: 'Creator Fee Volume in $',
      },
      min: 0
    },
    annotations: {
      xaxis: [{
        x: 1977,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'First Jump',
          style: {
            color: "#fff",
            background: '#775DD0'
          }
        }
      }, {
        x: 2001,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Second Jump',
          style: {
            color: "#fff",
            background: '#708DD0'
          }
        }
      }, {
        x: 2010,
        borderColor: '#999',
        yAxisIndex: 0,
        label: {
          show: true,
          text: 'Third Jump',
          style: {
            color: "#fff",
            background: '#757DD0'
          }
        }
      }]
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " $";
          }
          return y;

        }
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart111"), chart111);
  chart.render();


})
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------






//----------------------------------------------------------------------------------



fetch('https://api.flipsidecrypto.com/api/v2/queries/10c36f71-14a4-4b32-ac9d-085ea057877d/data/latest').then(res => res.json()).then(data => {
  const new7 = data.reduce((t, i) => {
    return {
      ...t,
      ss: [...t.ss, i.BUYERS],
      gg: [...t.gg, i.TOTAL_SALE_VOLUME]
    }

  }, { ss: [], gg: [] });

  var chart11 = {
    series: [{
      data: new7.gg
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    annotations: {
      xaxis: [{
        x: 10,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'Under 10',
        }
      }],
      yaxis: [{
        y: '',
        y2: '',
        label: {
          text: ''
        }
      }]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: new7.ss,
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      reversed: false,
      axisTicks: {
        show: true
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart11"), chart11);
  chart.render();

})
//-----------------------------------------------------------------------------




fetch('https://api.flipsidecrypto.com/api/v2/queries/977db8ad-53b1-4aa4-a663-faa04c17fd37/data/latest').then(res => res.json()).then(data => {
  const new77 = data.reduce((t, i) => {
    return {
      ...t,
      ss: [...t.ss, i.SELLERS],
      gg: [...t.gg, i.TOTAL_SALE_VOLUME]
    }

  }, { ss: [], gg: [] });

  var chart00 = {
    series: [{
      data: new77.gg
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    annotations: {
      xaxis: [{
        x: 10,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'Under 10',
        }
      }],
      yaxis: [{
        y: '',
        y2: '',
        label: {
          text: ''
        }
      }]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: new77.ss,
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      reversed: false,
      axisTicks: {
        show: true
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart00"), chart00);
  chart.render();

})
//-------------------------------------------------------------------------


fetch('https://api.flipsidecrypto.com/api/v2/queries/982cc435-ae39-4c1b-8c73-b1bcabb178e6/data/latest').then(res => res.json()).then(data => {
  const new78 = data.reduce((t, i) => {
    return {
      ...t,
      ss: [...t.ss, i.SELLERS],
      gg: [...t.gg, i.TRXS]
    }

  }, { ss: [], gg: [] });

  var chart88 = {
    series: [{
      data: new78.gg
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    annotations: {
      xaxis: [{
        x: 10,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'Under 10',
        }
      }],
      yaxis: [{
        y: '',
        y2: '',
        label: {
          text: ''
        }
      }]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: new78.ss,
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      reversed: false,
      axisTicks: {
        show: true
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart88"), chart88);
  chart.render();

})
//-------------------------------------------------------------------------




fetch('https://api.flipsidecrypto.com/api/v2/queries/27df0fb2-e02e-45fe-a80a-d36d9ec19e19/data/latest').then(res => res.json()).then(data => {
  const new788 = data.reduce((t, i) => {
    return {
      ...t,
      ss: [...t.ss, i.BUYERS],
      gg: [...t.gg, i.TRXS]
    }

  }, { ss: [], gg: [] });

  var chart99 = {
    series: [{
      data: new788.gg
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    annotations: {
      xaxis: [{
        x: 10,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'Under 10',
        }
      }],
      yaxis: [{
        y: '',
        y2: '',
        label: {
          text: ''
        }
      }]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: new788.ss,
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      reversed: false,
      axisTicks: {
        show: true
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart99"), chart99);
  chart.render();

})










fetch('https://api.flipsidecrypto.com/api/v2/queries/20d1a19d-a148-4fd2-b122-f77f74a5b3cc/data/latest').then(res => res.json()).then(data => {
  const news3 = data.reduce((t, i) => {
    return {
      ...t,
      jjss: [...t.jjss, i.DATE],
      minss: [...t.minss, i.PRICESS]
    }

  }, { minss: [], jjss: [] });


  var chart9090 = {
    series: [{
      data: news3.minss
    }],
    chart: {
      type: 'area',
      height: 350
    },
    annotations: {
      xaxis: [{
        x: 10,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'Under 10',
        }
      }],
      yaxis: [{
        y: '',
        y2: '',
        label: {
          text: ''
        }
      }]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: news3.jjss,
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      reversed: false,
      axisTicks: {
        show: true
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart9090"), chart9090);
  chart.render();
})










var chart9091 = {
  series: [{
    name: 'OffersV2',
    data: [27, 24, 10058, 82]
  }, {
    name: 'FindMarketSale',
    data: [1, 1, 10, 1]
  }, {
    name: 'NFTStorefrontV2',
    data: [608, 728, 436894, 3856]
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        total: {
          enabled: true,
          offsetX: 0,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: ''
  },
  xaxis: {
    categories: ['Sellers', 'Buyers', 'Volume', 'Transactions'],
    labels: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
};



var chart = new ApexCharts(document.getElementById("chart9091"), chart9091);
chart.render();















fetch('https://api.flipsidecrypto.com/api/v2/queries/916800ee-b6cc-497d-bfff-61d46a7f9190/data/latest').then(res => res.json()).then(data => {
  const new7887 = data.reduce((t, i) => {
    return {
      ...t,
      ss: [...t.ss, i.EE],
      gg: [...t.gg, i.TOKEN]
    }

  }, { ss: [], gg: [] });

  var chart9909 = {
    series: [{
      data: new7887.gg
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    annotations: {
      xaxis: [{
        x: 10,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: '',
        }
      }],
      yaxis: [{
        y: '',
        y2: '',
        label: {
          text: ''
        }
      }]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: new7887.ss,
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      reversed: false,
      axisTicks: {
        show: true
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart9909"), chart9909);
  chart.render();

})









fetch('https://api.flipsidecrypto.com/api/v2/queries/4e7dc790-2ecb-4f51-9652-a72a045a6d1d/data/latest').then(res => res.json()).then(data => {
  const new78878 = data.reduce((t, i) => {
    return {
      ...t,
      ss: [...t.ss, i.EE],
      gg: [...t.gg, i.TOKEN]
    }

  }, { ss: [], gg: [] });

  var chart9908 = {
    series: [{
      data: new78878.gg
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    annotations: {
      xaxis: [{
        x: 10,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: '',
        }
      }],
      yaxis: [{
        y: '',
        y2: '',
        label: {
          text: ''
        }
      }]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: new78878.ss,
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      reversed: false,
      axisTicks: {
        show: true
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart9908"), chart9908);
  chart.render();

})


fetch('https://api.flipsidecrypto.com/api/v2/queries/8fe583af-b208-411a-9f91-2b31a61968a3/data/latest').then(res => res.json()).then(data => {
  const new78877 = data.reduce((t, i) => {
    return {
      ...t,
      ss: [...t.ss, i.EE],
      gg: [...t.gg, i.TOKEN]
    }

  }, { ss: [], gg: [] });

  var chart9907 = {
    series: [{
      data: new78877.gg
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    annotations: {
      xaxis: [{
        x: 10,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: '',
        }
      }],
      yaxis: [{
        y: '',
        y2: '',
        label: {
          text: ''
        }
      }]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: new78877.ss,
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      reversed: false,
      axisTicks: {
        show: true
      }
    }
  };

  var chart = new ApexCharts(document.getElementById("chart9907"), chart9907);
  chart.render();

})

