
/*  //without smoothing

$(".smallImg").click(function(){
    
let imgs =$(this).attr("src");
$("#bigImg").attr("src",imgs)
})


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({loop:true});
  });

  */


// with smoothing

 $(".smallImg").click(function(){
    
  let imgs =$(this).attr("src");
  $('#bigImg').fadeTo(500,0.5,function(){
    $("#bigImg").attr("src",imgs)  
    $('#bigImg').fadeTo(500,1);
  
  });
  })
  

  
  
/* for Reviews Section */


  $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        margin:10,
        responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          768:{
            items:2,
            nav:false
          },
          1050:{
              items:3,
              nav:false
          },
          1350:{
              items:4,
              nav:true,
          }
          
      }
      
      });
    });


 


    /* Related products */

    $('.slick-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
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
    