const plugin = {
    beforeInit(chart) {
        const originalFit = chart.legend.fit;
        chart.legend.fit = function fit() {
            originalFit.bind(chart.legend)();
            this.height += 10;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("barChart").getContext("2d");
  
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Swiggy IPO",
          "PN Gadgil IPO",
          "Pakka Analyst Meet",
          "Ola Electric IPO",
          "Waaree Energy IPO",
          "HDB Financial Services",
          "Investor Meet",
          "Microsoft Event",
          "Wealth Advisor",
          "Swiggy IPO",
          "PN Gadgil IPO",
          "Pakka Analyst Meet",
          "Ola Electric IPO",
          "Waaree Energy IPO",
        ],
        datasets: [
          {
            label: "Number of Attendees",
            data: [30, 8, 36, 12, 25, 27, 11, 25, 21, 23, 38, 32, 36, 34],
            backgroundColor: "rgba(75, 101, 225, 1)",
            borderWidth: 1,
            borderRadius: 8, // Rounded top edges
            barPercentage: 0.5, // Reduce bar width
            categoryPercentage: 0.7, // Add spacing between bars
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Fix height issue
        plugins: {
            legend: {
                display : true,
                position: "top",
                align: "start",
                labels: {
                    usePointStyle: true, // Makes the legend marker circular
                    pointStyle: "circle", // Sets the shape to a circle
                },
            },
          datalabels: {
            anchor: "end", // Keeps the label at the end of the bar
            align: "end", // Aligns the label to the right side
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
              autoSkip: false, // Ensure all labels show
              callback: function (value) {
                return this.getLabelForValue(value).split(" ");
              },
            },
          },
        },
      },
      plugins: [ChartDataLabels, plugin], // Enable data labels
    });
  });