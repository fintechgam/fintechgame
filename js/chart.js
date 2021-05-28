var barChartData = {
    labels: ["April", "May", "Jun","July"],
  
    datasets: [
      {
        label: "",
        backgroundColor: "#047bf8",
        HoverBackgroundColor: "none",
        borderColor: false,
        borderWidth: 0,
        data: [1.3, 0.7,1,1.2],
      },
      {
        label: "",
        backgroundColor: "#047bf8",
        HoverBackgroundColor: "none",
        borderColor: false,
        borderWidth: 0,
        data: [1.5, 1.4,1.5,1.6],
      },
      {
        label: "",
        backgroundColor: "#047bf8",
        HoverBackgroundColor: "none",
        borderColor: false,
        borderWidth: 0,
        data: [1.2, 1.3,0.8,0.6],
      },
      {
        label: "",
        backgroundColor: "#047bf8",
        HoverBackgroundColor: "none",
        borderColor: false,
        borderWidth: 0,
        data: [0.5, 1.3, 1.2,1.4],
      },
    ],
  };
  
  var chartOptions = {
    tooltips: { enabled: false },
    hover: { mode: null },
    responsive: true,
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 2,
            stepSize: 0.5,
          },
        },
      ],
      xAxes: [
        {
          categoryPercentage: 0.7,
          ticks: {
            fontSize: 21,
          },
        },
      ],
    },
  };
  
  var barChartData_right = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "Jun"],
  
    datasets: [
      {
        label: "",
        backgroundColor: "#d2c9c9",
        HoverBackgroundColor: "none",
        borderColor: false,
        borderWidth: 0,
        data: [16, 0, 0, 0, 0, 0],
      },
      {
        label: "",
        backgroundColor: "#d2c9c9",
        HoverBackgroundColor: "none",
        borderColor: false,
        borderWidth: 0,
        data: [18, 0, 0, 0, 0, 0],
      },
    ],
  };
  
  var chartOptions_right = {
    responsive: true,
    tooltips: { enabled: false },
    hover: { mode: null },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 30,
            stepSize: 10,
          },
        },
      ],
      xAxes: [
        {
          categoryPercentage: 0.7,
          ticks: {
            fontSize: 21,
          },
        },
      ],
    },
  };
  
  window.onload = function () {
    var ctx = document.getElementById("chart-left1").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: chartOptions,
    });
  
    var ctx = document.getElementById("chart-right1").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData_right,
      options: chartOptions_right,
    });
  
    var ctx = document.getElementById("chart-left2").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: chartOptions,
    });
  
    var ctx = document.getElementById("chart-right2").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData_right,
      options: chartOptions_right,
    });
  
    var ctx = document.getElementById("chart-left3").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: chartOptions,
    });
  
    var ctx = document.getElementById("chart-right3").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData_right,
      options: chartOptions_right,
    });
  };
  
    