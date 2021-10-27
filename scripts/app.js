$(".customer-list").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  // tu dong slide
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='ri-arrow-left-line'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='ri-arrow-right-line'></i></button>",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
  ],
});
