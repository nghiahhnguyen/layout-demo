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
      },
      ticks: {
        max: 30,
        min: 0
      }
    }]
  },
  hover: {
    mode: 'nearest'
  },
  events: ["mousemove"],
  animation: {
    onComplete: function () {
      var ctx = this.chart.ctx;
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";

      this.chart.config.data.datasets.forEach(function (dataset) {
        ctx.fillStyle = dataset.strokeColor;
        dataset.metaDataset._points.forEach(function (p) {
          ctx.fillText(p._chart.config.data.datasets[p._datasetIndex].data[p._index], p._model.x, p._model.y - 10);
        });
      })
    }
  },
  legend: {
    display: false
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