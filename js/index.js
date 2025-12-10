$(document).ready(() => {
  $(".testimonial-slider").slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slick-overview-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  console.log($());

  $(".overview-card").hover(
    function () {
      $(this).find(".overview-content p").slideDown();
    },
    function () {
      $(this).find(".overview-content p").slideUp();
    }
  );
});
