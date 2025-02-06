const plugin = {
  beforeInit(chart) {
      const originalFit = chart.legend.fit;
      chart.legend.fit = function fit() {
          originalFit.bind(chart.legend)();
          this.height += 10;
      };
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("barChart").getContext("2d");

  new Chart(ctx, {
      type: "bar",
      data: {
          labels: [
              "Swiggy IPO", "PN Gadgil IPO", "Pakka Analyst Meet", "Ola Electric IPO",
              "Waaree Energy IPO", "HDB Financial Services", "Investor Meet",
              "Microsoft Event", "Wealth Advisor", "Swiggy IPO", "PN Gadgil IPO",
              "Pakka Analyst Meet", "Ola Electric IPO", "Waaree Energy IPO"
          ],
          datasets: [
              {
                  label: "Number of Attendees",
                  data: [30, 8, 36, 12, 25, 27, 11, 25, 21, 23, 38, 32, 36, 34],
                  backgroundColor: "rgba(75, 101, 225, 1)",
                  borderWidth: 1,
                  borderRadius: 8,
                  barPercentage: 0.5,
                  categoryPercentage: 0.7,
              },
          ],
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: window.innerWidth > 600, // Hide legend on mobile (width <= 600px)
                  position: "top",
                  align: "start",
                  labels: {
                      usePointStyle: true,
                      pointStyle: "circle",
                  },
              },
              datalabels: {
                  anchor: "end",
                  align: "end",
                  color: "#333",
                  font: {
                      weight: "200",
                  },
                  formatter: value => value,
              },
          },
          scales: {
              y: {
                  beginAtZero: true,
                  max: 50,
                  ticks: {
                      stepSize: 5,
                  },
              },
              x: {
                  ticks: {
                      autoSkip: false,
                      display: window.innerWidth > 600, // Hide X-axis labels on mobile
                      callback: function (value) {
                          return this.getLabelForValue(value).split(" ");
                      },
                  },
              },
          },
      },
      plugins: [ChartDataLabels, plugin],
  });

  // Update chart on window resize
  window.addEventListener("resize", function () {
      const chartInstance = Chart.instances[0]; // Get first chart instance
      if (chartInstance) {
          chartInstance.options.plugins.legend.display = window.innerWidth > 600;
          chartInstance.options.scales.x.ticks.display = window.innerWidth > 600;
          chartInstance.update(); // Apply changes
      }
  });
});
