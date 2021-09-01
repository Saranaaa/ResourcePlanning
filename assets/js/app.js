let chartIsActive = true;

function onCarouselChange(el, chart){
    
}
$(window).scroll(() => {
  if ($(window).scrollTop() + 500 >= $(".bars").offset().top) {
    if (chartIsActive) {
      let title = $(".bars .chart1").attr("title");
      $(".bars .chart1").append(
        '<canvas id="myChart1" width="400" height="400">'
      );
      $(".bars .chart1 canvas").after(`<h4>${title}</h4>`);
      var ctx1 = document.getElementById("myChart1");
      var myChart = new Chart(ctx1, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          animations: {
            tension: {
              duration: 1000,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
        },
      });

      title = $(".bars .chart2").attr("title");
      $(".bars .chart2").append(
        '<canvas id="myChart2" width="400" ght="400">'
      );
      $(".bars .chart2 canvas").after(`<h4>${title}</h4>`);

      var ctx2 = document.getElementById("myChart2");
      var myChart = new Chart(ctx2, {
        type: "pie",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
        },
      });
     
      title = $(".bars .chart3").attr("title");
      $(".bars .chart3").append(
        '<canvas id="myChart3" width="400" ght="400">'
      );
      $(".bars .chart3 canvas").after(`<h4>${title}</h4>`);
      var ctx3 = document.getElementById("myChart3");
      var myChart = new Chart(ctx3, {
        type: "doughnut",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        },

        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
        },
      });
      $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    })
    }
    if (chartIsActive) chartIsActive = false;
  }
  console.log($(window).scrollTop());
});
