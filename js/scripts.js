function changeuser() {
  var userhtml = document.getElementById("chang-user").textContent;
  let userinput = document.getElementById("user-value").value;
  document.getElementById("chang-user").innerHTML = userinput;
  document.getElementById("user-value").value = userhtml;

  var usdhtml = document.getElementById("USD").textContent;
  let usdinput = document.getElementById("USD-hidden").value;
  document.getElementById("USD").innerHTML = usdinput;
  document.getElementById("USD-hidden").value = usdhtml;

  let lsthtml = document.getElementsByClassName("logged-user-role");
  let lstinputhidden = document.getElementsByClassName("logged-hidden");
  let msthtml = lsthtml[0].textContent;
  let mstinpur = lstinputhidden[0].value;
  for (i = 0; i < lsthtml.length; i++) {
    lsthtml[i].innerHTML = mstinpur;
  }
  for (i = 0; i < lstinputhidden.length; i++) {
    lstinputhidden[i].value = msthtml;
  }

  let eye = document.getElementById("eye_click1");
  let eyecustom = "fa-eye";
  if (eye.classList[1] == "fa-eye") {
    eyecustom = "fa-eye-slash";
  }
  eye.classList.remove(eye.classList[1]);
  eye.classList.add(eyecustom);
}

function changeuser1() {
  var userhtml = document.getElementById("chang-user1").textContent;
  let userinput = document.getElementById("user-value1").value;
  document.getElementById("chang-user1").innerHTML = userinput;
  document.getElementById("user-value1").value = userhtml;

  var usdhtml = document.getElementById("USD").textContent;
  let usdinput = document.getElementById("USD-hidden").value;
  document.getElementById("USD").innerHTML = usdinput;
  document.getElementById("USD-hidden").value = usdhtml;

  let lsthtml = document.getElementsByClassName("logged-user-role");
  let lstinputhidden = document.getElementsByClassName("logged-hidden");
  let msthtml = lsthtml[0].textContent;
  let mstinpur = lstinputhidden[0].value;
  for (i = 0; i < lsthtml.length; i++) {
    lsthtml[i].innerHTML = mstinpur;
  }
  for (i = 0; i < lstinputhidden.length; i++) {
    lstinputhidden[i].value = msthtml;
  }

  let eye = document.getElementById("eye_click");
  let eyecustom = "fa-eye";
  if (eye.classList[1] == "fa-eye") {
    eyecustom = "fa-eye-slash";
  }
  eye.classList.remove(eye.classList[1]);
  eye.classList.add(eyecustom);
  console.log(eye.classList);
}

var barChartData = {
  labels: ["Nov-25", " ", "Jan-27", "Mar-31", "Jun-02", "Aug-04", "Otc-06"],

  datasets: [
    {
      label: "",
      backgroundColor: "#047bf8",
      borderColor: false,
      borderWidth: 0,
      data: [3, 0, 4.2, 0, 0, 0, 0]
    },
    {
      label: "",
      backgroundColor: "#047bf8",
      borderColor: false,
      borderWidth: 0,
      data: [4, 0, 2.5, 0, 0, 0, 0]
    },
    {
      label: "",
      backgroundColor: "#047bf8",
      borderColor: false,
      borderWidth: 0,
      data: [4, 0, 1.3, 0, 0, 0, 0]
    },
  ]
};

var chartOptions = {
  responsive: true,
  legend: {
    display: false
  },
  title: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1
      }
    }],
    xAxes: [{
      ticks: {
        fontSize: 18,
      }
    }]
  }
}

var barChartData_right = {
  labels: ["Nov", "Jan", "Mar", "May", "Jul", "Sep"],

  datasets: [
    {
      label: "",
      backgroundColor: "#d2c9c9",
      borderColor: false,
      borderWidth: 0,
      data: [16, 0, 0, 0, 0, 0]
    },
    {
      label: "",
      backgroundColor: "#d2c9c9",
      borderColor: false,
      borderWidth: 0,
      data: [18, 0, 0, 0, 0, 0]
    },
  ]
};

var chartOptions_right = {
  responsive: true,
  legend: {
    display: false
  },
  title: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 30,
        stepSize: 10
      }
    }],
    xAxes: [{
      ticks: {
        fontSize: 18,
      }
    }]
  }
}

window.onload = function () {
  var ctx = document.getElementById("chart-left1").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });

  var ctx = document.getElementById("chart-right1").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData_right,
    options: chartOptions_right
  });

  var ctx = document.getElementById("chart-left2").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });

  var ctx = document.getElementById("chart-right2").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData_right,
    options: chartOptions_right
  });

  var ctx = document.getElementById("chart-left3").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });

  var ctx = document.getElementById("chart-right3").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData_right,
    options: chartOptions_right
  });
};
