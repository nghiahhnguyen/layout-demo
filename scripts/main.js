var ctx = document.getElementById("myChart").getContext("2d");
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
      }
    }]
  },
  hover: {
    mode: 'nearest'
  },
  events: ["mousemove"]
}

var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#4d8cf4');
gradient.addColorStop(1, '#ffffff');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sun", "Mon", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
      data: [15, 12, 6, 27, 20, 13, 28],
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