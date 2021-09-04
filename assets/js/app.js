let chartIsActive = true;
let chart1 = {
  type: "bar",
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
};
let chart2 = {
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
};
let chart3 = {
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
};


function loadChart(chartBox, chartId, chart) {
  // let title = $(`.bars ${chartBox}`).attr("title");
  $(`.bars ${chartBox}`).append(
    `<canvas id="${chartId}" width="100" height="100">`
  );
  // $(`.bars ${chartBox} canvas`).after(`<h4>${title}</h4>`);
  var ctx = document.getElementById(chartId);
  new Chart(ctx, {
    type: chart.type,
    data: chart.data,
    options: chart.options,
  });
}

$(window).scroll(() => {
  if ($(window).scrollTop() + 500 >= $(".bars").offset().top) {
    if (chartIsActive) {
      $(".owl-carousel").owlCarousel({
        loop: true,
        // autoplay: true,
        margin: 10,
        nav: false,
        responsive: {
          0: {
            items: 1,
          },
        },
        onInitialized: () => {
          loadChart(".owl-item.active .chart2-1", "myChart2", chart2);
          loadChart(".owl-item.active .chart2-2", "myChart1", chart1);
          loadChart(".owl-item.active .chart2-3", "myChart3", chart1);
          loadChart(".owl-item.active .chart2-4", "myChart4", chart3);
        },
        onTranslated: (e) => {

          $('div[class*="chart"]').empty();

          if (e.item.index == 3) {
            loadChart(".owl-item.active .chart2-1", "myChart2", chart2);
            loadChart(".owl-item.active .chart2-2", "myChart1", chart1);
            loadChart(".owl-item.active .chart2-3", "myChart3", chart1);
            loadChart(".owl-item.active .chart2-4", "myChart4", chart3);
          }
          if (e.item.index == 4) {
            loadChart(".owl-item.active .chart2-1", "myChart2", chart2);
            loadChart(".owl-item.active .chart2-2", "myChart1", chart1);
            loadChart(".owl-item.active .chart2-3", "myChart3", chart1);
            loadChart(".owl-item.active .chart2-4", "myChart4", chart3);
          }

          if (e.item.index == 2 || e.item.index == 5) {
            loadChart(".owl-item.active .chart2-1", "myChart2", chart2);
            loadChart(".owl-item.active .chart2-2", "myChart1", chart1);
            loadChart(".owl-item.active .chart2-3", "myChart3", chart1);
            loadChart(".owl-item.active .chart2-4", "myChart4", chart3);
          }
        },
      });
    }
    if (chartIsActive) chartIsActive = false;
  }


  if (
    $(window).scrollTop() + 80 <= $("#about").offset().top &&
    $(window).scrollTop() + 90 >= $("#home").offset().top
  ) {
    $(".nav_scroll a.active").removeClass("active");
    $(".nav_scroll a[href='#home']").addClass("active");
  }
  if (
    $(window).scrollTop() + 80 <= $("#service").offset().top &&
    $(window).scrollTop() + 90 >= $("#about").offset().top
  ) {
    $(".nav_scroll a.active").removeClass("active");
    $(".nav_scroll a[href='#about']").addClass("active");
  }
  if (
    $(window).scrollTop() + 80 <= $("#faq").offset().top &&
    $(window).scrollTop() + 90 >= $("#service").offset().top
  ) {
    $(".nav_scroll a.active").removeClass("active");
    $(".nav_scroll a[href='#service']").addClass("active");
  }
  if (
    $(window).scrollTop() + 80 <= $("#contact").offset().top &&
    $(window).scrollTop() + 90 >= $("#faq").offset().top
  ) {
    $(".nav_scroll a.active").removeClass("active");
    $(".nav_scroll a[href='#faq']").addClass("active");
  }
  if (
    $(window).scrollTop() + 80 <= $(".footer-middle").offset().top &&
    $(window).scrollTop() + 90 >= $("#contact").offset().top
  ) {
    $(".nav_scroll a.active").removeClass("active");
    $(".nav_scroll a[href='#contact']").addClass("active");
  }
});

$(() => {
  $(".accordion .card .card-header").each((i,e)=>{
    $(e).click(()=>{
      let data = $(`.accordion [data-target="${e.id}"]`);
      if(!$(data).hasClass("open")){
        $(".open").removeClass("open").slideUp();
        $(data).slideToggle();
        data.addClass("open");
        $(".open-head").removeClass("open-head")
        $(e).addClass("open-head");
      }
      else {
        $(".open").removeClass("open").slideUp();
        $(data).slideUp();
        $(".open-head").removeClass("open-head")

      }
    })
  })

  $(".nav_scroll a").each((i, e) => {
    $(e).on("click", function () {
      $(this).parent().siblings().find("a").removeClass("active");
      $(this).addClass("active");
    });
  });
});
