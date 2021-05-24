var barChartData = {
    labels: ["Nov-25", " ", "Jan-27", "Mar-31", "Jun-02", "Aug-04", "Otc-06"],
  
    datasets: [
      {
        label: "",
        backgroundColor: "#047bf8",
        HoverBackgroundColor: "none",
        borderColor: false,
        borderWidth: 0,
        data: [3, 0, 4.2, 0, 0, 0, 0],
      },
      {
        label: "",
        backgroundColor: "#047bf8",
        HoverBackgroundColor: "none",
        borderColor: false,
        borderWidth: 0,
        data: [4, 0, 2.5, 0, 0, 0, 0],
      },
      {
        label: "",
        backgroundColor: "#047bf8",
        HoverBackgroundColor: "none",
        borderColor: false,
        borderWidth: 0,
        data: [4, 0, 1.3, 0, 0, 0, 0],
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
            max: 5,
            stepSize: 1,
          },
        },
      ],
      xAxes: [
        {
          categoryPercentage: 0.7,
          ticks: {
            fontSize: 10,
          },
        },
      ],
    },
  };
  
  var barChartData_right = {
    labels: ["Nov", "Jan", "Mar", "May", "Jul", "Sep"],
  
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
            fontSize: 18,
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
  
    