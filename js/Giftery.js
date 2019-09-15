

//start navbar

$("#btn-toggle-0").click(function(){
  $(".sidenav").animate({left:"0px"},500);
})

$("#close").click(function(){
$(".sidenav").animate({left:"-250px"},500);    
})

//end navbar




// start slick slider
$('.slick-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    touchMove: false,
    autoplaySpeed: 2000,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      } 
    ]
  });
// end slick slider  