const jsdom = require("jsdom");
const { JSDOM } = jsdom;

global.document = new JSDOM("../index.html").window.document;

var ctx = global.document.getElementById("myChart").getContext("2d");
var options = {
  scales: {
    xAxes: [{
      gridLines: {
        color: "#dadde8",
      }
    }],
    yAxes: [{
      gridLines: {
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        max: 30,
        min: 0
      }
    }]
  },
  hover: {
    mode: 'nearest',
    animationDuration: 0
  },
  legend: {
    display: false
  },
  events: false,
  tooltips: {
    enabled: false
  },
  animation: {
    duration: 1
  }
}

var gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, '#dce8fd');
gradient.addColorStop(1, '#ffffff');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sun", "Mon", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
      data: [15, 12, 18, 27, 20, 13, 28],
      backgroundColor: gradient, // Put the gradient here as a fill color
      // backgroundColor: [
      //   'linear-gradient(to bottom right, red, yellow)'
      // ],
      borderColor: "#4d8cf4",
      pointRadius: "0",
      pointHoverRadius: "3",
      pointHoverBackgroundColor: "white",
      pointHoverBorderWidth: "3"
    }]
  },
  options: options
});